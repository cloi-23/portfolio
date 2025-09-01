// src/utils/faceApi.ts
import * as faceapi from "face-api.js";

let modelsLoaded = false; // 🔑 cache flag

export async function loadModels() {
  if (modelsLoaded) return; // ✅ skip reloading if already done

  const MODEL_URL = `${process.env.PUBLIC_URL}/models`;

  await Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL), // face detection
    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL), // landmarks
    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL), // embeddings
  ]);

  modelsLoaded = true; // ✅ mark as cached
}

export async function getFaceEmbedding(image) {
  const detection = await faceapi
    .detectSingleFace(image)
    .withFaceLandmarks()
    .withFaceDescriptor();

  if (!detection) return null;
  return detection.descriptor; // Float32Array[128]
}

function euclideanDistance(a, b) {
  return Math.sqrt(a.reduce((sum, val, i) => sum + (val - b[i]) ** 2, 0));
}

export function matchFace(descriptor, labeledDescriptors, threshold = 0.6) {
  let bestMatch = { label: "unknown", distance: Infinity };

  for (const ld of labeledDescriptors) {
    const dist = euclideanDistance(descriptor, ld.descriptor);
    if (dist < bestMatch.distance) {
      bestMatch = { label: ld.label, distance: dist };
    }
  }

  return bestMatch.distance <= threshold ? bestMatch.label : "unknown";
}
