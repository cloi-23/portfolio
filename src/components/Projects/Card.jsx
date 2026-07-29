import { ArrowUpRight, Link as LinkIcon } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const displayUrl = project.url.replace(/^https?:\/\//, "");
  const isEven = index % 2 === 0;

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#f6f3ec]/12 bg-[#171811] shadow-[0_24px_90px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#ddf160]/55">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div
          className={`relative overflow-hidden bg-[#22231a] p-3 ${
            isEven ? "" : "lg:order-2"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(221,241,96,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />

          <div className="relative overflow-hidden rounded-[20px] border border-white/12 bg-[#0d0f0b] shadow-2xl">
            <div className="flex h-11 items-center gap-3 border-b border-white/10 bg-[#11130e]/95 px-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/55">
                <LinkIcon size={13} aria-hidden="true" />
                <span className="truncate">{displayUrl}</span>
              </div>
              <span className="hidden rounded-full border border-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ddf160] sm:inline">
                Live
              </span>
            </div>

            <div className="relative aspect-[16/11] bg-[#0f0f0d] sm:aspect-[16/10]">
              <iframe
                title={`${project.title} live preview`}
                src={project.url}
                loading={index === 0 ? "eager" : "lazy"}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                className="h-full w-full border-0 bg-white"
              />
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live site`}
                className="absolute inset-0"
              >
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-[#ddf160] px-4 py-2 text-sm font-bold text-[#11110f] opacity-0 shadow-xl transition group-hover:opacity-100">
                  Open live
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>

          <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/82 backdrop-blur">
            0{index + 1}
          </div>
        </div>

        <div className="flex min-h-72 flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ddf160]/20 bg-[#ddf160]/10 px-3 py-1 text-sm text-[#ddf160]">
              <LinkIcon size={15} aria-hidden="true" />
              <span className="max-w-64 truncate">{displayUrl}</span>
            </div>

            <h3 className="max-w-xl text-3xl font-black leading-[0.96] text-white sm:text-5xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#f6f3ec]/66 sm:text-lg">
              {project.description}
            </p>
          </div>

          <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#f6f3ec]/10 pt-5">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6f3ec]/42">
              Live project
            </span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#f6f3ec] px-4 py-2 text-sm font-bold text-[#11110f] transition hover:bg-[#ddf160]"
            >
              Open
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
