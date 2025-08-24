import projects from "../../data/projects.json";
import ProjectCard from "./Card";

export default function Portfolio({ darkMode }) {
  // take first 2 for big layout
  const featured = projects.slice(0, 2);
  // next up to 3 (max 5 total)
  const others = projects.slice(2, 5);

  return (
    <section className="pt-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
      {/* First 2 latest projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {featured.map((project, idx) => (
          <ProjectCard key={idx} project={project} darkMode={darkMode} />
        ))}
      </div>

      {/* Next 3 smaller projects */}
      {others.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {others.map((project, idx) => (
            <ProjectCard key={idx} project={project} darkMode={darkMode} />
          ))}
        </div>
      )}
    </section>
  );
}
