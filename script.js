/* ════════════════════════════════════════════════════════════
   RESUME — script.js
   Data-driven dual-language resume (FA/EN) with PDF export
   ════════════════════════════════════════════════════════════ */

const resumeData = {
  en: {
    name: "Heydar Khalafnejad",
    role: "Senior Android Developer",
    contact: [
      {
        icon: "phone",
        text: "+98 916 635 2036",
        href: "tel:+989166352036",
        ltr: true,
      },
      {
        icon: "email",
        text: "heydar.farhanii@gmail.com",
        href: "mailto:heydar.farhanii@gmail.com",
        ltr: true,
      },
      {
        icon: "github",
        text: "github.com/HeydarFarhani",
        href: "https://github.com/haedarfarhani",
        ltr: true,
      },
      {
        icon: "location",
        text: "Ahvaz, Iran",
        href: null,
        ltr: false,
      },
    ],
    summary:
      "Senior Android Developer with 7+ years of professional experience designing and shipping high-quality mobile applications. Deep expertise in <strong>Java</strong> and <strong>Kotlin</strong>, the <strong>Android SDK</strong>, and the full Jetpack ecosystem, with proven hands-on experience implementing <strong>MVVM</strong>, <strong>MVI</strong>, and <strong>Clean Architecture</strong> grounded in <strong>SOLID</strong> principles and clean code practices. Track record of leading Java-to-Kotlin migrations, optimizing app performance, and significantly improving codebase maintainability and scalability. Thrives in agile, cross-functional teams and remote-first engineering cultures across logistics, fintech, and SaaS product environments.",
    skills: [
      {
        category: "Programming Languages",
        items: ["Kotlin", "Java", "C#", "ASP.NET Core"],
      },
      {
        category: "Android / Jetpack",
        items: ["Android SDK", "Jetpack Compose", "ViewModel", "LiveData", "Room", "DataStore", "WorkManager", "Navigation", "Coroutines", "Flow"],
      },
      {
        category: "Dependency Injection",
        items: ["Hilt", "Koin"],
      },
      {
        category: "Networking & Serialization",
        items: ["Retrofit", "OkHttp", "Ktor", "RESTful APIs", "JSON"],
      },
      {
        category: "Architecture & Design",
        items: ["MVVM", "MVI", "Clean Architecture", "SOLID", "Design Patterns", "Clean Code"],
      },
      {
        category: "Firebase",
        items: ["Crashlytics", "FCM", "Analytics"],
      },
      {
        category: "Maps & Location",
        items: ["Google Maps", "Neshan Maps", "OpenStreetMap"],
      },
      {
        category: "Tools & Testing",
        items: ["Git", "Android Studio", "Gradle", "SQLite", "JUnit"],
      },
    ],
    experience: [
      {
        company: "Atiran",
        role: "Senior Android Developer",
        date: "Nov 2025 — May 2026",
        location: "Ahvaz, Khuzestan",
        bullets: [
          "Optimized SQLite queries and <code>RecyclerView</code> rendering logic, resulting in a significant reduction in data load times and a noticeably smoother user experience.",
          "Integrated Firebase services (Crashlytics, FCM, and Analytics) to improve application stability monitoring and accelerate production issue detection.",
          "Re-architected user location tracking logic with a focus on battery efficiency and positioning accuracy, reducing background resource consumption.",
          "Executed systematic codebase refactoring aligned with SOLID principles and Clean Code practices, reducing technical debt and improving long-term maintainability.",
          "Conducted regular code reviews and collaborated closely with the team to identify and resolve performance bottlenecks across the app.",
        ],
      },
      {
        company: "Jadeh Logistic",
        role: "Android Developer",
        date: "Aug 2019 — Aug 2024",
        location: "Tehran, Iran",
        bullets: [
          "Led the full migration of two production applications from Java to Kotlin, improving code readability, reducing boilerplate, and enhancing overall app performance.",
          "Re-architected projects from MVC to MVVM and Clean Architecture using established design patterns, dramatically increasing testability and scalability.",
          "Established a structured testing and debugging workflow that enabled delivery of a stable SDK with minimal defects in production.",
          "Contributed directly to growing the user base beyond 200,000 active users by ensuring consistently high app reliability and a smooth user experience.",
          "Actively participated in team code reviews and facilitated knowledge sharing to continuously raise overall product quality.",
        ],
      },
      {
        company: "Mazrae App",
        role: "Android Developer",
        date: "Sep 2018 — Jan 2019",
        location: "Tehran, Iran",
        bullets: [
          "Designed and developed a native Android wrapper for a PWA using <strong>Android Trusted Web Activity (TWA)</strong>, delivering an app-like experience from a web-based product.",
          "Implemented a JavaScript Bridge layer enabling seamless, bidirectional communication between the Front-End web layer and native Android functions.",
          "Architected native Android APIs using the Bridge Pattern to extend native device capabilities in areas where web APIs were insufficient, improving overall UX.",
        ],
      },
      {
        company: "Wholesale Food Store",
        role: "Junior Android Developer",
        date: "Mar 2018 — Aug 2018",
        location: "Ahvaz, Khuzestan",
        bullets: [
          "Built the application from scratch using native Java with MVC architecture, Retrofit for networking, SQLite for local storage, and DataStore for preferences management.",
          "Developed an advanced multi-criteria store filter system supporting filtering by category, rating, and geolocation, significantly enhancing product discoverability.",
          "Participated in code reviews and pair programming sessions, applying and learning best practices to improve both individual and team code quality.",
          "Diagnosed and resolved application bugs systematically across all stages of the development lifecycle.",
        ],
      },
      {
        company: "Freelance Software Developer",
        role: "Software Developer (Desktop)",
        date: "Jan 2013 — Jan 2017",
        location: "Ahvaz, Khuzestan",
        bullets: [
          "Designed and delivered Windows desktop applications, CRM systems, and reporting tools using C#, .NET Framework, SQL Server, and Entity Framework.",
          "Implemented multi-threading solutions to enhance UI responsiveness and overall application performance in data-intensive desktop environments.",
          "Self-studied and achieved practical proficiency in HTML, CSS, and JavaScript to complement back-end development capabilities.",
        ],
      },
    ],
    education: [
      {
        institution: "Karoun University – Ahvaz",
        date: "Jan 2016 — Jun 2019",
        degree: "Bachelor of Science, Electrical Engineering – Electronics | GPA: 15/20",
      },
      {
        institution: "Ahvaz Technical College – Shahid Vocational Center (Ahvaz)",
        date: "Sep 2013 — Mar 2015",
        degree: "Associate Degree, Electrical Engineering – Electronics | GPA: 15/20",
      },
    ],
    labels: {
      summary: "Professional Summary",
      skills: "Technical Skills",
      experience: "Work Experience",
      education: "Education",
      pdf: "Download PDF",
      location: "Open to Remote Opportunities",
    },
  },

  fa: {
    name: "حیدر خلف‌نژاد",
    role: "توسعه‌دهنده ارشد اندروید",
    contact: [
      {
        icon: "phone",
        text: "۰۹۱۶ ۶۳۵ ۲۰۳۶",
        href: "tel:+989166352036",
        ltr: true,
      },
      {
        icon: "email",
        text: "heydar.farhanii@gmail.com",
        href: "mailto:heydar.farhanii@gmail.com",
        ltr: true,
      },
      {
        icon: "github",
        text: "github.com/HeydarFarhani",
        href: "https://github.com/HeydarFarhani",
        ltr: true,
      },
      {
        icon: "location",
        text: "اهواز، ایران",
        href: null,
        ltr: false,
      },
    ],
    summary:
      "توسعه‌دهنده ارشد اندروید با بیش از هفت سال سابقه در طراحی، توسعه و بهینه‌سازی اپلیکیشن‌های موبایل. تسلط عمیق بر <strong>Java</strong>، <strong>Kotlin</strong>، <strong>Android SDK</strong> و اکوسیستم <strong>Jetpack</strong>، همراه با تجربه عملی در پیاده‌سازی معماری‌های <strong>MVVM</strong>، <strong>MVI</strong> و <strong>Clean Architecture</strong> بر پایه اصول <strong>SOLID</strong> و کدنویسی تمیز. سابقه اثبات‌شده در <strong>بهینه‌سازی عملکرد</strong>، <strong>مهاجرت Java به Kotlin</strong>، و یکپارچه‌سازی <strong>REST APIs</strong>. توانمند در همکاری تیمی، <strong>Code Review</strong> و ارتقای پایداری و مقیاس‌پذیری پروژه‌ها در محیط‌های ریموت و بین‌المللی.",
    skills: [
      {
        category: "زبان‌های برنامه‌نویسی",
        items: ["Kotlin", "Java", "C#", "ASP.NET Core"],
      },
      {
        category: "اکوسیستم اندروید (Jetpack)",
        items: ["Android SDK", "Jetpack Compose", "ViewModel", "LiveData", "Room", "DataStore", "WorkManager", "Navigation", "Coroutines", "Flow"],
      },
      {
        category: "تزریق وابستگی",
        items: ["Hilt", "Koin"],
      },
      {
        category: "شبکه و API",
        items: ["Retrofit", "OkHttp", "Ktor", "RESTful APIs"],
      },
      {
        category: "معماری و طراحی",
        items: ["MVVM", "MVI", "Clean Architecture", "SOLID", "Design Patterns", "Clean Code"],
      },
      {
        category: "Firebase",
        items: ["Crashlytics", "FCM", "Analytics"],
      },
      {
        category: "نقشه و مکان‌یابی",
        items: ["Google Maps", "نشان", "OpenStreetMap"],
      },
      {
        category: "ابزار و پایگاه داده",
        items: ["Git", "Android Studio", "Gradle", "SQLite", "JUnit"],
      },
    ],
    experience: [
      {
        company: "آتی‌ران",
        role: "توسعه‌دهنده ارشد اندروید",
        date: "آذر ۱۴۰۴ — اردیبهشت ۱۴۰۵",
        location: "اهواز، خوزستان",
        bullets: [
          "بهینه‌سازی کوئری‌های SQLite و الگوریتم‌های رندر RecyclerView، منجر به کاهش زمان بارگذاری داده‌ها و ارتقای روانی تجربه کاربری.",
          "یکپارچه‌سازی سرویس‌های Firebase (Crashlytics، FCM، Analytics) برای پایش لحظه‌ای پایداری و تسریع شناسایی خطا در محیط تولید.",
          "بازطراحی منطق ردیابی موقعیت مکانی با تمرکز بر کارایی باتری و دقت موقعیت‌یابی، کاهش محسوس مصرف منابع در پس‌زمینه.",
          "اجرای Refactoring سیستماتیک بر پایه اصول SOLID و Clean Code، کاهش بدهی فنی و افزایش نگهداری‌پذیری کدبیس.",
          "انجام Code Review منظط و همکاری با تیم برای شناسایی و رفع گلوگاه‌های عملکردی در سطح اپلیکیشن.",
        ],
      },
      {
        company: "جاده لجستیک",
        role: "توسعه‌دهنده اندروید",
        date: "مرداد ۱۳۹۸ — مرداد ۱۴۰۳",
        location: "تهران، ایران",
        bullets: [
          "رهبری مهاجرت کامل دو اپلیکیشن تولیدی از Java به Kotlin، بهبود خوانایی، کاهش boilerplate و ارتقای عملکرد کلی.",
          "بازطراحی معماری از MVC به MVVM و Clean Architecture با به‌کارگیری Design Patterns، افزایش چشمگیر تست‌پذیری و مقیاس‌پذیری.",
          "استقرار فرآیند تست منظط و دیباگ هدفمند برای عرضه SDK پایدار با حداقل خطا در محیط تولید.",
          "مشارکت در رشد پایگاه کاربری به بیش از ۲۰۰٬۰۰۰ کاربر فعال از طریق تضمیم پایداری و تجربه کاربری روان.",
          "مشارکت فعال در Code Review تیمی و انتقال دانش برای ارتقای کیفیت کلی محصول.",
        ],
      },
      {
        company: "مزرعه اپ",
        role: "توسعه‌دهنده اندروید",
        date: "شهریور ۱۳۹۷ — دی ۱۳۹۷",
        location: "تهران، ایران",
        bullets: [
          "طراحی و توسعه wrapper نیتیو اندروید برای میزبانی PWA با Android Trusted Web Activity (TWA)، ارائه تجربه بومی از محصول تحت وب.",
          "پیاده‌سازی JavaScript Bridge برای ارتباط دوطرفه یکپارچه میان لایه Front-End و توابع نیتیو اندروید.",
          "طراحی APIهای بومی اندروید بر پایه Bridge Pattern جهت گسترش قابلیت‌های دستگاه در مواردی که APIهای وب کفاف نمی‌دادند.",
        ],
      },
      {
        company: "فروشگاه خوراک‌های عمده",
        role: "توسعه‌دهنده اندروید (جونیور)",
        date: "اسفند ۱۳۹۶ — مرداد ۱۳۹۷",
        location: "اهواز، خوزستان",
        bullets: [
          "توسعه اپلیکیشن از پایه با Java Native، معماری MVC، Retrofit، SQLite و DataStore.",
          "پیاده‌سازی سیستم فیلتر پیشرفته چندمعیاره برای جستجوی فروشگاه‌ها بر اساس دسته‌بندی، امتیاز و موقعیت مکانی.",
          "مشارکت در Code Review و Pair Programming برای ارتقای کیفیت کد و یادگیری بهترین روش‌های مهندسی.",
          "شناسایی و رفع سیستماتیک باگ‌های اپلیکیشن در مراحل مختلف چرخه توسعه.",
        ],
      },
      {
        company: "فریلنسر مستقل",
        role: "توسعه‌دهنده نرم‌افزار (دسکتاپ)",
        date: "دی ۱۳۹۱ — دی ۱۳۹۵",
        location: "اهواز، خوزستان",
        bullets: [
          "طراحی و توسعه اپلیکیشن‌های دسکتاپ ویندوز، سیستم‌های CRM و ابزارهای گزارش‌گیری با C#، .NET Framework، SQL Server و Entity Framework.",
          "پیاده‌سازی راهکارهای Multi-threading برای بهبود عملکرد و پاسخ‌گویی رابط کاربری در محیط‌های داده‌محور دسکتاپ.",
          "خودآموزی و کسب مهارت در HTML، CSS و JavaScript به‌عنوان مکمل توانمندی‌های توسعه بک‌اند.",
        ],
      },
    ],
    education: [
      {
        institution: "دانشگاه غیر انتفاعی کارون – اهواز",
        date: "دی ۱۳۹۴ — خرداد ۱۳۹۸",
        degree: "کارشناسی مهندسی برق – برق قدرت | معدل: ۱۵ از ۲۰",
      },
      {
        institution: "دانشکده فنی شهدا اهواز – مرکز فنی و حرفه‌ای شهید (اهواز)",
        date: "شهریور ۱۳۹۲ — اسفند ۱۳۹۳",
        degree: "کاردانی برق – الکتروتکنیک (برق قدرت) | معدل: ۱۵ از ۲۰",
      },
    ],
    labels: {
      summary: "خلاصه حرفه‌ای",
      skills: "مهارت‌های فنی",
      experience: "تجربه کاری",
      education: "تحصیلات",
      pdf: "دانلود PDF",
      location: "آماده همکاری از راه دور",
    },
  },
};

