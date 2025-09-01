import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sun, MoonStar } from "lucide-react";
import Marquee from "./Marquee";
import OverlayMenu from "./OverlayMenu";
import FadeLetters from "./FadeLetters";
import MarqueeScrollEvent from "./MarqueeScrollEvent";
import Coin from "./Coin";
import PurchaseButton from "./PurchaseButton";
import AccordionResume from "./Accordion/Resume";
import ProjectsSection from "./Projects/Section";
import AccordionFaceRecognition from "./Accordion/Face/Recognition";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    gsap.utils.toArray(".fade-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      className={
        darkMode
          ? "bg-[#161616] text-white min-h-screen"
          : "bg-[#FAF7F6] text-[#161616] min-h-screen"
      }
    >
      <div className="absolute   w-full flex items-start justify-between px-4 sm:px-8 lg:px-16 pt-14">
        <div className="flex-shrink-0">
          <Coin />
        </div>

        <div className="flex flex-col items-end gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-14  right-44 lg:right-[26em] z-50 w-16 h-16 right-32 hover:scale-105 transition"
          >
            {darkMode ? <Sun size={40} /> : <MoonStar size={40} />}
          </button>

          <PurchaseButton darkMode={darkMode} />

          {/* Overlay menu */}
          <OverlayMenu darkMode={darkMode}>
            <AccordionResume darkMode={darkMode} />
            <AccordionFaceRecognition darkMode={darkMode} />
          </OverlayMenu>
        </div>
      </div>

      {/* Hero Section */}
      <section className="font-sans font-semibold text-6xl md:text-6xl lg:text-8xl h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Static left */}
            <div className="relative flex-shrink-0">
              <img
                src={process.env.PUBLIC_URL + "/logo512.png"}
                alt="Logo"
                className="z-0 logo-heart absolute md:object-contain md:-top-16 lg:-top-8 lg:-left-16 md:-left-10 hidden md:block lg:block"
              />
              <span className="relative z-10 pl-6 lg:pl-0">Make</span>
            </div>

            {/* Scrolling wrapper */}
            <div className="relative flex-shrink w-full md:max-w-md lg:max-w-2xl text-[#161616]">
              {/* scrolling wrapper */}
              <div className="overflow-hidden border round-custom">
                <div className="flex whitespace-nowrap">
                  <Marquee />
                </div>
              </div>

              {/* floating image */}
              <img
                src={process.env.PUBLIC_URL + "/logo192.png"}
                alt="Logo"
                className="logo-helmet bounce absolute lg:-right-16 md:-right-10 -top-20 hidden md:block lg:block"
              />
            </div>
          </div>

          {/* Static Right */}
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 20 20"
              className="h-12 w-12 md:h-16 md:w-16 mt-4"
              fill={darkMode ? "white" : "black"}
            >
              <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"></path>
            </svg>
            <span className=" text-6xl shrink-0 lg:text-8xl font-semibold">
              stand out
            </span>
          </div>
        </div>
      </section>

      <FadeLetters darkMode={darkMode} />

      {/* More Projects */}
      <ProjectsSection darkMode={darkMode} />

      <MarqueeScrollEvent darkMode={darkMode} />

      {/* Contact Section */}
      <section
        className="fade-section py-10 text-center px-4"
        style={{ backgroundColor: darkMode ? "#1f1f1f" : "#ffffff" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Let’s Work Together
        </h2>
        <p className="mb-8 text-base sm:text-lg">
          Interested in collaborating or have a project in mind?
        </p>
        <a
          href="mailto:cruzmejari@gmail.com"
          className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition"
          style={{
            backgroundColor: darkMode ? "#FAF7F6" : "#161616",
            color: darkMode ? "#161616" : "#FAF7F6",
          }}
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}
