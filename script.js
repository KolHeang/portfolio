const contactEmail = "kolheang777@gmail.com";
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const langBtns = document.querySelectorAll("[data-lang]");

const translations = {
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
    intro_copy: "I specialize in Node.js, NestJS, TypeScript, and Laravel. My expertise covers HR management systems, career platforms, API development, and database architecture. I am committed to writing clean, maintainable code that solves real-world business problems.",
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
    skill2_title: "Database",
    skill2_copy: "PostgreSQL, MySQL, TypeORM, Database Architecture.",
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
    nav_brand: "គល់ ហៀង",
    nav_work: "ស្នាដៃ",
    nav_skills: "ជំនាញ",
    nav_exp: "បទពិសោធន៍",
    nav_contact: "ទំនាក់ទំនង",
    hero_eyebrow: "បុគ្គលិកអភិវឌ្ឍកម្មវិធីអ៊ិនធឺណិតខាងក្រោយ",
    hero_title: "កសាង <span>ប្រព័ន្ធដែលអាចទុកចិត្តបាន</span> សម្រាប់អាជីវកម្មសម័យថ្មី។",
    hero_copy: "ខ្ញុំជំនាញលើ Node.js, NestJS និង Laravel ដើម្បីបង្កើត APIs ដែលរឹងមាំ និងសេវាកម្ម back-end ដែលអាចពង្រីកបាន ដែលជួយដល់កម្មវិធីប្រើប្រាស់។",
    hero_btn_work: "មើលស្នាដៃ",
    hero_btn_cv: "ទាញយក CV",
    stat_exp: "ឆ្នាំនៃបទពិសោធន៍",
    stat_projects: "គម្រោងដែលបានសាងសង់",
    stat_special: "ប្រព័ន្ធគ្រប់គ្រងធនធានមនុស្ស",
    intro_kicker: "អំពីខ្ញុំ",
    intro_title: "បុគ្គលិកអភិវឌ្ឍកម្មវិធីអ៊ិនធឺណិតខាងក្រោយ ផ្តោតលើ <span>ប្រព័ន្ធដែលគួរឱ្យទុកចិត្ត</span> និងលំហូរទិន្នន័យច្បាស់លាស់។",
    intro_copy: "ខ្ញុំជំនាញលើ Node.js, NestJS, TypeScript និង Laravel។ ជំនាញរបស់ខ្ញុំរួមមានប្រព័ន្ធគ្រប់គ្រងធនធានមនុស្ស វេទិកាការងារ ការអភិវឌ្ឍន៍ API និងស្ថាបត្យកម្មមូលដ្ឋានទិន្នន័យ។ ខ្ញុំប្តេជ្ញាសរសេរកូដដែលស្អាត និងងាយស្រួលថែទាំ ដើម្បីដោះស្រាយបញ្ហាអាជីវកម្មជាក់ស្តែង។",
    work_kicker: "ស្នាដៃដែលបានជ្រើសរើស",
    work_title: "គម្រោងលេចធ្លោ",
    proj1_tag: "ប្រព័ន្ធ HR",
    proj1_title: "ប្រព័ន្ធគ្រប់គ្រងធនធានមនុស្ស",
    proj1_copy: "វេទិកាគ្រប់គ្រងបុគ្គលិកដ៏ទូលំទូលាយ ជាមួយនឹងការតាមដានពេលវេលាជាក់ស្តែង និងលំហូរការងារស្វ័យប្រវត្តិ។",
    proj2_tag: "ការងាររដ្ឋបាល",
    proj2_title: "ប្រព័ន្ធដាក់ពាក្យការងារ",
    proj2_copy: "វិបផតថលជ្រើសរើសបុគ្គលិកដែលមានការចម្រោះកម្រិតខ្ពស់ និងលក្ខណៈពិសេសគ្រប់គ្រងបេក្ខជន។",
    proj3_tag: "ប្រព័ន្ធ ERP",
    proj3_title: "ម៉ូឌុល ERP វៃឆ្លាត",
    proj3_copy: "ដំណោះស្រាយ ERP បែបម៉ូឌុលសម្រាប់ការលក់ សន្និធិ និងការបង្កើនប្រសិទ្ធភាពគ្រប់គ្រងគម្រោង។",
    skills_kicker: "សមត្ថភាព",
    skills_title: "ជំនាញបច្ចេកទេស",
    skill1_title: "អភិវឌ្ឍន៍ផ្នែកខាងក្រោយ",
    skill1_copy: "Node.js, NestJS, Laravel, ការរចនា API, Microservices។",
    skill2_title: "មូលដ្ឋានទិន្នន័យ",
    skill2_copy: "PostgreSQL, MySQL, TypeORM, ស្ថាបត្យកម្មមូលដ្ឋានទិន្នន័យ។",
    skill3_title: "Front-End",
    skill3_copy: "Next.js, TypeScript, Tailwind CSS, ការរចនាឆ្លើយតប។",
    skill4_title: "DevOps",
    skill4_copy: "Docker, Nginx, CI/CD, Git, ម៉ាស៊ីនមេ Linux។",
    exp_kicker: "បទពិសោធន៍",
    exp_title: "ដំណើរវិជ្ជាជីវៈ",
    exp1_time: "២០២៥ - បច្ចុប្បន្ន",
    exp1_title: "បុគ្គលិកអភិវឌ្ឍកម្មវិធីអ៊ិនធឺណិតខាងក្រោយ, គណៈកម្មាធិការសេដ្ឋកិច្ចនិងធុរកិច្ចឌីជីថល",
    exp1_copy: "ដឹកនាំការអភិវឌ្ឍន៍ back-end សម្រាប់វេទិកា HR របស់រដ្ឋាភិបាល និងប្រព័ន្ធកម្មវិធីការងារ។",
    exp2_time: "២០២២ - ២០២៥",
    exp2_title: "បុគ្គលិកអភិវឌ្ឍកម្មវិធីអ៊ិនធឺណិតខាងក្រោយ, TURBOTECH",
    exp2_copy: "បានបង្កើត និងថែទាំម៉ូឌុល ERP ដ៏ស្មុគស្មាញ និងឧបករណ៍អាជីវកម្មផ្ទៃក្នុងដោយប្រើ Laravel។",
    exp3_time: "២០២២",
    exp3_title: "ជំនួយការ IT, PTS Technology",
    exp3_copy: "គាំទ្រការថែទាំផ្នែករឹង និងការដាក់ឱ្យប្រើប្រាស់កម្មវិធីសហគ្រាស។",
    exp4_time: "២០១៨ - ២០២២",
    exp4_title: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
    exp4_copy: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ។ ផ្តោតលើក្បួនដោះស្រាយ និងការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ។",
    contact_kicker: "ទាក់ទងមកខ្ញុំ",
    contact_title: "តោះមកបង្កើតអ្វីដែល <span>អស្ចារ្យ</span> ជាមួយគ្នា។",
    contact_copy: "ខ្ញុំតែងតែបើកចំហសម្រាប់ការពិភាក្សាអំពីគម្រោងថ្មីៗ គំនិតច្នៃប្រឌិត ឬឱកាសដើម្បីក្លាយជាផ្នែកនៃចក្ខុវិស័យរបស់អ្នក។",
    form_name: "ឈ្មោះរបស់អ្នក",
    form_name_ph: "ចន ដូ",
    form_email: "អ៊ីមែលរបស់អ្នក",
    form_email_ph: "john@example.com",
    form_msg: "សារ",
    form_msg_ph: "ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក...",
    form_btn: "ផ្ញើសារ",
    footer_copy: "&copy; ២០២៦ គល់ ហៀង។ រៀបចំឡើងដោយភាពច្បាស់លាស់ និងការយកចិត្តទុកដាក់។",
    footer_top: "ត្រឡប់ទៅខាងលើវិញ ↑"
  }
};

const setLanguage = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  langBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("portfolio-lang", lang);
  document.documentElement.lang = lang;
};

langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.getAttribute("data-lang"));
  });
});

// Init Language
const savedLang = localStorage.getItem("portfolio-lang") || "en";
setLanguage(savedLang);

// Header scroll effect
const updateHeader = () => {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// Mobile Navigation
if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));

    // Animate hamburger to X (simplified)
    const spans = navToggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(6px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  nav.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// Reveal on Scroll
const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
  revealObserver.observe(el);
});

// Contact Form
if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    formStatus.textContent = "Redirecting to your email client...";
    formStatus.style.color = "var(--teal)";

    setTimeout(() => {
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      formStatus.textContent = "Thank you! Email client opened.";
    }, 1000);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
