import BrokenGlassField from "./BrokenGlassField";
import projects from "../data/projects.json";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

const projectGlassPieces = [
  {
    className: "left-[3%] top-20 h-24 w-16 rotate-[18deg] animation-delay-700",
    shape: "glass-shard--blade",
  },
  {
    className:
      "left-[30%] top-10 h-12 w-32 rotate-[-13deg] animation-delay-2100",
    shape: "glass-shard--splinter",
  },
  {
    className: "right-[8%] top-36 h-24 w-28 rotate-[22deg] animation-delay-0",
    shape: "glass-shard--kite",
  },
  {
    className:
      "left-[8%] top-[28rem] h-14 w-36 rotate-[-16deg] animation-delay-3500",
    shape: "glass-shard--wide",
  },
  {
    className:
      "right-[18%] top-[34rem] h-16 w-16 rotate-[48deg] animation-delay-1400",
    shape: "glass-shard--chip",
  },
  {
    className:
      "left-[46%] top-[49rem] h-28 w-14 rotate-[12deg] animation-delay-2800",
    shape: "glass-shard--blade",
  },
  {
    className:
      "right-[4%] top-[58rem] h-14 w-40 rotate-[-18deg] animation-delay-700",
    shape: "glass-shard--splinter",
  },
  {
    className:
      "left-[14%] bottom-36 h-16 w-20 rotate-[27deg] animation-delay-2100",
    shape: "glass-shard--kite",
  },
  {
    className:
      "right-[28%] bottom-16 h-12 w-32 rotate-[-28deg] animation-delay-0",
    shape: "glass-shard--wide",
  },
];

const projectTypes = ["Web apps", "Ecommerce", "Platforms"];

export default function ProjectShowcaseSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_10%,rgba(221,241,96,0.1),transparent_22%),radial-gradient(circle_at_13%_52%,rgba(158,226,255,0.08),transparent_24%),linear-gradient(180deg,transparent,rgba(246,243,236,0.035)_45%,transparent)]" />
        <BrokenGlassField pieces={projectGlassPieces} className="opacity-90" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 border-t border-[#f6f3ec]/12 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ddf160]/90">
              Selected builds
            </p>
            <h2 className="mt-3 text-5xl font-black leading-[0.9] text-white sm:text-7xl">
              Work worth opening.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[#f6f3ec]/68">
              Live products, client platforms, and storefronts embedded directly
              from production, so the previews stay current as the sites evolve.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm text-[#f6f3ec]/58">
              {projectTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-[#f6f3ec]/12 px-3 py-1"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.url}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
