import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Download, Mail } from "lucide-react";
import ProjectShowcaseSection from "../components/ProjectShowcaseSection";
import SkillsEvidenceSection from "../components/SkillsEvidenceSection";

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 560);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#0e100c] text-[#f6f3ec]">
      <section
        id="top"
        className="relative min-h-[92vh] overflow-hidden bg-[#0e100c]"
      >
        <img
          src={`${process.env.PUBLIC_URL}/hero-background.png`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,16,12,0.96)_0%,rgba(14,16,12,0.82)_38%,rgba(14,16,12,0.42)_72%,rgba(14,16,12,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0e100c] to-transparent" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.28em]"
          >
            Cloi
          </a>
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-4 text-sm"
          >
            <a
              className="text-[#f6f3ec]/70 transition hover:text-[#ddf160]"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-[#f6f3ec]/70 transition hover:text-[#ddf160]"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="hidden text-[#f6f3ec]/70 transition hover:text-[#ddf160] sm:inline"
              href={resumeUrl}
              download="Cloi-Resume.pdf"
            >
              Resume
            </a>
            <a
              className="rounded-full border border-[#f6f3ec]/20 bg-[#0e100c]/35 px-4 py-2 backdrop-blur transition hover:border-[#ddf160] hover:text-[#ddf160]"
              href="mailto:cruzmejari@gmail.com"
            >
              Contact
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-5.5rem)] max-w-7xl items-center px-5 pb-20 pt-12 sm:px-8 lg:pb-28">
          <div className="max-w-5xl">
            <p className="mb-5 inline-flex rounded-full border border-[#ddf160]/35 bg-[#ddf160]/10 px-4 py-2 text-sm font-medium text-[#ddf160] shadow-[0_0_32px_rgba(221,241,96,0.12)] backdrop-blur">
              Web apps, systems, and product interfaces
            </p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Full-stack software engineer building clean web applications.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#f6f3ec]/78 sm:text-xl">
              I work with Vue, Node.js, and databases to create practical
              products that are easy to use and ready for real users.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 rounded-full bg-[#ddf160] px-5 py-3 text-sm font-bold text-[#11110f] transition hover:-translate-y-0.5"
              >
                See skills
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                href="mailto:cruzmejari@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-[#f6f3ec]/20 px-5 py-3 text-sm font-bold text-[#f6f3ec] transition hover:border-[#ddf160] hover:text-[#ddf160]"
              >
                <Mail size={18} aria-hidden="true" />
                Work together
              </a>
              <a
                href={resumeUrl}
                download="Cloi-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-[#f6f3ec]/20 px-5 py-3 text-sm font-bold text-[#f6f3ec] transition hover:border-[#ddf160] hover:text-[#ddf160]"
              >
                <Download size={18} aria-hidden="true" />
                Download resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <SkillsEvidenceSection />
      <ProjectShowcaseSection />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="border-t border-[#f6f3ec]/12 pt-10">
          <p className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            Have a project that needs a clean build and a little taste?
          </p>
          <a
            href="mailto:cruzmejari@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f6f3ec] px-5 py-3 text-sm font-bold text-[#11110f] transition hover:bg-[#ddf160]"
          >
            Email me
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <button
        type="button"
        aria-label="Scroll back to top"
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#f6f3ec]/15 bg-[#0e100c]/85 text-[#f6f3ec] shadow-[0_18px_45px_rgba(0,0,0,0.32)] backdrop-blur transition duration-300 hover:border-[#ddf160] hover:text-[#ddf160] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ddf160] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e100c] ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </main>
  );
}
