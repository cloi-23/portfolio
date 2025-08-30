"use client";
import { useEffect, useRef } from "react";

const items = [
  { text: "Designer" },
  { text: "Web Application Developer" },
  { text: "Freelancer" },
  { text: "Personal portfolio" },
  { text: "Creative developer" },
  { text: "Portfolio" },
];

export default function Marquee({ darkMode }) {
  const marqueeRef = useRef(null);
  const offsetRef = useRef(0);
  const baseSpeed = 0.8;
  const boostRef = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      boostRef.current += delta * 0.3; // add speed based on scroll
      lastScrollY.current = currentY;
    };

    const animate = () => {
      offsetRef.current += baseSpeed + boostRef.current;
      boostRef.current *= 0.9; // decay so it slows down

      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
      }

      // reset for seamless loop
      const itemWidth = 300; // adjust for your design
      if (offsetRef.current > itemWidth * items.length) {
        offsetRef.current = 0;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    animate();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={marqueeRef}
        className={`flex whitespace-nowrap text-6xl font-bold transition-colors duration-300 ${
          darkMode ? "text-white/20" : "text-black/20"
        }`}
      >
        {[...items, ...items].map((item, index) => (
          <span key={index} className="px-8 shrink-0">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                height="70px"
                className="mr-2"
                fill={darkMode ? "white" : "black"}
                fillOpacity="0.2"
              >
                <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"></path>
              </svg>
              <span className="shrink-0">{item.text}</span>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}
