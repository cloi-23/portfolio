import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import FancyText from "../FancyText";

export default function AccordionResume({ darkMode }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Accordion header */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between p-6 transition
        ${darkMode ? "text-black" : "text-white hover:"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="font-semibold text-5xl">
          {" "}
          <FancyText text="Resume" size={200} isHovered={hovered} />
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 20 20"
            height="25px"
            fill="currentColor"
            className={`
                ${
                  darkMode
                    ? hovered
                      ? "text-purple-400" // dark + hovered
                      : "text-black" // dark + idle
                    : hovered
                      ? "text-blue-400" // light + hovered
                      : "text-[#DDF160]"
                }     
      `}
          >
            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"></path>
          </svg>
        </motion.div>
      </button>

      {/* Accordion content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`overflow-hidden w-full mt-2 rounded-xl shadow 
            ${darkMode ? "bg-[#121212] text-white" : "bg-white text-black"}`}
          >
            <div className="p-4 flex flex-col gap-4">
              {/* Resume preview */}
              <div className="w-full h-[60vh] border rounded-lg overflow-hidden">
                <iframe
                  src="https://cloi23.github.io/resume"
                  className="w-full h-full"
                  title="Resume Preview"
                />
              </div>

              {/* Open in new tab */}
              <button
                onClick={() =>
                  window.open("https://cloi23.github.io/resume", "_blank")
                }
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition
                ${darkMode ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}
              >
                <ExternalLink className="w-4 h-4" />
                Open Resume in New Tab
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
