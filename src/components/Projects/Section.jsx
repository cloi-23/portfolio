import projects from "../../data/projects.json";
import ProjectCard from "./Card";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24"
    >
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
            <span className="rounded-full border border-[#f6f3ec]/12 px-3 py-1">
              Web apps
            </span>
            <span className="rounded-full border border-[#f6f3ec]/12 px-3 py-1">
              Ecommerce
            </span>
            <span className="rounded-full border border-[#f6f3ec]/12 px-3 py-1">
              Platforms
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.url} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
