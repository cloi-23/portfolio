import { useEffect, useRef, useState } from "react";

export default function FadeLetters({ darkMode }) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const lines = [
    "Elevate your digital presence with Cloi - dynamic and",
    "stylish template designed for creative agencies and",
    "personal brands.",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let p = (windowHeight - rect.top) / (windowHeight + rect.height);
        p = Math.min(Math.max(p, 0), 1);

        setProgress(p);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        lg:wider-text fade-section
        max-w-4xl mx-auto 
        text-center pb-20
        leading-relaxed
        text-sm
        md:text-3xl
        lg:text-3xl"
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="mb-2">
          {line.split("").map((char, i) => {
            const totalChars = lines.join("").length;
            const globalIndex = lines.slice(0, lineIndex).join("").length + i;

            const startOffset = 0.2;
            const effectiveProgress =
              Math.max(0, progress - startOffset) / (1 - startOffset);

            const revealPoint = globalIndex / totalChars;
            const isBright = effectiveProgress * 2 >= revealPoint;

            // Colors depend on darkMode
            const dimColor = darkMode ? "text-white/20" : "text-black/20";
            const brightColor = darkMode ? "text-white" : "text-black";

            return (
              <span
                key={globalIndex}
                className={`inline-block transition-colors duration-100 ease-linear ${
                  isBright ? brightColor : dimColor
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </div>
      ))}
    </section>
  );
}
