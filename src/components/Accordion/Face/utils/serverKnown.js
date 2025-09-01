export default async function loadFacesFromServer() {
  const res = await fetch(
    `https://${process.env.REACT_APP_API_GATEWAY_ID}.execute-api.us-east-1.amazonaws.com/user`
  );
  const data = await res.json(); // Array of { name, descriptors }
  return data.map((f) => ({
    id: f.id,
    label: f.label, // or f.label if your Lambda returns label
    descriptors: f.descriptors.map((d) => new Float32Array(d)),
  }));
}