/* ── SVG icon map ── */
const icons = {
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.4a2 2 0 0 1 1.72-2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.93-.94a2 2 0 0 1 2.11-.45c.9.34 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"></path></svg>',
  email: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 .12-6-2-6-6 0-.45.02-2 .18-3 1.44-1.66 2.23-3 .7-5-.6 0-1.83-.6-3 .44 0 0-.65 1-1.37 2.75C1.45 7.5 1 8 1 9c0 3.53 2.47 6 6 6l-.5 1.5c-.28.75-.43 1.5-.43 2.25 0 .5.23 1 .5 1.5l1.5 2.5c.5.75 1 1.25 1.5 1.75.75.5 1.5.75 2 .88 1 .13 2 .07 2.5-.25.5-.32.88-.88 1-1.5.12-.75.12-1.5 0-2.25L19 19c4-.5 5-2 5-5 0-1-.5-2-1.5-3 1-1 1.6-2 2-3 .5-1 .75-2 .75-3 0-.5-.25-1-.75-1h-1.5c-.5 1-1.5 1.5-2.5 1.5-.5 0-1-.25-1.5-.75l-1-1c-.5-.5-1-1-1.5-1.25-.5-.25-1-.25-1.5 0z"/><circle cx="12" cy="7" r="2"/><path d="M12 11v6"/><path d="M10 13h4"/></svg>',
  location: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-8 12-8 12S5 16 5 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
};

