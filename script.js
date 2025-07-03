// === Final script.js ===
window.scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Personal site script loaded correctly.");

    // --- 1. تعريف العناصر الأساسية ---
    const scrollBtn = document.getElementById("scrollBtn");
    const themeToggle = document.getElementById("theme-toggle-checkbox");
    const imageElements = {
        logo: document.getElementById("logo"),
        emailIcon: document.getElementById("emailIcon"),
        phoneIcon: document.getElementById("phoneIcon")
        // يمكنك إضافة أي أيقونات أخرى هنا
    };

    // --- 2. منطق زر الصعود للأعلى ---
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add("visible");
            } else {
                scrollBtn.classList.remove("visible");
            }
        });
    }
    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- 3. الدالة الرئيسية لتطبيق الثيم وتبديل الصور ---
    function applyTheme(theme) {
        document.documentElement.className = theme + '-mode';
        localStorage.setItem('theme', theme);

        const isLight = theme === 'light';

        // تبديل كل الصور لتتوافق مع الثيم
        if (imageElements.logo) imageElements.logo.src = isLight ? './assets/svg/logo-light.svg' : './assets/svg/logo-Dark.svg';
        if (imageElements.emailIcon) imageElements.emailIcon.src = isLight ? './assets/svg/email-light.svg' : './assets/svg/email-dark.svg';
        if (imageElements.phoneIcon) imageElements.phoneIcon.src = isLight ? './assets/svg/phone-light.svg' : './assets/svg/phone-dark.svg';
    }

    // --- 4. منطق زر تبديل الوضع ---
    if (themeToggle) {
        // عند تحميل الصفحة، تأكد من أن وضع الزر يطابق الثيم المحفوظ
        themeToggle.checked = document.documentElement.classList.contains('light-mode');

        // عند تغيير حالة الزر، قم بتطبيق الثيم الجديد
        themeToggle.addEventListener("change", function () {
            const newTheme = this.checked ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

  /* -------- Vanta background -------- */
  let vantaEffect = null;
  const initVanta = () => {
    if (vantaEffect) vantaEffect.destroy();
    vantaEffect = VANTA.NET({
      el: "#vanta-container",
      mouseControls: true,
      touchControls: true,
      scale: 1,
      color: document.documentElement.classList.contains("light-mode")
        ? 0x007b8a
        : 0x00adb5,
      backgroundColor: document.documentElement.classList.contains("light-mode")
        ? 0xf4f4f4
        : 0x222831,
      points: 10,
      maxDistance: 25,
    });
  };
  initVanta(localStorage.getItem("theme") || "dark");
});
