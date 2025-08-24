import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function ResponsiveExpandingBox({ darkMode, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-14 lg:right-36 z-50">
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
          initial={false}
          animate={
            open ? { scale: 1, opacity: 1 } : { scale: 0.07, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top right" }}
          className={`absolute -top-3 right-0 lg:-right-4 lg:w-[80vw] w-[90vw] h-[90vh] rounded-[60px] shadow-xl overflow-hidden
    ${darkMode ? "bg-[#FAF7F6] text-white" : "bg-[#161616] text-[#161616]"}`}
        >
          {/* Top spacer/header area (same bg as modal) */}
          <div
            className={`${darkMode ? "bg-[#FAF7F6]" : "bg-[#161616]"} h-20 w-full`}
          />

          {/* Scrollable content */}
          <div className="p-6 text-center w-full h-[calc(100%-5rem)] flex flex-col overflow-y-auto scrollbar-hide">
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
