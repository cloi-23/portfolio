import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function ResponsiveExpandingBox({ darkMode, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 lg:right-36 z-50">
      {/* Circle Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full flex items-center justify-center z-[60] hover:scale-105 relative"
      >
        <div className="relative w-10 h-10">
          <Menu
            className={`absolute inset-0 w-10 h-10 transition-all duration-300 ${
              open
                ? "opacity-0 scale-75 rotate-45"
                : "opacity-100 scale-100 rotate-0"
            }`}
          />
          <X
            className={`absolute inset-0 w-10 h-10 transition-all duration-300 ${
              open
                ? `opacity-100 scale-100 rotate-0 ${darkMode ? "text-[#161616]" : "text-[#FAF7F6]"}`
                : "opacity-0 scale-75 -rotate-45"
            }`}
          />
        </div>
      </button>

      {/* Expanding Box */}
      <AnimatePresence>
        <motion.div
          key="box"
          initial={{ scale: 0.2, opacity: 0.8 }}
          animate={
            open ? { scale: 1, opacity: 1 } : { scale: 0.07, opacity: 0 }
          } // 👈 shrinks back, but never disappears
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top right" }}
          className={`absolute top-0 right-0 w-[80vw] h-[90vh] rounded-xl shadow-xl overflow-hidden
            ${darkMode ? "bg-[#FAF7F6] text-white" : "bg-[#161616] text-[#161616]"}`}
        >
          <div className="p-6 text-center w-full h-full flex flex-col items-center justify-center">
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
