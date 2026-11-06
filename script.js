/* ════════════════════════════════════════════════════════════
   RESUME — script.js
   Data-driven dual-language resume (FA/EN) with PDF export
   Color Palette:
     Honey Bronze: #edae49
     Amaranth:     #d1495b
     Teal:         #00798c
     Baltic Blue:  #30638e
     Yale Blue:    #003d5b
   ════════════════════════════════════════════════════════════ */

const resumeData = {
  en: {
    monogram: "HK",
    badge: "Senior Android",
    name: "Heydar Khalafnejad",
    role: "Senior Android Developer",
    roleTagline: "Kotlin & Clean Architecture",
    statusText: "Open to Remote Opportunities",
    footerStatus: "Available Worldwide (Remote)",
    copyNotice: "Copied to clipboard!",
    nav: {
      summary: "Summary",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
    },
    metrics: [
      {
        value: "7+ Yrs",
        label: "Android Experience",
        sub: "Production & Systems",
      },
      {
        value: "200K+",
        label: "Active Users",
        sub: "Scaled Products",
      },
      {
        value: "5+ Apps",
        label: "Commercial Shipped",
        sub: "Fintech & Logistics",
      },
      {
        value: "100%",
        label: "Clean Code",
        sub: "Kotlin & Jetpack",
      },
    ],
    contact: [
      {
        icon: "phone",
        text: "+98 916 635 2036",
        href: "tel:+989166352036",
        copyValue: "+989166352036",
        ltr: true,
      },
      {
        icon: "email",
        text: "heydar.farhanii@gmail.com",
        href: "mailto:heydar.farhanii@gmail.com",
        copyValue: "heydar.farhanii@gmail.com",
        ltr: true,
      },
      {
        icon: "github",
        text: "github.com/haedarfarhani",
        href: "https://github.com/haedarfarhani",
        copyValue: null,
        ltr: true,
      },
      {
        icon: "location",
        text: "Ahvaz, Iran",
        href: null,
        copyValue: null,
        ltr: false,
      },
    ],
    summary:
      "Senior Android Developer with <strong>7+ years</strong> of professional experience designing and shipping high-quality mobile applications. Deep expertise in <strong>Java</strong> and <strong>Kotlin</strong>, the <strong>Android SDK</strong>, and the full Jetpack ecosystem, with proven hands-on experience implementing <strong>MVVM</strong>, <strong>MVI</strong>, and <strong>Clean Architecture</strong> grounded in <strong>SOLID</strong> principles and clean code practices. Track record of leading Java-to-Kotlin migrations, optimizing app performance, and significantly improving codebase maintainability and scalability. Thrives in agile, cross-functional teams and remote-first engineering cultures across logistics, fintech, and SaaS product environments.",
    skillFilters: [
      { id: "all", label: "All Skills" },
      { id: "Languages", label: "Languages" },
      { id: "Android", label: "Android & Jetpack" },
      { id: "Architecture", label: "Architecture" },
      { id: "Tools", label: "Tools & Cloud" },
    ],
    skills: [
      {
        category: "Programming Languages",
        filterGroup: "Languages",
        items: ["Kotlin", "Java", "C#", "ASP.NET Core"],
      },
      {
        category: "Android & Jetpack Ecosystem",
        filterGroup: "Android",
        items: [
          "Android SDK",
          "Jetpack Compose",
          "ViewModel",
          "LiveData",
          "Room DB",
          "DataStore",
          "WorkManager",
          "Navigation Component",
          "Coroutines",
          "Kotlin Flow",
        ],
      },
      {
        category: "Dependency Injection",
        filterGroup: "Architecture",
        items: ["Hilt", "Koin", "Dagger"],
      },
      {
        category: "Networking & Serialization",
        filterGroup: "Architecture",
        items: ["Retrofit", "OkHttp", "Ktor Client", "RESTful APIs", "JSON Serialization"],
      },
      {
        category: "Architecture & Design",
        filterGroup: "Architecture",
        items: ["MVVM", "MVI", "Clean Architecture", "SOLID Principles", "Design Patterns", "Clean Code"],
      },
      {
        category: "Cloud & Firebase",
        filterGroup: "Tools",
        items: ["Firebase Crashlytics", "Cloud Messaging (FCM)", "Firebase Analytics"],
      },
      {
        category: "Maps & Location Systems",
        filterGroup: "Tools",
        items: ["Google Maps SDK", "Neshan Maps", "OpenStreetMap", "Location Tracking"],
      },
      {
        category: "Tools & Testing",
        filterGroup: "Tools",
        items: ["Git / GitHub", "Android Studio", "Gradle Build Scripts", "SQLite", "JUnit Test Suites"],
      },
    ],
    experience: [
      {
        company: "Atiran",
        role: "Senior Android Developer",
        date: "Nov 2025 — May 2026",
        location: "Ahvaz, Khuzestan",
        bullets: [
          "Optimized <code>SQLite</code> queries and <code>RecyclerView</code> rendering algorithms, resulting in a significant reduction in data load times and a noticeably smoother user experience.",
          "Integrated Firebase services (<strong>Crashlytics</strong>, <strong>FCM</strong>, and <strong>Analytics</strong>) to improve application stability monitoring and accelerate production issue detection.",
          "Re-architected user location tracking logic with a focus on battery efficiency and positioning accuracy, reducing background resource consumption.",
          "Executed systematic codebase refactoring aligned with <strong>SOLID</strong> principles and <strong>Clean Code</strong> practices, reducing technical debt and improving long-term maintainability.",
          "Conducted regular code reviews and collaborated closely with cross-functional teams to identify and resolve performance bottlenecks across the app.",
        ],
      },
      {
        company: "Jadeh Logistic",
        role: "Android Developer",
        date: "Aug 2019 — Aug 2024",
        location: "Tehran, Iran",
        bullets: [
          "Led the full migration of two flagship production applications from <strong>Java to Kotlin</strong>, improving code readability, eliminating boilerplate, and boosting overall performance.",
          "Re-architected projects from legacy MVC to <strong>MVVM and Clean Architecture</strong> using established design patterns, dramatically increasing testability and scalability.",
          "Established a structured testing and debugging workflow that enabled delivery of a stable SDK with minimal defects in production.",
          "Contributed directly to growing the user base beyond <strong>200,000 active users</strong> by ensuring consistently high app reliability and a smooth user experience.",
          "Actively participated in team code reviews and facilitated engineering knowledge sharing to continuously elevate overall product quality.",
        ],
      },
      {
        company: "Mazrae App",
        role: "Android Developer",
        date: "Sep 2018 — Jan 2019",
        location: "Tehran, Iran",
        bullets: [
          "Designed and developed a native Android wrapper for a PWA using <strong>Android Trusted Web Activity (TWA)</strong>, delivering a native-grade feel from a web-based product.",
          "Implemented a JavaScript Bridge layer enabling seamless, bidirectional communication between the Front-End web layer and native Android functions.",
          "Architected native Android APIs using the Bridge Pattern to extend native device capabilities where web APIs were insufficient, improving overall UX.",
        ],
      },
      {
        company: "Wholesale Food Store",
        role: "Junior Android Developer",
        date: "Mar 2018 — Aug 2018",
        location: "Ahvaz, Khuzestan",
        bullets: [
          "Built the mobile application from scratch using native Java with MVC architecture, <code>Retrofit</code> for networking, <code>SQLite</code> for local storage, and <code>DataStore</code> for preferences.",
          "Developed an advanced multi-criteria store filter system supporting filtering by category, rating, and geolocation, significantly enhancing product discoverability.",
          "Participated in code reviews and pair programming sessions, applying and learning modern engineering best practices.",
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
          "Self-studied and achieved practical proficiency in modern web foundations to complement back-end engineering capabilities.",
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
        institution: "Ahvaz Technical College – Shahid Vocational Center",
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
    },
  },

  fa: {
    monogram: "ح‌خ",
    badge: "ارشد اندروید",
    name: "حیدر خلف‌نژاد",
    role: "توسعه‌دهنده ارشد اندروید",
    roleTagline: "معماری تمیز و اکوسیستم کاتلین",
    statusText: "آماده همکاری ریموت و بین‌المللی",
    footerStatus: "آماده همکاری جهانی (دورکاری)",
    copyNotice: "در کلیپ‌بورد کپی شد!",
    nav: {
      summary: "خلاصه",
      skills: "مهارت‌ها",
      experience: "تجربه کاری",
      education: "تحصیلات",
    },
    metrics: [
      {
        value: "+۷ سال",
        label: "سابقه تخصصی",
        sub: "سیستم‌ها و معماری اندروید",
      },
      {
        value: "+۲۰۰K",
        label: "کاربر فعال",
        sub: "مقیاس محصولات تولیدی",
      },
      {
        value: "+۵ اپ",
        label: "محصول تجاری",
        sub: "لجستیک، فین‌تک و خدمات ابری",
      },
      {
        value: "۱۰۰٪",
        label: "کدنویسی تمیز",
        sub: "معماری MVVM / MVI",
      },
    ],
    contact: [
      {
        icon: "phone",
        text: "۰۹۱۶ ۶۳۵ ۲۰۳۶",
        href: "tel:+989166352036",
        copyValue: "+989166352036",
        ltr: true,
      },
      {
        icon: "email",
        text: "heydar.farhanii@gmail.com",
        href: "mailto:heydar.farhanii@gmail.com",
        copyValue: "heydar.farhanii@gmail.com",
        ltr: true,
      },
      {
        icon: "github",
        text: "github.com/HeydarFarhani",
        href: "https://github.com/HeydarFarhani",
        copyValue: null,
        ltr: true,
      },
      {
        icon: "location",
        text: "اهواز، ایران",
        href: null,
        copyValue: null,
        ltr: false,
      },
    ],
    summary:
      "توسعه‌دهنده ارشد اندروید با بیش از <strong>هفت سال</strong> سابقه تخصصی در طراحی، توسعه و بهینه‌سازی اپلیکیشن‌های موبایل در مقیاس بالا. تسلط عمیق بر <strong>Java</strong>، <strong>Kotlin</strong>، <strong>Android SDK</strong> و اکوسیستم مدرن <strong>Jetpack</strong>، همراه با تجربه عملی در پیاده‌سازی معماری‌های <strong>MVVM</strong>، <strong>MVI</strong> و <strong>Clean Architecture</strong> بر پایه اصول <strong>SOLID</strong> و کدنویسی تمیز. سابقه اثبات‌شده در <strong>بهینه‌سازی عملکرد</strong>، <strong>مهاجرت کامل کدبیس‌های قدیمی Java به Kotlin</strong>، و یکپارچه‌سازی <strong>REST APIs</strong>. توانمند در همکاری تیمی چابک، <strong>Code Review</strong> دقیق و ارتقای پایداری و مقیاس‌پذیری پروژه‌ها در محیط‌های ریموت و بین‌المللی.",
    skillFilters: [
      { id: "all", label: "همه مهارت‌ها" },
      { id: "Languages", label: "زبان‌های برنامه‌نویسی" },
      { id: "Android", label: "اندروید و Jetpack" },
      { id: "Architecture", label: "معماری و الگوها" },
      { id: "Tools", label: "ابزارها و کلود" },
    ],
    skills: [
      {
        category: "زبان‌های برنامه‌نویسی",
        filterGroup: "Languages",
        items: ["Kotlin", "Java", "C#", "ASP.NET Core"],
      },
      {
        category: "اکوسیستم اندروید (Jetpack)",
        filterGroup: "Android",
        items: [
          "Android SDK",
          "Jetpack Compose",
          "ViewModel",
          "LiveData",
          "Room DB",
          "DataStore",
          "WorkManager",
          "Navigation Component",
          "Coroutines",
          "Kotlin Flow",
        ],
      },
      {
        category: "تزریق وابستگی",
        filterGroup: "Architecture",
        items: ["Hilt", "Koin", "Dagger"],
      },
      {
        category: "شبکه و وب‌سرویس",
        filterGroup: "Architecture",
        items: ["Retrofit", "OkHttp", "Ktor Client", "RESTful APIs", "JSON Serialization"],
      },
      {
        category: "معماری و الگوهای طراحی",
        filterGroup: "Architecture",
        items: ["MVVM", "MVI", "Clean Architecture", "اصول SOLID", "Design Patterns", "Clean Code"],
      },
      {
        category: "سرویس‌های ابری و Firebase",
        filterGroup: "Tools",
        items: ["Firebase Crashlytics", "Cloud Messaging (FCM)", "Firebase Analytics"],
      },
      {
        category: "نقشه و مکان‌یابی",
        filterGroup: "Tools",
        items: ["Google Maps SDK", "نقشه نشان", "OpenStreetMap", "بهینه‌سازی ردیابی موقعیت"],
      },
      {
        category: "ابزارها و تست نرم‌افزار",
        filterGroup: "Tools",
        items: ["Git / GitHub", "Android Studio", "Gradle Scripts", "SQLite", "JUnit Test Suites"],
      },
    ],
    experience: [
      {
        company: "آتی‌ران",
        role: "توسعه‌دهنده ارشد اندروید",
        date: "آذر ۱۴۰۴ — اردیبهشت ۱۴۰۵",
        location: "اهواز، خوزستان",
        bullets: [
          "بهینه‌سازی کوئری‌های <code>SQLite</code> و الگوریتم‌های رندرینگ <code>RecyclerView</code>، منجر به کاهش محسوس زمان بارگذاری داده‌ها و ارتقای روانی تجربه کاربری.",
          "یکپارچه‌سازی سرویس‌های Firebase (شامل <strong>Crashlytics</strong>، <strong>FCM</strong> و <strong>Analytics</strong>) برای پایش لحظه‌ای پایداری و تسریع شناسایی خطاها در محیط پروداکشن.",
          "بازطراحی معماری منطق ردیابی موقعیت مکانی با تمرکز بر مصرف بهینه باتری و دقت موقعیت‌یابی، کاهش چشمگیر مصرف منابع در پس‌زمینه.",
          "اجرای ریفکتورینگ سیستماتیک کدبیس منطبق بر اصول <strong>SOLID</strong> و <strong>Clean Code</strong>، کاهش بدهی فنی و افزایش قابلیت نگهداری بلندمدت.",
          "انجام مستمر <strong>Code Review</strong> تیمی و همکاری نزدیک با مهندسان برای رفع گلوگاه‌های عملکردی در سطح اپلیکیشن.",
        ],
      },
      {
        company: "جاده لجستیک",
        role: "توسعه‌دهنده اندروید",
        date: "مرداد ۱۳۹۸ — مرداد ۱۴۰۳",
        location: "تهران، ایران",
        bullets: [
          "رهبری مهاجرت کامل دو اپلیکیشن اصلی سازمان از <strong>Java به Kotlin</strong>، بهبود خوانایی کد، حذف کدهای اضافه (Boilerplate) و ارتقای کارایی برنامه.",
          "بازطراحی معماری پروژه‌ها از MVC سنتی به <strong>MVVM و Clean Architecture</strong> با بهره‌گیری از دیزاین پترن‌های استاندارد، ارتقای چشمگیر تست‌پذیری و مقیاس‌پذیری.",
          "استقرار چرخه منظم تست و دیباگ هدفمند جهت تحویل SDK پایدار با حداقل خطای احتمالی در محیط عملیاتی.",
          "مشارکت فعال و موثر در افزایش کاربران به بیش از <strong>۲۰۰٬۰۰۰ کاربر فعال</strong> از طریق تضمین پایداری ۹۹٫۹٪ و تجربه کاربری نرم و بدون وقفه.",
          "مشارکت فعال در جلسات بازبینی کد و انتقال دانش فنی برای ارتقای استانداردهای مهندسی کل تیم.",
        ],
      },
      {
        company: "مزرعه اپ",
        role: "توسعه‌دهنده اندروید",
        date: "شهریور ۱۳۹۷ — دی ۱۳۹۷",
        location: "تهران، ایران",
        bullets: [
          "طراحی و توسعه Wrapper نیتیو اندروید برای اجرای PWA با استفاده از <strong>Android Trusted Web Activity (TWA)</strong>، ارائه تجربه‌ای کاملاً بومی از وب‌اپلیکیشن.",
          "پیاده‌سازی لایه ارتباطی JavaScript Bridge جهت تبادل دوطرفه داده‌ها میان لایه Front-End و متدهای نیتیو اندروید.",
          "معماری APIهای نیتیو با استفاده از Bridge Pattern برای توسعه قابلیت‌های دستگاه در بخش‌هایی که وب‌APIها محدودیت داشتند.",
        ],
      },
      {
        company: "فروشگاه خوراک‌های عمده",
        role: "توسعه‌دهنده اندروید (جونیور)",
        date: "اسفند ۱۳۹۶ — مرداد ۱۳۹۷",
        location: "اهواز، خوزستان",
        bullets: [
          "توسعه اپلیکیشن فروشگاهی از صفر با Java Native، معماری MVC، <code>Retrofit</code> برای شبکه، <code>SQLite</code> برای ذخیره‌سازی محلی و <code>DataStore</code> برای تنظیمات.",
          "پیاده‌سازی سیستم جستجو و فیلترینگ چندمعیاره بر اساس دسته‌بندی، امتیاز کاربران و موقعیت مکانی فروشگاه‌ها.",
          "مشارکت در جلسات Pair Programming و ارتقای کیفیت کد همگام با استانداردهای مهندسی روز.",
          "شناسایی دقیق و برطرف‌سازی باگ‌های سیستمی در تمامی مراحل چرخه حیات نرم‌افزار.",
        ],
      },
      {
        company: "فریلنسر مستقل",
        role: "توسعه‌دهنده نرم‌افزار (دسکتاپ)",
        date: "دی ۱۳۹۱ — دی ۱۳۹۵",
        location: "اهواز، خوزستان",
        bullets: [
          "طراحی و تحویل نرم‌افزارهای دسکتاپ ویندوز، سیستم‌های CRM و ابزارهای گزارش‌گیری تحلیلی با C#، .NET Framework، SQL Server و Entity Framework.",
          "پیاده‌سازی راهکارهای Multi-threading برای تضمین روانی رابط کاربری در پردازش‌های سنگین داده‌ای.",
          "کسب تسلط عملی در تکنولوژی‌های وب مدرن به عنوان مکمل مهارت‌های سمت سرور و کلاینت.",
        ],
      },
    ],
    education: [
      {
        institution: "دانشگاه غیرانتفاعی کارون – اهواز",
        date: "دی ۱۳۹۴ — خرداد ۱۳۹۸",
        degree: "کارشناسی مهندسی برق – گرایش الکترونیک | معدل: ۱۵ از ۲۰",
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
      pdf: "دانلود نسخه PDF",
    },
  },
};

/* ── SVG Icons ── */
const icons = {
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.4a2 2 0 0 1 1.72-2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.93-.94a2 2 0 0 1 2.11-.45c.9.34 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"></path></svg>',
  email: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 .12-6-2-6-6 0-.45.02-2 .18-3 1.44-1.66 2.23-3 .7-5-.6 0-1.83-.6-3 .44 0 0-.65 1-1.37 2.75C1.45 7.5 1 8 1 9c0 3.53 2.47 6 6 6l-.5 1.5c-.28.75-.43 1.5-.43 2.25 0 .5.23 1 .5 1.5l1.5 2.5c.5.75 1 1.25 1.5 1.75.75.5 1.5.75 2 .88 1 .13 2 .07 2.5-.25.5-.32.88-.88 1-1.5.12-.75.12-1.5 0-2.25L19 19c4-.5 5-2 5-5 0-1-.5-2-1.5-3 1-1 1.6-2 2-3 .5-1 .75-2 .75-3 0-.5-.25-1-.75-1h-1.5c-.5 1-1.5 1.5-2.5 1.5-.5 0-1-.25-1.5-.75l-1-1c-.5-.5-1-1-1.5-1.25-.5-.25-1-.25-1.5 0z"/><circle cx="12" cy="7" r="2"/><path d="M12 11v6"/><path d="M10 13h4"/></svg>',
  location: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-8 12-8 12S5 16 5 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
};

let currentLang = "en";
let activeSkillFilter = "all";

/* ── Toast Notification ── */
function showToast(message) {
  const toast = document.getElementById("toastNotice");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

/* ── Render Function ── */
function renderResume(lang = "en") {
  const data = resumeData[lang];
  const direction = lang === "fa" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  document.body.setAttribute("dir", direction);

  // Top Bar Brand Zone
  const brandMonogram = document.getElementById("brandMonogram");
  if (brandMonogram) brandMonogram.textContent = data.monogram;

  const brandTitle = document.getElementById("brandTitle");
  if (brandTitle) brandTitle.textContent = data.name;

  const brandBadge = document.getElementById("brandBadge");
  if (brandBadge) brandBadge.textContent = data.badge;

  // Nav Links
  const navSummary = document.getElementById("navSummary");
  if (navSummary) navSummary.textContent = data.nav.summary;

  const navSkills = document.getElementById("navSkills");
  if (navSkills) navSkills.textContent = data.nav.skills;

  const navExperience = document.getElementById("navExperience");
  if (navExperience) navExperience.textContent = data.nav.experience;

  const navEducation = document.getElementById("navEducation");
  if (navEducation) navEducation.textContent = data.nav.education;

  // PDF Button Text
  const pdfBtnText = document.querySelector(".pdf-btn-text");
  if (pdfBtnText) pdfBtnText.textContent = data.labels.pdf;

  // Hero Area
  const resumeName = document.getElementById("resumeName");
  if (resumeName) resumeName.textContent = data.name;

  const resumeRole = document.getElementById("resumeRole");
  if (resumeRole) resumeRole.textContent = data.role;

  const roleTagline = document.querySelector(".role-tagline");
  if (roleTagline) roleTagline.textContent = data.roleTagline;

  const statusText = document.getElementById("statusText");
  if (statusText) statusText.textContent = data.statusText;

  const avatarInitials = document.getElementById("avatarInitials");
  if (avatarInitials) avatarInitials.textContent = data.monogram;

  // Contacts Strip with Copy-to-Clipboard
  const contactStrip = document.getElementById("contactStrip");
  if (contactStrip) {
    contactStrip.innerHTML = "";
    data.contact.forEach((c) => {
      const item = document.createElement(c.href ? "a" : "span");
      item.className = "contact-pill";
      if (c.ltr) item.classList.add("ltr-inner");
      if (c.href) {
        item.href = c.href;
        if (c.href.startsWith("http")) {
          item.target = "_blank";
          item.rel = "noopener noreferrer";
        }
      }

      const iconSvg = icons[c.icon] || "";
      item.innerHTML = `${iconSvg}<span>${c.text}</span>`;

      // Copy capability for phone and email
      if (c.copyValue) {
        item.title = lang === "fa" ? "کلیک برای کپی" : "Click to copy";
        item.addEventListener("click", (e) => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(c.copyValue).then(() => {
              showToast(data.copyNotice);
            });
          }
        });
      }

      contactStrip.appendChild(item);
    });
  }

  // Quantitative Proof Metrics Strip
  const proofStrip = document.getElementById("proofStrip");
  if (proofStrip) {
    proofStrip.innerHTML = "";
    data.metrics.forEach((m) => {
      const card = document.createElement("div");
      card.className = "proof-card";
      card.innerHTML = `
        <div class="proof-value">${m.value}</div>
        <div class="proof-label">${m.label}</div>
        <div class="proof-sub">${m.sub}</div>
      `;
      proofStrip.appendChild(card);
    });
  }

  // Section Titles
  const labelSummary = document.getElementById("labelSummary");
  if (labelSummary) labelSummary.textContent = data.labels.summary;

  const labelSkills = document.getElementById("labelSkills");
  if (labelSkills) labelSkills.textContent = data.labels.skills;

  const labelExperience = document.getElementById("labelExperience");
  if (labelExperience) labelExperience.textContent = data.labels.experience;

  const labelEducation = document.getElementById("labelEducation");
  if (labelEducation) labelEducation.textContent = data.labels.education;

  // Summary
  const summaryText = document.getElementById("summaryText");
  if (summaryText) summaryText.innerHTML = data.summary;

  // Skill Filters Toolbar
  renderSkillFilters(lang);

  // Skills Grid
  renderSkillsGrid(lang);

  // Experience Timeline
  const jobsContainer = document.getElementById("jobsContainer");
  if (jobsContainer) {
    jobsContainer.innerHTML = "";
    data.experience.forEach((job) => {
      const jobEl = document.createElement("div");
      jobEl.className = "timeline-item";

      let bulletsHtml = "";
      job.bullets.forEach((b) => {
        bulletsHtml += `<li class="job-bullet-item">${b}</li>`;
      });

      jobEl.innerHTML = `
        <div class="timeline-node" aria-hidden="true"></div>
        <div class="job-card">
          <div class="job-head">
            <h3 class="job-company">${job.company}</h3>
            <span class="job-date-badge">${job.date}</span>
          </div>
          <div class="job-meta-row">
            <span class="job-role-text">${job.role}</span>
            <span aria-hidden="true">·</span>
            <span class="job-location-text">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-8 12-8 12S5 16 5 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${job.location}
            </span>
          </div>
          <ul class="job-bullets-list">${bulletsHtml}</ul>
        </div>
      `;
      jobsContainer.appendChild(jobEl);
    });
  }

  // Education
  const eduContainer = document.getElementById("educationContainer");
  if (eduContainer) {
    eduContainer.innerHTML = "";
    data.education.forEach((edu) => {
      const eduEl = document.createElement("div");
      eduEl.className = "edu-card";
      eduEl.innerHTML = `
        <div class="edu-header-row">
          <h3 class="edu-institution">${edu.institution}</h3>
          <span class="edu-date-badge">${edu.date}</span>
        </div>
        <p class="edu-degree-text">${edu.degree}</p>
      `;
      eduContainer.appendChild(eduEl);
    });
  }

  // Footer status
  const footerStatus = document.getElementById("footerStatus");
  if (footerStatus) footerStatus.textContent = data.footerStatus;

  // Language button active state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

/* ── Skill Filters Render ── */
function renderSkillFilters(lang) {
  const toolbar = document.getElementById("skillsFilterToolbar");
  if (!toolbar) return;
  toolbar.innerHTML = "";
  const data = resumeData[lang];

  data.skillFilters.forEach((filter) => {
    const btn = document.createElement("button");
    btn.className = `skill-filter-btn ${activeSkillFilter === filter.id ? "active" : ""}`;
    btn.textContent = filter.label;
    btn.type = "button";
    btn.addEventListener("click", () => {
      activeSkillFilter = filter.id;
      renderSkillsGrid(lang);
      toolbar.querySelectorAll(".skill-filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
    toolbar.appendChild(btn);
  });
}

/* ── Skills Grid Render with Filter Support ── */
function renderSkillsGrid(lang) {
  const skillsGrid = document.getElementById("skillsGrid");
  if (!skillsGrid) return;
  skillsGrid.innerHTML = "";
  const data = resumeData[lang];

  const filteredCategories = data.skills.filter((cat) => {
    if (activeSkillFilter === "all") return true;
    return cat.filterGroup === activeSkillFilter;
  });

  filteredCategories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "skill-category-card";

    let pillsHtml = "";
    cat.items.forEach((item) => {
      pillsHtml += `<span class="skill-pill">${item}</span>`;
    });

    card.innerHTML = `
      <div class="category-title">
        <span class="category-dot" aria-hidden="true"></span>
        <span>${cat.category}</span>
      </div>
      <div class="skill-pill-list">${pillsHtml}</div>
    `;
    skillsGrid.appendChild(card);
  });
}

/* ── Theme Logic ── */
function applyTheme(theme) {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // ignore
  }
}

(function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {
    // ignore
  }
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }
})();

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
  });
}

