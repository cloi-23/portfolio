import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { loadModels } from "./utils/faceApi";
import averageDescriptor from "./utils/averageDescriptor";

export default function VideoFeed({ knownFaces, setKnownFaces, threshold }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [matcher, setMatcher] = useState(null);
  const [enrolling, setEnrolling] = useState(false);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const poses = ["Front", "Look Left", "Look Right", "Look Up", "Look Down"];
  const samplesPerPose = 3;

  useEffect(() => {
    let stream;
    let isMounted = true;
    async function setup() {
      await loadModels();
      if (!isMounted) return;
      if (videoRef.current) {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (isMounted && videoRef.current) videoRef.current.srcObject = stream;
      }
      if (isMounted) setReady(true);
    }
    setup();

    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop());
      if (videoRef.current) videoRef.current.srcObject = null;
    };
  }, []);

  useEffect(() => {
    if (knownFaces.length > 0) {
      const labeled = knownFaces.map(
        (f) => new faceapi.LabeledFaceDescriptors(f.label, f.descriptors)
      );
      setMatcher(new faceapi.FaceMatcher(labeled, threshold));
    }
  }, [knownFaces, threshold]);

  const handleRegister = async () => {
    if (!videoRef.current) return;

    const name = prompt("Enter name for this face:");
    if (!name) return;

    setEnrolling(true);
    let samples = [];
    let cancelled = false;

    const cancelOnUnmount = () => {
      cancelled = true;
      setEnrolling(false);
    };

    window.addEventListener("beforeunload", cancelOnUnmount);
    try {
      for (let p = 0; p < poses.length; p++) {
        setStep(p);
        for (let i = 0; i < samplesPerPose; i++) {
          setProgress(
            (p * samplesPerPose + i + 1) / (poses.length * samplesPerPose)
          );
          await new Promise((res) => setTimeout(res, 1000));
          if (cancelled || !videoRef.current) break;
          const detection = await faceapi
            .detectSingleFace(videoRef.current)
            .withFaceLandmarks()
            .withFaceDescriptor();
          if (detection) samples.push(detection.descriptor);
        }
      }
    } finally {
      window.removeEventListener("beforeunload", cancelOnUnmount);
      setEnrolling(false);
    }

    if (cancelled) return;
    setEnrolling(false);

    if (samples.length === 0) return alert("No valid samples captured!");

    const meanDescriptor = averageDescriptor(samples);
    setKnownFaces((prev) => [
      ...prev,
      { label: name, descriptors: [meanDescriptor] },
    ]);
    localStorage.setItem(
      "knownFace_" + name,
      JSON.stringify({ label: name, descriptor: Array.from(meanDescriptor) })
    );
    alert(`✅ Registered ${samples.length} samples for ${name}`);
  };

  useEffect(() => {
    if (!ready || !matcher) return;

    let cancelled = false;
    const interval = setInterval(async () => {
      if (cancelled) return;
      if (!videoRef.current || !canvasRef.current) return;

      try {
        const detections = await faceapi
          .detectAllFaces(videoRef.current)
          .withFaceLandmarks()
          .withFaceDescriptors();

        if (!detections || detections.length === 0) return;

        const dims = faceapi.matchDimensions(
          canvasRef.current,
          videoRef.current,
          true
        );
        const resized = faceapi.resizeResults(detections, dims);

        const ctx = canvasRef.current.getContext("2d");
        if (ctx)
          ctx.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );

        resized.forEach((det) => {
          const bestMatch = matcher.findBestMatch(det.descriptor);
          const box = det.detection.box;
          const label = `${bestMatch.label} (${bestMatch.distance.toFixed(2)})`;
          new faceapi.draw.DrawBox(box, { label }).draw(canvasRef.current);
        });
      } catch (err) {
        console.warn("Detection error:", err);
      }
    }, 200);

    return () => {
      cancelled = true; // 🚫 prevent async calls after unmount
      clearInterval(interval); // 🧹 stop loop
    };
  }, [ready, matcher]);

  return (
    <div className="relative inline-block">
      <div className="relative inline-block">
        <video ref={videoRef} autoPlay muted className="block w-full h-auto" />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <div className="mt-4">
        <button
          disabled={!ready || enrolling}
          onClick={handleRegister}
          className="px-6 py-3 rounded-lg bg-green-500 text-white font-semibold 
               hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed 
               transition-colors duration-200 shadow-md"
        >
          {enrolling ? "Enrolling..." : "Guided Enrollment"}
        </button>
      </div>
      {enrolling && (
        <div style={{ marginTop: "10px", color: "red" }}>
          <p>
            Please look:{" "}
            <b>
              {poses[step]} {(progress * 100).toFixed(0)}%
            </b>
          </p>
        </div>
      )}
    </div>
  );
}
