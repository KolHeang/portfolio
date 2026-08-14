"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "km";

export interface Translations {
  nav_brand: string;
  nav_work: string;
  nav_skills: string;
  nav_exp: string;
  nav_contact: string;
  hero_eyebrow: string;
  hero_title: string;
  hero_copy: string;
  hero_btn_work: string;
  hero_btn_cv: string;
  stat_exp: string;
  stat_projects: string;
  stat_special: string;
  intro_kicker: string;
  intro_title: string;
  intro_copy: string;
  work_kicker: string;
  work_title: string;
  proj1_tag: string;
  proj1_title: string;
  proj1_copy: string;
  proj2_tag: string;
  proj2_title: string;
  proj2_copy: string;
  proj3_tag: string;
  proj3_title: string;
  proj3_copy: string;
  skills_kicker: string;
  skills_title: string;
  skill1_title: string;
  skill1_copy: string;
  skill2_title: string;
  skill2_copy: string;
  skill3_title: string;
  skill3_copy: string;
  skill4_title: string;
  skill4_copy: string;
  exp_kicker: string;
  exp_title: string;
  exp1_time: string;
  exp1_title: string;
  exp1_copy: string;
  exp2_time: string;
  exp2_title: string;
  exp2_copy: string;
  exp3_time: string;
  exp3_title: string;
  exp3_copy: string;
  exp4_time: string;
  exp4_title: string;
  exp4_copy: string;
  contact_kicker: string;
  contact_title: string;
  contact_copy: string;
  form_name: string;
  form_name_ph: string;
  form_email: string;
  form_email_ph: string;
  form_msg: string;
  form_msg_ph: string;
  form_btn: string;
  footer_copy: string;
  footer_top: string;
}

