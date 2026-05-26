"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968 && isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Smooth scroll helper
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-6 px-6 md:px-16 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-page)]/85 backdrop-blur-md border-b border-[var(--border-color)] py-3 shadow-lg shadow-black/10"
          : "bg-transparent py-5 md:py-7"
      }`}
    >
      {/* Brand logo */}
      <a
        href="#top"
        onClick={(e) => handleAnchorClick(e, "top")}
        className="flex items-center gap-3 font-display font-extrabold text-xl tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity"
        aria-label="Kol Heang portfolio home"
      >
        <img
          className="w-10 h-10 rounded-lg object-cover border border-[var(--border-color)]"
          src="/assets/kh-logo.png"
          alt="KH Logo"
        />
        <span>{t("nav_brand")}</span>
      </a>

      {/* Language Switcher + Theme Toggle for Desktop */}
      <div className="hidden sm:flex items-center gap-2 ml-auto">
        {/* Language toggle */}
        <div className="flex items-center bg-[var(--bg-surface)] border border-[var(--border-color)] p-1 rounded-full">
          <button
            onClick={() => setLanguage("en")}
            className={`text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200 ${
              language === "en"
                ? "bg-[var(--bg-page)] text-teal-accent shadow-sm"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("km")}
            className={`text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200 ${
              language === "km"
                ? "bg-[var(--bg-page)] text-teal-accent shadow-sm"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            KH
          </button>
        </div>
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
          aria-label="Toggle theme"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-teal-accent/40 hover:text-teal-accent text-[var(--text-secondary)] transition-all duration-200 text-base"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold" aria-label="Main navigation">
        <a
          href="#work"
          onClick={(e) => handleAnchorClick(e, "work")}
          className="relative text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 group py-1"
        >
          {t("nav_work")}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-accent transition-all duration-250 group-hover:w-full rounded" />
        </a>
        <a
          href="#skills"
          onClick={(e) => handleAnchorClick(e, "skills")}
          className="relative text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 group py-1"
        >
          {t("nav_skills")}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-accent transition-all duration-250 group-hover:w-full rounded" />
        </a>
        <a
          href="#experience"
          onClick={(e) => handleAnchorClick(e, "experience")}
          className="relative text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 group py-1"
        >
          {t("nav_exp")}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-accent transition-all duration-250 group-hover:w-full rounded" />
        </a>
        <a
          href="#contact"
          onClick={(e) => handleAnchorClick(e, "contact")}
          className="relative text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 group py-1"
        >
          {t("nav_contact")}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-accent transition-all duration-250 group-hover:w-full rounded" />
        </a>
      </nav>

      {/* Hamburger menu toggle button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-[var(--bg-surface-2)] border border-transparent hover:border-[var(--border-color)] cursor-pointer z-[110] transition-all duration-200"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-300 origin-center ${
            isMenuOpen ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[var(--text-primary)] my-1.5 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-300 origin-center ${
            isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile Drawer Navigation */}
      <div
        style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-color)" }}
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[360px] border-l p-12 flex flex-col justify-center gap-8 z-[100] shadow-2xl transition-transform duration-400 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-xl font-bold" aria-label="Mobile navigation">
          <a
            href="#work"
            onClick={(e) => handleAnchorClick(e, "work")}
            className="text-[var(--text-secondary)] hover:text-teal-accent transition-colors py-2 border-b border-[var(--border-color)]"
          >
            {t("nav_work")}
          </a>
          <a
            href="#skills"
            onClick={(e) => handleAnchorClick(e, "skills")}
            className="text-[var(--text-secondary)] hover:text-teal-accent transition-colors py-2 border-b border-[var(--border-color)]"
          >
            {t("nav_skills")}
          </a>
          <a
            href="#experience"
            onClick={(e) => handleAnchorClick(e, "experience")}
            className="text-[var(--text-secondary)] hover:text-teal-accent transition-colors py-2 border-b border-[var(--border-color)]"
          >
            {t("nav_exp")}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "contact")}
            className="text-[var(--text-secondary)] hover:text-teal-accent transition-colors py-2 border-b border-[var(--border-color)]"
          >
            {t("nav_contact")}
          </a>

          {/* Language + Theme Switcher in Mobile Drawer */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center bg-[var(--bg-page)] border border-[var(--border-color)] p-1 rounded-full">
              <button
                onClick={() => setLanguage("en")}
                className={`text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer w-1/2 transition-all ${
                  language === "en" ? "bg-[var(--bg-surface)] text-teal-accent" : "text-[var(--text-secondary)]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("km")}
                className={`text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer w-1/2 transition-all ${
                  language === "km" ? "bg-[var(--bg-surface)] text-teal-accent" : "text-[var(--text-secondary)]"
                }`}
              >
                KH
              </button>
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-page)] text-base hover:border-teal-accent/40 transition-all"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[95] transition-opacity"
        />
      )}
    </header>
  );
};
