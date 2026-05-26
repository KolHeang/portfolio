"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 relative border-y border-[var(--border-color)]" style={{ backgroundColor: "var(--bg-page)" }} id="about" aria-labelledby="intro-title">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.02),transparent_70%)] pointer-events-none" />

      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-16">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Heading */}
            <div className="lg:col-span-6">
              <p className="text-teal-accent font-bold text-xs uppercase tracking-[0.15em] mb-3">
                {t("intro_kicker")}
              </p>
              <h2
                id="intro-title"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[var(--text-primary)] [&_span]:bg-gradient-to-r [&_span]:from-teal-accent [&_span]:to-emerald-accent [&_span]:bg-clip-text [&_span]:text-transparent"
                dangerouslySetInnerHTML={{ __html: t("intro_title") }}
              />
            </div>

            {/* Right Column: Bio Copy */}
            <div className="lg:col-span-6">
              <p className="text-[var(--text-secondary)] text-base sm:text-lg font-medium leading-relaxed">
                {t("intro_copy")}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
