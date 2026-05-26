"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

interface ExperienceItem {
  timeKey: "exp1_time" | "exp2_time" | "exp3_time" | "exp4_time";
  titleKey: "exp1_title" | "exp2_title" | "exp3_title" | "exp4_title";
  copyKey: "exp1_copy" | "exp2_copy" | "exp3_copy" | "exp4_copy";
}

const TIMELINE_DATA: ExperienceItem[] = [
  {
    timeKey: "exp1_time",
    titleKey: "exp1_title",
    copyKey: "exp1_copy",
  },
  {
    timeKey: "exp2_time",
    titleKey: "exp2_title",
    copyKey: "exp2_copy",
  },
  {
    timeKey: "exp3_time",
    titleKey: "exp3_title",
    copyKey: "exp3_copy",
  },
  {
    timeKey: "exp4_time",
    titleKey: "exp4_title",
    copyKey: "exp4_copy",
  },
];

// Duplicate for a seamless vertical marquee loop
const TRACK = [...TIMELINE_DATA, ...TIMELINE_DATA];

const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({
  item,
  index,
}) => {
  const { t } = useLanguage();

  // Subtle gradient accents per card to give them a premium visual pop
  const gradients = [
    "from-teal-accent/10 to-emerald-accent/5",
    "from-blue-500/10 to-cyan-400/5",
    "from-purple-500/10 to-pink-500/5",
    "from-amber-500/10 to-orange-500/5",
  ];
  const cardGradient = gradients[index % gradients.length];

  return (
    <article
      className="relative flex flex-col w-full max-w-[560px] mx-auto flex-shrink-0 glass-panel rounded-3xl p-8 overflow-hidden border border-[var(--border-color)] hover:border-teal-accent/30 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:shadow-teal-accent/10 transition-all duration-400 group cursor-pointer"
    >
      {/* Glow gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${cardGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`}
      />

      {/* Time frame badge */}
      <div className="relative flex justify-between items-center mb-6">
        <span className="px-3.5 py-1.5 bg-teal-accent/10 border border-teal-accent/20 rounded-full text-[10px] md:text-xs font-bold text-teal-accent tracking-wider uppercase">
          {t(item.timeKey)}
        </span>
      </div>

      {/* Number watermark */}
      <span className="absolute top-6 right-8 font-display text-7xl font-black text-white/3 group-hover:text-white/5 transition-colors duration-300 leading-none select-none pointer-events-none">
        {String((index % 4) + 1).padStart(2, "0")}
      </span>

      {/* Title */}
      <h3 className="relative font-display text-lg md:text-xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-teal-accent transition-colors duration-300 leading-snug">
        {t(item.titleKey)}
      </h3>

      {/* Copy detail */}
      <p className="relative text-[var(--text-secondary)] text-sm md:text-base font-medium leading-relaxed flex-grow">
        {t(item.copyKey)}
      </p>
    </article>
  );
};

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="py-20 md:py-32 relative scroll-mt-20 overflow-hidden"
      aria-labelledby="experience-title"
    >
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col justify-center h-fit">
            <Reveal>
              <p className="text-teal-accent font-bold text-xs uppercase tracking-[0.15em] mb-3">
                {t("exp_kicker")}
              </p>
              <h2
                id="experience-title"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] leading-tight mb-6"
              >
                {t("exp_title")}
              </h2>
              <p className="text-[var(--text-secondary)] text-xs font-semibold uppercase tracking-wider mb-2 lg:block hidden">
                ✦ Hover to pause scrolling ✦
              </p>
            </Reveal>
          </div>

          {/* Right Column: Vertical Marquee Scrolling Downwards */}
          <div className="lg:col-span-7 relative w-full group">
            <Reveal className="w-full">
              {/* Vertical Marquee Container */}
              <div className="relative h-[520px] w-full overflow-hidden py-4 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)]/20 backdrop-blur-sm px-4">
                
                {/* Top fade gradient */}
                <div className="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-[var(--bg-page)] via-[var(--bg-page)]/60 to-transparent z-10" />

                {/* Vertical scroll track */}
                <div
                  className="flex flex-col gap-6 animate-marquee-vertical group-hover:[animation-play-state:paused] py-16"
                  style={{ height: "max-content" }}
                >
                  {TRACK.map((item, index) => (
                    <ExperienceCard key={index} item={item} index={index} />
                  ))}
                </div>

                {/* Bottom fade gradient */}
                <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-[var(--bg-page)] via-[var(--bg-page)]/60 to-transparent z-10" />
              </div>
            </Reveal>

            {/* Mobile Hint Text */}
            <p className="text-[var(--text-muted)] text-xs font-semibold uppercase tracking-wider text-center mt-4 lg:hidden">
              ✦ Hover to pause scrolling ✦
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
