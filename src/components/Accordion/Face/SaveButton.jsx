export async function saveButton(face, setSaving) {
  setSaving(true);
  try {
    const { label, descriptors } = face;

    if (!Array.isArray(descriptors) || descriptors.length === 0) {
      throw new Error("Descriptors must be a non-empty array");
    }

    descriptors.forEach((d, i) => {
      if (!Array.isArray(d) && !(d instanceof Float32Array)) {
        throw new Error(
          `Descriptor at index ${i} must be an array or Float32Array`
        );
      }
      const arr = Array.isArray(d) ? d : Array.from(d);
      if (arr.length !== 128)
        throw new Error(`Descriptor at index ${i} must have length 128`);
      if (!arr.every((n) => typeof n === "number"))
        throw new Error(`Descriptor at index ${i} must contain only numbers`);
    });

    const payload = {
      label,
      descriptors: descriptors.map((d) => Array.from(d)),
    };

    const res = await fetch(
      `https://${process.env.REACT_APP_API_GATEWAY_ID}.execute-api.us-east-1.amazonaws.com/user`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) throw new Error("Failed to save");

    alert(`✅ Saved ${label} to DynamoDB`);
  } catch (error) {
    console.error(error);
    alert(`❌ Error: ${error}`);
  } finally {
    setSaving(false);
  }
}
