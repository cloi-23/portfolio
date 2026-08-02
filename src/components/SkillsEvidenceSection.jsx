import {
  Braces,
  CloudCog,
  Layers3,
  ServerCog,
  Smartphone,
  Sparkles,
} from "lucide-react";
import BrokenGlassField from "./BrokenGlassField";
import skillProof from "../data/skillProof.json";

const icons = [Layers3, Sparkles, ServerCog, Smartphone, CloudCog];

const stackLanes = [
  {
    label: "Interface",
    detail: "Nuxt apps, FormKit flows, dashboards, catalog screens",
  },
  {
    label: "API",
    detail: "NestJS resources, auth, validation, files, mail",
  },
  {
    label: "Mobile",
    detail: "Capacitor features, camera, push, QR, native checks",
  },
  {
    label: "Release",
    detail: "Jenkins pipelines, Docker images, env secrets, deploys",
  },
];

export default function SkillsEvidenceSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(221,241,96,0.16),transparent_22%),radial-gradient(circle_at_78%_16%,rgba(246,243,236,0.12),transparent_22%),radial-gradient(circle_at_10%_72%,rgba(221,241,96,0.08),transparent_24%),linear-gradient(180deg,rgba(221,241,96,0.06),transparent_38%,rgba(246,243,236,0.035)_72%,transparent_100%)]" />
        <div className="absolute left-1/2 top-10 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-[#ddf160]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-[34rem] rounded-full bg-white/[0.035] blur-3xl" />
        <BrokenGlassField />
      </div>
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-[#ddf160]/45 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ddf160]/90">
              Skills in production
            </p>
            <h2 className="mt-3 max-w-3xl text-5xl font-black leading-[0.88] text-white sm:text-7xl">
              Systems skill, shown through shipped work.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-[#f6f3ec]/68 lg:justify-self-end">
            A compact view of the stack I use across live products: frontend,
            backend, mobile, and deployment work tied to real client platforms.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-6">
          {skillProof.map((skill, index) => {
            const Icon = icons[index] || Braces;
            const featured = index === 0 || index === 2;

            return (
              <article
                key={skill.title}
                className={`group relative overflow-hidden rounded-[8px] border border-[#f6f3ec]/12 bg-[#171811] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#ddf160]/55 sm:p-6 ${
                  featured ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ddf160] via-white/60 to-transparent opacity-70" />
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 bg-[#ddf160]/10 blur-3xl transition group-hover:bg-[#ddf160]/20" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-[#ddf160]/30 bg-[#ddf160]/12 text-[#ddf160]">
                        <Icon size={21} aria-hidden="true" />
                      </span>
                      <h3 className="text-2xl font-black leading-tight text-white">
                        {skill.title}
                      </h3>
                    </div>
                    <span className="text-sm font-black text-[#f6f3ec]/26">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-base leading-7 text-[#f6f3ec]/68">
                    {skill.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[#f6f3ec]/12 bg-[#0e100c]/60 px-3 py-1 text-sm text-[#f6f3ec]/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#ddf160]">
                      Where I used it
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {skill.usedIn.map((project) => (
                        <li key={project}>
                          <span className="inline-flex rounded-full bg-[#f6f3ec] px-3 py-1 text-sm font-bold text-[#11110f]">
                            {project}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 overflow-hidden rounded-[8px] border border-[#f6f3ec]/12 bg-[#11130e] text-[#f6f3ec] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#f6f3ec]/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ddf160]">
                End-to-end range
              </p>
              <p className="mt-3 max-w-2xl text-3xl font-black leading-[0.95] sm:text-4xl">
                I can move from product screen to database to production deploy.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#f6f3ec]/62">
                That range shows up across storefronts, admin systems, mobile
                workflows, and the release pipelines behind them.
              </p>
            </div>

            <div className="grid sm:grid-cols-2">
              {stackLanes.map((lane, index) => (
                <div
                  key={lane.label}
                  className="border-t border-[#f6f3ec]/10 p-5 first:border-t-0 sm:border-l sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(odd)]:border-l-0 lg:p-6"
                >
                  <span className="text-xs font-black text-[#ddf160]/80">
                    0{index + 1}
                  </span>
                  <p className="mt-4 text-2xl font-black leading-tight text-white">
                    {lane.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#f6f3ec]/58">
                    {lane.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
