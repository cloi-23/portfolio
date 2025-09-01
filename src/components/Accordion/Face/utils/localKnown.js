export default function loadKnownFaces() {
  const faces = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("knownFace_")) {
      const raw = localStorage.getItem(key);
      if (raw) {
        const data = JSON.parse(raw);
        faces.push({
          label: data.label,
          descriptors: [new Float32Array(data.descriptor)], // back to Float32Array
        });
      }
    }
  }

  return faces;
}
