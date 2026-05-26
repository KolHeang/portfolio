"use client";

import React from "react";
import { useLanguage, Translations } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

// ─── Project data definition ─────────────────────────────────────────────────
interface ProjectItem {
  tagKey: keyof Translations;
  titleKey: keyof Translations;
  copyKey: keyof Translations;
  meta: string;
  technologies: string[];
  gradient: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    tagKey: "proj1_tag",
    titleKey: "proj1_title",
    copyKey: "proj1_copy",
    meta: "Next.js • Node.js",
    technologies: ["TypeScript", "TypeORM", "PostgreSQL"],
    gradient: "from-teal-accent/10 to-emerald-accent/5",
  },
  {
    tagKey: "proj2_tag",
    titleKey: "proj2_title",
    copyKey: "proj2_copy",
    meta: "NestJS • Next.js",
    technologies: ["NestJS", "Redux", "Tailwind"],
    gradient: "from-blue-500/10 to-cyan-400/5",
  },
  {
    tagKey: "proj3_tag",
    titleKey: "proj3_title",
    copyKey: "proj3_copy",
    meta: "Laravel • PHP",
    technologies: ["Laravel", "MySQL", "AlpineJS"],
    gradient: "from-rose-500/10 to-orange-400/5",
  },
];

// Duplicate for seamless loop
const TRACK = [...PROJECTS_DATA, ...PROJECTS_DATA];

// ─── Single project card ─────────────────────────────────────────────────────
const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({
  project,
  index,
}) => {
  const { t } = useLanguage();

  return (
    <article
      className="relative flex flex-col w-[340px] md:w-[400px] flex-shrink-0 mx-4 glass-panel rounded-3xl p-8 overflow-hidden border border-[var(--border-color)] hover:border-teal-accent/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-accent/10 transition-all duration-400 group cursor-pointer"
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`}
      />

      {/* Top meta row */}
      <div className="relative flex justify-between items-center mb-6 text-[10px] md:text-xs font-extrabold uppercase tracking-wider text-teal-accent">
        <span>{t(project.tagKey)}</span>
        <span className="text-[var(--text-muted)] group-hover:text-teal-accent/70 transition-colors duration-300">
          {project.meta}
        </span>
      </div>

      {/* Number watermark */}
      <span className="absolute top-6 right-8 font-display text-7xl font-black text-white/3 group-hover:text-white/5 transition-colors duration-300 leading-none select-none pointer-events-none">
        {String(index % 3 + 1).padStart(2, "0")}
      </span>

      {/* Title */}
      <h3 className="relative font-display text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-teal-accent transition-colors duration-300 leading-snug">
        {t(project.titleKey)}
      </h3>

      {/* Description */}
      <p className="relative text-[var(--text-secondary)] text-sm md:text-base font-medium leading-relaxed mb-8 flex-grow">
        {t(project.copyKey)}
      </p>

      {/* Tech tags */}
      <ul className="relative flex flex-wrap gap-2 m-0 p-0 list-none">
        {project.technologies.map((tech, i) => (
          <li
            key={i}
            className="px-3.5 py-1.5 bg-[var(--bg-surface-2)]/50 border border-[var(--border-color)] group-hover:border-teal-accent/15 rounded-full text-[10px] md:text-xs font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
};

// ─── Main section ────────────────────────────────────────────────────────────
export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="work"
      className="py-20 md:py-32 relative scroll-mt-20 overflow-hidden"
      aria-labelledby="work-title"
    >
      {/* Section heading */}
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-16 z-10">
        <Reveal className="mb-12 md:mb-16">
          <p className="text-teal-accent font-bold text-xs uppercase tracking-[0.15em] mb-3">
            {t("work_kicker")}
          </p>
          <h2
            id="work-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] leading-tight"
          >
            {t("work_title")}
          </h2>
        </Reveal>
      </div>

      {/* ── Marquee strip (full-width) ── */}
      <Reveal className="w-full">
        <div className="relative w-full group">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 marquee-fade-left z-10" />

          {/* Scrolling track */}
          <div
            className="flex animate-marquee group-hover:[animation-play-state:paused]"
            style={{ width: "max-content" }}
          >
            {TRACK.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 marquee-fade-right z-10" />
        </div>
      </Reveal>

      {/* Hint text */}
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-16 z-10 mt-8">
        <p className="text-[var(--text-muted)] text-xs font-semibold uppercase tracking-wider text-center">
          ✦ Hover to pause ✦
        </p>
      </div>
    </section>
  );
};
