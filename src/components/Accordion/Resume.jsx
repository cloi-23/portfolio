import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import FancyText from "../FancyText";

export default function AccordionResume({ darkMode }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const resumeLink = "https://cloi23.github.io/resume";
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
              {/* Resume Links */}
              <ul className="flex flex-col gap-2 list-disc list-inside text-lg">
                <ul>
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Resume Online
                  </a>
                </ul>
                <ul>
                  <a
                    href={`${process.env.PUBLIC_URL}/resume.pdf`}
                    download
                    className="text-green-500 hover:underline flex items-center gap-1"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </ul>
                <ul>
                  <span>
                    Skills, Experience, Education, and Projects summarized here.
                  </span>
                </ul>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
