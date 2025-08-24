import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project, darkMode }) {
  const [index, setIndex] = useState(0);
  const baseUrl = process.env.PUBLIC_URL;
  // cycle images every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.previews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.previews.length]);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
       rounded-2xl p-4 sm:p-6 flex flex-col cursor-pointer bg-opacity-80 overflow-hidden
        ${darkMode ? "shadow-md hover:shadow-lg hover:shadow-[#DDF160]" : ""}
      `}
      style={{ backgroundColor: darkMode ? "#1f1f1f" : "#ffffff" }}
    >
      {/* Animated image */}
      <div className="relative aspect-square rounded-xl mb-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index} // 👈 important for exit/enter
            src={`${baseUrl}${project.previews[index]}`}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
        </AnimatePresence>
      </div>

      {/* Text */}
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
      <p className="opacity-80 text-sm sm:text-base">{project.description}</p>
    </a>
  );
}
