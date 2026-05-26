"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "info" | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      setStatusType("info");
      return;
    }

    const contactEmail = "kolheang777@gmail.com";
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    setStatus("Redirecting to your email client...");
    setStatusType("success");

    setTimeout(() => {
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setStatus("Thank you! Email client opened.");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="py-20 md:py-32 relative scroll-mt-20" id="contact" aria-labelledby="contact-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none" />

      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Reveal>
              <p className="text-teal-accent font-bold text-xs uppercase tracking-[0.15em] mb-3">
                {t("contact_kicker")}
              </p>
              <h2
                id="contact-title"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] leading-tight mb-6 [&_span]:bg-gradient-to-r [&_span]:from-teal-accent [&_span]:to-emerald-accent [&_span]:bg-clip-text [&_span]:text-transparent"
                dangerouslySetInnerHTML={{ __html: t("contact_title") }}
              />
              <p className="text-[var(--text-secondary)] text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-[500px]">
                {t("contact_copy")}
              </p>
              
              <div className="flex flex-col gap-4 font-semibold text-base sm:text-lg text-[var(--text-primary)]">
                <a
                  href="mailto:kolheang777@gmail.com"
                  className="flex items-center gap-3 hover:text-teal-accent active:scale-[0.98] transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-teal-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>kolheang777@gmail.com</span>
                </a>
                <a
                  href="tel:+855963610103"
                  className="flex items-center gap-3 hover:text-teal-accent active:scale-[0.98] transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-teal-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+855 96 361 0103</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={handleSubmit} className="glass-panel p-8 sm:p-12 rounded-3xl flex flex-col gap-6">
                <label className="flex flex-col gap-2.5 text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)]">
                  <span>{t("form_name")}</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("form_name_ph")}
                    required
                    className="w-full h-14 border border-[var(--border-color)] focus:border-teal-accent outline-none px-4 rounded-xl text-sm font-semibold text-[var(--text-primary)] transition-all focus:ring-1 focus:ring-teal-accent" style={{ backgroundColor: 'var(--bg-surface-2)' }}
                  />
                </label>

                <label className="flex flex-col gap-2.5 text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)]">
                  <span>{t("form_email")}</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("form_email_ph")}
                    required
                    className="w-full h-14 border border-[var(--border-color)] focus:border-teal-accent outline-none px-4 rounded-xl text-sm font-semibold text-[var(--text-primary)] transition-all focus:ring-1 focus:ring-teal-accent" style={{ backgroundColor: 'var(--bg-surface-2)' }}
                  />
                </label>

                <label className="flex flex-col gap-2.5 text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)]">
                  <span>{t("form_msg")}</span>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("form_msg_ph")}
                    required
                    className="w-full border border-[var(--border-color)] focus:border-teal-accent outline-none p-4 rounded-xl text-sm font-semibold text-[var(--text-primary)] transition-all focus:ring-1 focus:ring-teal-accent resize-none" style={{ backgroundColor: 'var(--bg-surface-2)' }}
                  />
                </label>

                <button
                  type="submit"
                  className="h-14 font-bold text-sm tracking-wide bg-teal-accent text-white rounded-xl shadow-lg shadow-teal-accent/10 hover:bg-teal-accent/90 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  {t("form_btn")}
                </button>

                {status && (
                  <p
                    role="status"
                    className={`text-center text-xs font-bold ${
                      statusType === "success" ? "text-teal-accent animate-pulse" : "text-amber-500"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
