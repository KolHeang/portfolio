"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden py-24 sm:py-32" aria-labelledby="hero-title">
      {/* Background glowing blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[450px] md:w-[600px] h-[450px] md:h-[600px] rounded-full bg-teal-accent/15 blur-[120px] animate-blob-float-1" />
        <div className="absolute -bottom-40 -left-40 w-[450px] md:w-[600px] h-[450px] md:h-[600px] rounded-full bg-coral-accent/10 blur-[120px] animate-blob-float-2" />
        <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-gold-accent/8 blur-[120px] animate-blob-float-3" />
      </div>

      {/* Hero profile image on desktop */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[35%] max-w-[460px] hidden lg:block z-10 pointer-events-none select-none">
        <Reveal>
          <div className="relative group">
            {/* Subtle gradient border glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-teal-accent to-emerald-accent rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
            <Image
              className="relative w-full h-auto rounded-2xl object-cover mask-gradient filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent)",
              }}
              src="/assets/kol-heang-profile.png"
              alt="Kol Heang profile"
              width={460}
              height={460}
              priority
            />
          </div>
        </Reveal>
      </div>

      {/* Hero Content container */}
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-16 z-20 flex flex-col items-center lg:items-start text-center lg:text-left">
        <Reveal>
          {/* Eyebrow tag */}
          <span className="inline-block mb-5 px-4 py-1.5 bg-teal-accent/10 border border-teal-accent/20 text-teal-accent font-display text-[10px] md:text-xs font-extrabold uppercase tracking-[0.15em] rounded-full">
            {t("hero_eyebrow")}
          </span>

          {/* Title */}
          <h1
            id="hero-title"
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-[var(--text-primary)] mb-6 max-w-[850px] [&_span]:bg-gradient-to-r [&_span]:from-teal-accent [&_span]:to-emerald-accent [&_span]:bg-clip-text [&_span]:text-transparent"
            dangerouslySetInnerHTML={{ __html: t("hero_title") }}
          />

          {/* Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-[620px] mb-10 font-medium leading-relaxed">
            {t("hero_copy")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16 sm:mb-20">
            <a
              href="#work"
              onClick={(e) => handleScrollClick(e, "work")}
              className="flex justify-center items-center h-14 px-8 bg-teal-accent text-white font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-teal-accent/10 hover:bg-teal-accent/90 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              {t("hero_btn_work")}
            </a>
            <a
              href="/assets/kol-heang-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-14 px-8 border border-[var(--border-color)] text-[var(--text-primary)] font-bold text-sm tracking-wide rounded-xl hover:border-teal-accent/30 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer" style={{ backgroundColor: 'var(--bg-surface)' }}
            >
              {t("hero_btn_cv")}
            </a>
          </div>

          {/* Statistics list */}
          <dl className="flex flex-wrap gap-8 sm:gap-12 justify-center lg:justify-start border-none p-0 m-0" aria-label="Portfolio highlights">
            <div className="flex flex-col items-center lg:items-start">
              <dt className="font-display text-3xl sm:text-4xl font-extrabold leading-none mb-1.5 text-[var(--text-primary)]">
                3+
              </dt>
              <dd className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-bold uppercase tracking-wider">
                {t("stat_exp")}
              </dd>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <dt className="font-display text-3xl sm:text-4xl font-extrabold leading-none mb-1.5 text-[var(--text-primary)]">
                15+
              </dt>
              <dd className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-bold uppercase tracking-wider">
                {t("stat_projects")}
              </dd>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <dt className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-none mb-1.5 bg-gradient-to-r from-teal-accent to-emerald-accent bg-clip-text text-transparent">
                DEBC
              </dt>
              <dd className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-bold uppercase tracking-wider">
                {t("stat_special")}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <a
        href="#work"
        onClick={(e) => handleScrollClick(e, "work")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-7 h-11 border-2 border-white/20 hover:border-teal-accent/50 rounded-full flex justify-center p-1.5 transition-colors duration-300"
        aria-label="Scroll to work"
      >
        <span className="w-1.5 h-2.5 bg-teal-accent rounded-full animate-scroll-dot" />
      </a>
    </section>
  );
};
