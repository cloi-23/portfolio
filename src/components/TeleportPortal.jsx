import { createPortal } from "react-dom";

export default function TeleportPortal({ open, setClose, darkMode, children }) {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className={`p-6 rounded-xl shadow-xl relative transition-colors duration-200
          ${darkMode ? "bg-[#121212] text-white" : "bg-white text-black"}
        `}
      >
        <button
          onClick={setClose}
          className={`absolute top-2 right-2 hover:text-red-500 ${
            darkMode
              ? "text-gray-400 hover:text-gray-200"
              : "text-gray-500 hover:text-black"
          }`}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
