// import { saveButton } from "./SaveButton";

export default function KnownFacesList({
  knownFaces,
  setKnownFaces,
  /*   saving,
  setSaving, */
}) {
  const handleDelete = (label) => {
    setKnownFaces((prev) => {
      const index = prev.findIndex((f) => f.label === label);
      if (index === -1) return prev;

      const copy = [...prev];
      copy.splice(index, 1);
      localStorage.removeItem("knownFace_" + label);
      return copy;
    });
  };

  return (
    <div className="w-full p-4">
      {knownFaces.length === 0 ? (
        <p className="text-gray-500 italic px-5 ">No faces registered yet.</p>
      ) : (
        <div className="space-y-3 max-h-82 overflow-y-auto pr-2">
          {knownFaces.map((face, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-sm"
            >
              {/* Face label on the left */}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {face.label}
              </span>

              {/* Buttons on the right */}
              <div className="flex items-center gap-3">
                {/* {!face.id && (
                  <button
                    onClick={() => saveButton(face, setSaving)}
                    disabled={saving}
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white 
                               hover:bg-blue-600 disabled:opacity-50 
                               disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>
                )} */}
                <button
                  onClick={() => handleDelete(face.label)}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white 
                             hover:bg-red-600 transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
