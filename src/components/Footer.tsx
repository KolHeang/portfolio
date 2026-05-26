"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t border-[var(--border-color)] py-12 mt-16" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-[var(--text-secondary)] text-xs sm:text-sm font-semibold text-center sm:text-left">
          {t("footer_copy")}
        </p>
        <a
          href="#top"
          onClick={handleScrollTop}
          className="text-[var(--text-primary)] hover:text-teal-accent text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-colors duration-300 active:scale-[0.98]"
        >
          {t("footer_top")}
        </a>
      </div>
    </footer>
  );
};
