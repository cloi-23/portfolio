export default function averageDescriptor(samples) {
  if (samples.length === 0) return new Float32Array(0);

  const length = samples[0].length;
  const avg = new Float32Array(length);

  for (const desc of samples) {
    for (let i = 0; i < length; i++) {
      avg[i] += desc[i];
    }
  }

  for (let i = 0; i < length; i++) {
    avg[i] /= samples.length;
  }

  return avg; // ✅ returns Float32Array, matches KnownFace
}