const translations: Record<Language, Translations> = {
  en: {
    nav_brand: "Kol Heang",
    nav_work: "Work",
    nav_skills: "Skills",
    nav_exp: "Experience",
    nav_contact: "Contact",
    hero_eyebrow: "Back-End Developer",
    hero_title: "Building <span>Reliable Systems</span> for Modern Business.",
    hero_copy: "I specialize in Node.js, NestJS, and Laravel to create robust APIs and scalable back-end services that power user-focused applications.",
    hero_btn_work: "Explore Work",
    hero_btn_cv: "Download CV",
    stat_exp: "Years Experience",
    stat_projects: "Projects Built",
    stat_special: "HR Platforms",
    intro_kicker: "About Me",
    intro_title: "Back-end developer focused on <span>dependable systems</span> and clear data flows.",
    intro_copy: "I specialize in Node.js, NestJS, TypeScript, Drizzle ORM, Prisma, TypeORM, PostgreSQL, MySQL, Express, Git, Docker, Laravel, and more. My expertise covers HR management systems, career platforms, API development, and database architecture. I am committed to writing clean, maintainable code that solves real-world business problems.",
    work_kicker: "Selected Work",
    work_title: "Featured Projects",
    proj1_tag: "HR System",
    proj1_title: "HR Management System",
    proj1_copy: "A comprehensive employee management platform with real-time tracking and automated workflows.",
    proj2_tag: "Career Admin",
    proj2_title: "Career Application System",
    proj2_copy: "Dynamic hiring portal with advanced filtering and candidate management features.",
    proj3_tag: "ERP System",
    proj3_title: "Smart ERP Modules",
    proj3_copy: "Modular ERP solution for sales, inventory, and project management optimization.",
    skills_kicker: "Capabilities",
    skills_title: "Technical Expertise",
    skill1_title: "Back-End",
    skill1_copy: "Node.js, NestJS, Laravel, API Design, Microservices.",
    skill2_title: "Database & ORMs",
    skill2_copy: "PostgreSQL, MySQL, Drizzle ORM, Prisma, TypeORM, Database Architecture.",
    skill3_title: "Front-End",
    skill3_copy: "Next.js, TypeScript, Tailwind CSS, Responsive Design.",
    skill4_title: "DevOps",
    skill4_copy: "Docker, Nginx, CI/CD, Git, Linux Server.",
    exp_kicker: "Experience",
    exp_title: "Professional Journey",
    exp1_time: "2025 - Present",
    exp1_title: "Back-End Developer, Digital Economy and Business Committee - DEBC",
    exp1_copy: "Leading back-end development for government HR platforms and career application systems.",
    exp2_time: "2022 - 2025",
    exp2_title: "Back-End Developer, TURBOTECH",
    exp2_copy: "Developed and maintained complex ERP modules and internal business tools using Laravel.",
    exp3_time: "2022",
    exp3_title: "IT Assistant, PTS Technology",
    exp3_copy: "Supported hardware maintenance and enterprise software deployment.",
    exp4_time: "2018 - 2022",
    exp4_title: "Royal University of Phnom Penh",
    exp4_copy: "Bachelor of Computer Science. Focused on algorithms and database management.",
    contact_kicker: "Get In Touch",
    contact_title: "Let's build something <span>remarkable</span> together.",
    contact_copy: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    form_name: "Your Name",
    form_name_ph: "John Doe",
    form_email: "Your Email",
    form_email_ph: "john@example.com",
    form_msg: "Message",
    form_msg_ph: "Tell me about your project...",
    form_btn: "Send Message",
    footer_copy: "&copy; 2026 Kol Heang. Built with precision and care.",
    footer_top: "Back to top ↑"
  },
  km: {
    nav_brand: "គល់ ហ៊ាង",
    nav_work: "ស្នាដៃការងារ",
    nav_skills: "ជំនាញ",
    nav_exp: "បទពិសោធន៍",
    nav_contact: "ទំនាក់ទំនង",
    hero_eyebrow: "អ្នកអភិវឌ្ឍន៍ Back-End",
    hero_title: "កសាង <span>ប្រព័ន្ធដែលអាចទុកចិត្តបាន</span> សម្រាប់អាជីវកម្មសម័យថ្មី។",
    hero_copy: "ខ្ញុំមានឯកទេសលើ Node.js, NestJS និង Laravel ក្នុងការអភិវឌ្ឍ API ដែលមានសុវត្ថិភាពខ្ពស់ និងសេវាកម្ម Back-End ដែលអាចពង្រីកវិសាលភាពបាន ដើម្បីជួយសម្រួលដល់ដំណើរការកម្មវិធីផ្សេងៗ។",
    hero_btn_work: "មើលស្នាដៃការងារ",
    hero_btn_cv: "ទាញយក CV",
    stat_exp: "ឆ្នាំបទពិសោធន៍",
    stat_projects: "គម្រោងបានបញ្ចប់",
    stat_special: "ប្រព័ន្ធគ្រប់គ្រងធនធានមនុស្ស",
    intro_kicker: "អំពីខ្ញុំ",
    intro_title: "អ្នកអភិវឌ្ឍន៍ Back-End ផ្តោតលើ <span>ប្រព័ន្ធដែលអាចទុកចិត្តបាន</span> និងលំហូរទិន្នន័យច្បាស់លាស់។",
    intro_copy: "ខ្ញុំមានឯកទេសលើ Node.js, NestJS, TypeScript, Drizzle ORM, Prisma, TypeORM, PostgreSQL, MySQL, Express, Git, Docker, Laravel និងបច្ចេកវិទ្យាផ្សេងៗទៀត។ បទពិសោធន៍របស់ខ្ញុំរួមមានការអភិវឌ្ឍប្រព័ន្ធគ្រប់គ្រងធនធានមនុស្ស (HRMS) វេទិកាការងារ ការរចនា API និងស្ថាបត្យកម្មមូលដ្ឋានទិន្នន័យ។ ខ្ញុំប្ដេជ្ញាសរសេរកូដដែលស្អាត ងាយស្រួលថែទាំ និងមានប្រសិទ្ធភាពខ្ពស់ ដើម្បីដោះស្រាយបញ្ហាអាជីវកម្មជាក់ស្តែង។",
    work_kicker: "ស្នាដៃដែលបានជ្រើសរើស",
    work_title: "គម្រោងលេចធ្លោ",
    proj1_tag: "ប្រព័ន្ធ HR",
    proj1_title: "ប្រព័ន្ធគ្រប់គ្រងធនធានមនុស្ស",
    proj1_copy: "វេទិកាគ្រប់គ្រងបុគ្គលិកដ៏ទូលំទូលាយ ជាមួយនឹងការតាមដានសកម្មភាពជាក់ស្តែង និងលំហូរការងារស្វ័យប្រវត្ត។",
    proj2_tag: "ប្រព័ន្ធរដ្ឋបាលការងារ",
    proj2_title: "ប្រព័ន្ធដាក់ពាក្យការងារ",
    proj2_copy: "វិបផតថលជ្រើសរើសបុគ្គលិក ជាមួយនឹងមុខងារចម្រោះព័ត៌មានកម្រិតខ្ពស់ និងការគ្រប់គ្រងបេក្ខជនប្រកបដោយប្រសិទ្ធភាព។",
    proj3_tag: "ប្រព័ន្ធ ERP",
    proj3_title: "ម៉ូឌុល ERP វៃឆ្លាត",
    proj3_copy: "ដំណោះស្រាយប្រព័ន្ធ ERP ក្នុងទម្រង់ជាម៉ូឌុល សម្រាប់ការគ្រប់គ្រងការលក់ សន្និធិ និងការបង្កើនប្រសិទ្ធភាពគ្រប់គ្រងគម្រោង។",
    skills_kicker: "សមត្ថភាព",
    skills_title: "ជំនាញបច្ចេកទេស",
    skill1_title: "ការអភិវឌ្ឍន៍ផ្នែកខាងក្រោយ (Back-End)",
    skill1_copy: "Node.js, NestJS, Laravel, ការរចនា API និងប្រព័ន្ធ Microservices។",
    skill2_title: "មូលដ្ឋានទិន្នន័យ និង ORMs",
    skill2_copy: "PostgreSQL, MySQL, Drizzle ORM, Prisma, TypeORM និងស្ថាបត្យកម្មមូលដ្ឋានទិន្នន័យ។",
    skill3_title: "Front-End",
    skill3_copy: "Next.js, TypeScript, Tailwind CSS និងការរចនាបែបឆ្លើយតប (Responsive Design)។",
    skill4_title: "DevOps",
    skill4_copy: "Docker, Nginx, CI/CD, Git និងម៉ាស៊ីនមេ Linux (Linux Server)។",
    exp_kicker: "បទពិសោធន៍",
    exp_title: "ប្រវត្តិការងារ",
    exp1_time: "២០២៥ - បច្ចុប្បន្ន",
    exp1_title: "អ្នកអភិវឌ្ឍន៍ Back-End, គណៈកម្មាធិការសេដ្ឋកិច្ច និងធុរកិច្ចឌីជីថល",
    exp1_copy: "ដឹកនាំការអភិវឌ្ឍប្រព័ន្ធ Back-End សម្រាប់វេទិកា HR របស់រដ្ឋាភិបាល និងប្រព័ន្ធគ្រប់គ្រងការងារ។",
    exp2_time: "២០២២ - ២០២៥",
    exp2_title: "អ្នកអភិវឌ្ឍន៍ Back-End, ក្រុមហ៊ុន TURBOTECH",
    exp2_copy: "អភិវឌ្ឍ និងថែទាំម៉ូឌុល ERP ដ៏ស្មុគស្មាញ ព្រមទាំងឧបករណ៍ដំណើរការអាជីវកម្មផ្ទៃក្នុងដោយប្រើប្រាស់ Laravel។",
    exp3_time: "២០២២",
    exp3_title: "ជំនួយការផ្នែក IT, ក្រុមហ៊ុន PTS Technology",
    exp3_copy: "ជួយគាំទ្រការថែទាំឧបករណ៍ Hardware និងការដាក់ឱ្យដំណើរការកម្មវិធីសម្រាប់សហគ្រាស។",
    exp4_time: "២០១៨ - ២០២២",
    exp4_title: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
    exp4_copy: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ ផ្តោតលើក្បួនដោះស្រាយ (Algorithms) និងការគ្រប់គ្រងប្រព័ន្ធទិន្នន័យ (Database)។",
    contact_kicker: "ទំនាក់ទំនង",
    contact_title: "តោះមកសហការបង្កើត <span>អ្វីដែលអស្ចារ្យ</span> ជាមួយគ្នា!",
    contact_copy: "ខ្ញុំរីករាយជានិច្ចក្នុងការពិភាក្សាអំពីគម្រោងថ្មីៗ គំនិតច្នៃប្រឌិត ឬឱកាសផ្សេងៗដើម្បីសម្រេចបាននូវចក្ខុវិស័យរបស់អ្នក។",
    form_name: "ឈ្មោះរបស់អ្នក",
    form_name_ph: "ចន ដូ",
    form_email: "អ៊ីមែលរបស់អ្នក",
    form_email_ph: "john@example.com",
    form_msg: "សារ",
    form_msg_ph: "សរសេរព័ត៌មានលម្អិតអំពីគម្រោងរបស់អ្នក...",
    form_btn: "ផ្ញើសារ",
    footer_copy: "&copy; ២០២៦ គល់ ហ៊ាង។ រៀបចំឡើងដោយភាពច្បាស់លាស់ និងការយកចិត្តទុកដាក់។",
    footer_top: "ត្រឡប់ទៅខាងលើវិញ ↑"
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("portfolio-lang") as Language;
      if (savedLang === "en" || savedLang === "km") return savedLang;
    }
    return "en";
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-lang", lang);
      document.documentElement.lang = lang;
    }
  };

  const t = (key: keyof Translations): string => {
    return translations[language][key] || translations["en"][key] || "";
  };

  // Prevent flash by yielding rendering when hydration finishes
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
