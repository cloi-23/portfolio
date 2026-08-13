import { useEffect, useState } from "react";
import { ArrowUpRight, Link as LinkIcon } from "lucide-react";

function useDesktopPreview() {
  const [isDesktopPreview, setIsDesktopPreview] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (!mediaQuery) {
      return undefined;
    }

    const updatePreviewMode = () => setIsDesktopPreview(mediaQuery.matches);

    updatePreviewMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreviewMode);

      return () => mediaQuery.removeEventListener("change", updatePreviewMode);
    }

    mediaQuery.addListener(updatePreviewMode);
    return () => mediaQuery.removeListener(updatePreviewMode);
  }, []);

  return isDesktopPreview;
}

export default function ProjectShowcaseCard({ project, index }) {
  const displayUrl = project.url.replace(/^https?:\/\//, "");
  const isEven = index % 2 === 0;
  const isDesktopPreview = useDesktopPreview();
  const imageUrl = project.image
    ? `${process.env.PUBLIC_URL}${project.image}`
    : null;

  return (
    <article className="content-visibility-auto group overflow-hidden rounded-[8px] border border-[#2b2d24] bg-[#171811] shadow-[0_18px_48px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#ddf160]/55 sm:rounded-[28px] sm:border-[#f6f3ec]/12 sm:shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div
          className={`relative overflow-hidden bg-[#22231a] p-3 ${
            isEven ? "" : "lg:order-2"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(221,241,96,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />

          <div className="relative overflow-hidden rounded-[6px] border border-[#2b2d24] bg-[#0d0f0b] shadow-[0_18px_42px_rgba(0,0,0,0.28)] sm:rounded-[20px] sm:border-white/12 sm:shadow-2xl">
            <div className="flex h-10 items-center gap-3 border-b border-[#2b2d24] bg-[#11130e]/95 px-3 sm:h-11 sm:border-white/10 sm:px-4">
              <div className="hidden gap-1.5 sm:flex" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-[4px] border border-[#33362a] bg-black/30 px-2.5 py-1 text-xs text-white/55 sm:rounded-full sm:border-white/10 sm:px-3">
                <LinkIcon size={13} aria-hidden="true" />
                <span className="truncate">{displayUrl}</span>
              </div>
              <span className="hidden rounded-full border border-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ddf160] sm:inline">
                Live
              </span>
            </div>

            <div className="relative aspect-[16/11] bg-[#0f0f0d] sm:aspect-[16/10]">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={`${project.title} website screenshot`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover object-top lg:hidden"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_24%_22%,rgba(221,241,96,0.18),transparent_32%),linear-gradient(135deg,#171811,#0e100c)] px-6 text-center lg:hidden">
                  <span className="max-w-72 text-2xl font-black leading-tight text-white">
                    {project.title}
                  </span>
                </div>
              )}
              {isDesktopPreview ? (
                <iframe
                  title={`${project.title} live preview`}
                  src={project.url}
                  loading={index === 0 ? "eager" : "lazy"}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  className="h-full w-full border-0 bg-white"
                />
              ) : null}
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

          <div className="absolute left-5 top-5 rounded-[4px] border border-[#33362a] bg-black/55 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur sm:left-6 sm:top-6 sm:rounded-full sm:border-white/15 sm:px-3 sm:tracking-[0.22em] sm:text-white/82">
            0{index + 1}
          </div>
        </div>

        <div className="flex min-h-72 flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-[4px] border border-[#ddf160]/18 bg-[#ddf160]/8 px-2.5 py-1 text-sm text-[#ddf160] sm:rounded-full sm:px-3">
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
              className="inline-flex items-center gap-2 rounded-[6px] bg-[#ddf160] px-4 py-2 text-sm font-bold text-[#11110f] transition hover:bg-[#f6f3ec] sm:rounded-full"
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
