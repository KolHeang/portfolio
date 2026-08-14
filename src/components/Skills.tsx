"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

// ─── Static skill tags shown in the two marquee rows ───────────────────────
const ROW_1 = [
  { label: "Node.js", icon: "⬡" },
  { label: "NestJS", icon: "🏗" },
  { label: "Laravel", icon: "🔴" },
  { label: "TypeScript", icon: "🔷" },
  { label: "PostgreSQL", icon: "🐘" },
  { label: "Drizzle ORM", icon: "💧" },
  { label: "TypeORM", icon: "🗄" },
  { label: "Docker", icon: "🐳" },
  { label: "REST API", icon: "🔗" },
];

const ROW_2 = [
  { label: "Next.js", icon: "▲" },
  { label: "Prisma", icon: "◬" },
  { label: "MySQL", icon: "🐬" },
  { label: "React", icon: "⚛" },
  { label: "Nginx", icon: "🌐" },
  { label: "Git", icon: "📦" },
  { label: "Redis", icon: "🔥" },
  { label: "Linux", icon: "🐧" },
  { label: "Microservices", icon: "🧩" },
];

// Duplicate each row for seamless looping
const track1 = [...ROW_1, ...ROW_1];
const track2 = [...ROW_2, ...ROW_2];

// ─── Individual skill pill ──────────────────────────────────────────────────
const SkillPill: React.FC<{ label: string; icon: string }> = ({ label, icon }) => (
  <span className="inline-flex items-center gap-2 px-5 py-2.5 mx-3 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] text-sm font-semibold whitespace-nowrap select-none group-hover:[animation-play-state:paused] shadow-sm hover:border-teal-accent/40 hover:text-teal-accent transition-colors duration-300" style={{ backgroundColor: 'var(--bg-surface)' }}>
    <span className="text-base leading-none">{icon}</span>
    {label}
  </span>
);

// ─── A single auto-scrolling track ─────────────────────────────────────────
const MarqueeRow: React.FC<{
  items: typeof track1;
  animClass: string;
  fade?: "left" | "right";
}> = ({ items, animClass }) => (
  <div className="relative overflow-hidden group py-1">
    {/* Left fade */}
    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 marquee-fade-left z-10" />
    {/* Scrolling track */}
    <div className={`flex ${animClass}`} style={{ width: "max-content" }}>
      {items.map((item, i) => (
        <SkillPill key={i} label={item.label} icon={item.icon} />
      ))}
    </div>
    {/* Right fade */}
    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 marquee-fade-right z-10" />
  </div>
);

// ─── Capability cards (compact) ─────────────────────────────────────────────
interface CapItem {
  num: string;
  titleKey: "skill1_title" | "skill2_title" | "skill3_title" | "skill4_title";
  copyKey: "skill1_copy" | "skill2_copy" | "skill3_copy" | "skill4_copy";
}

const CAPABILITIES: CapItem[] = [
  { num: "01", titleKey: "skill1_title", copyKey: "skill1_copy" },
  { num: "02", titleKey: "skill2_title", copyKey: "skill2_copy" },
  { num: "03", titleKey: "skill3_title", copyKey: "skill3_copy" },
  { num: "04", titleKey: "skill4_title", copyKey: "skill4_copy" },
];

// ─── Component ──────────────────────────────────────────────────────────────
export const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative border-y border-[var(--border-color)] scroll-mt-20 overflow-hidden"
      aria-labelledby="skills-title"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-16 z-10">
        {/* Section heading */}
        <Reveal className="mb-12 md:mb-14">
          <p className="text-teal-accent font-bold text-xs uppercase tracking-[0.15em] mb-3">
            {t("skills_kicker")}
          </p>
          <h2
            id="skills-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] leading-tight"
          >
            {t("skills_title")}
          </h2>
        </Reveal>
      </div>

      {/* ── Marquee rows (full-width, edge-to-edge) ── */}
      <Reveal className="space-y-4 mb-14 md:mb-16 w-full">
        {/* Row 1 — left-to-right */}
        <MarqueeRow items={track1} animClass="animate-marquee" />
        {/* Row 2 — right-to-left */}
        <MarqueeRow items={track2} animClass="animate-marquee-reverse" />
      </Reveal>

      {/* ── Capability cards below ── */}
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-16 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={i}>
              <article className="glass-panel group p-7 md:p-9 rounded-3xl h-full border border-[var(--border-color)] hover:border-teal-accent/25 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-350 flex flex-col">
                <span className="block font-display text-5xl font-black text-teal-accent/10 group-hover:text-teal-accent/30 transition-colors duration-300 leading-none mb-5">
                  {cap.num}
                </span>
                <h3 className="font-display text-lg md:text-xl font-bold text-[var(--text-primary)] mb-3">
                  {t(cap.titleKey)}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm md:text-base font-medium leading-relaxed mt-auto">
                  {t(cap.copyKey)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