/* ── Render functions ── */
function renderResume(lang = "en") {
  const data = resumeData[lang];
  const direction = lang === "fa" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  document.body.setAttribute("dir", direction);

  /* Toolbar PDF text */
  document.querySelector(".pdf-btn-text").textContent = data.labels.pdf;

  /* Header */
  document.getElementById("resumeName").textContent = data.name;
  document.getElementById("resumeRole").textContent = data.role;

  /* Contact strip */
  const contactStrip = document.getElementById("contactStrip");
  contactStrip.innerHTML = "";
  data.contact.forEach((c) => {
    const item = document.createElement("span");
    item.className = "contact-item";
    if (c.ltr) item.classList.add("ltr-inner");
    const iconSvg = icons[c.icon] || "";
    if (c.href) {
      item.innerHTML = `${iconSvg}<a href="${c.href}">${c.text}</a>`;
    } else {
      item.innerHTML = `${iconSvg}<span>${c.text}</span>`;
    }
    contactStrip.appendChild(item);
  });

  /* Section titles */
  document.querySelectorAll(".section-label").forEach((el, i) => {
    const labels = [data.labels.summary, data.labels.skills, data.labels.experience, data.labels.education];
    el.textContent = labels[i];
  });

  /* Summary */
  document.getElementById("summaryText").innerHTML = data.summary;

  /* Skills */
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = "";
  data.skills.forEach((cat) => {
    const wrapper = document.createElement("div");
    wrapper.className = "skill-category";
    const label = document.createElement("div");
    label.className = "category-label";
    label.textContent = cat.category;
    const tags = document.createElement("div");
    tags.className = "skill-tags";
    cat.items.forEach((item) => {
      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.textContent = item;
      tags.appendChild(tag);
    });
    wrapper.appendChild(label);
    wrapper.appendChild(tags);
    skillsGrid.appendChild(wrapper);
  });

  /* Experience */
  const jobsContainer = document.getElementById("jobsContainer");
  jobsContainer.innerHTML = "";
  data.experience.forEach((job) => {
    const jobEl = document.createElement("div");
    jobEl.className = "job";

    let bulletsHtml = "";
    job.bullets.forEach((b) => {
      bulletsHtml += `<li>${b}</li>`;
    });

    jobEl.innerHTML = `
      <div class="job-header">
        <span class="job-company">${job.company}</span>
        <span class="job-date">${job.date}</span>
      </div>
      <div class="job-meta">
        <span class="job-role">${job.role}</span>
        <span class="job-location">${job.location}</span>
      </div>
      <ul class="job-bullets">${bulletsHtml}</ul>
    `;
    jobsContainer.appendChild(jobEl);
  });

  /* Education */
  const eduContainer = document.getElementById("educationContainer");
  eduContainer.innerHTML = "";
  data.education.forEach((edu) => {
    const eduEl = document.createElement("div");
    eduEl.className = "edu-item";
    eduEl.innerHTML = `
      <div class="edu-header">
        <span class="edu-uni">${edu.institution}</span>
        <span class="edu-date">${edu.date}</span>
      </div>
      <div class="edu-degree">${edu.degree}</div>
    `;
    eduContainer.appendChild(eduEl);
  });

  /* Update active language button */
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

/* ── Language switching ── */
function switchLanguage(lang) {
  renderResume(lang);
}

let currentLang = "en";

/* ── Theme logic ── */
function applyTheme(theme) {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
}

(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }
})();

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
});

/* ── Language toggle ── */
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    switchLanguage(currentLang);
  });
});

/* ── PDF download ── */
const pdfBtn = document.getElementById("pdfBtn");
pdfBtn.addEventListener("click", () => {
  const resumeEl = document.getElementById("resumePage");

  if (typeof html2pdf === "undefined") {
    window.print();
    return;
  }

  resumeEl.classList.add("pdf-export");

  const data = resumeData[currentLang];

  const opt = {
    margin:       [8, 8, 8, 8],
    filename:     `${data.name.replace(/\s+/g, "_")}_${data.role.replace(/\s+/g, "_")}.pdf`,
    image:        { type: "jpeg", quality: 0.95 },
    html2canvas:  {
      scale: 2,
      useXHR: false,
      letterRendering: true,
      logging: false,
    },
    jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" },
  };

  setTimeout(() => {
    html2pdf().set(opt).from(resumeEl).save().then(() => {
      resumeEl.classList.remove("pdf-export");
    });
  }, 150);
});

/* ── Initial render ── */
renderResume(currentLang);