/* ── Language Switcher Listeners ── */
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    activeSkillFilter = "all";
    renderResume(currentLang);
  });
});

/* ── PDF Export via html2pdf.js ── */
const pdfBtn = document.getElementById("pdfBtn");
if (pdfBtn) {
  pdfBtn.addEventListener("click", () => {
    const resumeEl = document.getElementById("resumePage");
    if (!resumeEl) return;

    if (typeof html2pdf === "undefined") {
      window.print();
      return;
    }

    const data = resumeData[currentLang];
    const pdfTextEl = pdfBtn.querySelector(".pdf-btn-text");
    const originalText = pdfTextEl ? pdfTextEl.textContent : "Download PDF";
    if (pdfTextEl) pdfTextEl.textContent = currentLang === "fa" ? "در حال آماده‌سازی..." : "Generating...";

    resumeEl.classList.add("pdf-export");

    const opt = {
      margin:       [6, 6, 6, 6],
      filename:     `${data.name.replace(/\s+/g, "_")}_Senior_Android_Developer.pdf`,
      image:        { type: "jpeg", quality: 0.98 },
      html2canvas:  {
        scale: 2,
        useXHR: true,
        letterRendering: true,
        logging: false,
      },
      jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" },
    };

    setTimeout(() => {
      html2pdf()
        .set(opt)
        .from(resumeEl)
        .save()
        .then(() => {
          resumeEl.classList.remove("pdf-export");
          if (pdfTextEl) pdfTextEl.textContent = originalText;
        })
        .catch((err) => {
          console.error("PDF generation failed, falling back to print:", err);
          resumeEl.classList.remove("pdf-export");
          if (pdfTextEl) pdfTextEl.textContent = originalText;
          window.print();
        });
    }, 200);
  });
}

/* ── Initial Render ── */
renderResume(currentLang);
