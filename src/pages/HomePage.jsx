import { ArrowUpRight, Mail } from "lucide-react";
import ProjectsSection from "../components/Projects/Section";

export default function HomePage() {
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
              href="#projects"
            >
              Projects
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
              Project work that looks clean and ships for real.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#f6f3ec]/78 sm:text-xl">
              A focused showcase of live builds, client platforms, and interface
              work. No filler, just screenshots and links.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#ddf160] px-5 py-3 text-sm font-bold text-[#11110f] transition hover:-translate-y-0.5"
              >
                View projects
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                href="mailto:cruzmejari@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-[#f6f3ec]/20 px-5 py-3 text-sm font-bold text-[#f6f3ec] transition hover:border-[#ddf160] hover:text-[#ddf160]"
              >
                <Mail size={18} aria-hidden="true" />
                Work together
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />

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
    </main>
  );
}
