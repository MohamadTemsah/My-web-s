// === Final script.js ===
window.scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", function () {
  /* -------- أزرار أخرى -------- */
  const scrollBtn = document.getElementById("scrollBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    });
  }

  /* -------- زر التبديل يختفي عند النزول -------- */
  const themeSwitcher = document.querySelector(".theme-switcher");
  let lastY = window.scrollY;

  if (themeSwitcher) {
    themeSwitcher.style.transition = "opacity 0.3s ease"; // تأكيد انتقال سلس

    window.addEventListener("scroll", () => {
      if (window.scrollY > lastY) {
        // المستخدم ينزل ↓
        themeSwitcher.style.opacity = "0";
        themeSwitcher.style.pointerEvents = "none";
      } else {
        // المستخدم يصعد ↑
        themeSwitcher.style.opacity = "1";
        themeSwitcher.style.pointerEvents = "auto";
      }
      lastY = window.scrollY;
    });
  }

  /* -------- منطق الثيم والأيقونات -------- */
  const imageElements = {
    logo: document.getElementById("logo"),
    emailIcon: document.getElementById("emailIcon"),
    phoneIcon: document.getElementById("phoneIcon"),
  };

  function applyTheme(theme) {
    document.documentElement.className = `${theme}-mode`;
    localStorage.setItem("theme", theme);
    const isLight = theme === "light";
    if (imageElements.logo)
      imageElements.logo.src = isLight
        ? "assets/svg/logo-light.svg"
        : "assets/svg/logo-dark.svg";
    if (imageElements.emailIcon)
      imageElements.emailIcon.src = isLight
        ? "assets/svg/email-light.svg"
        : "assets/svg/email-dark.svg";
    if (imageElements.phoneIcon)
      imageElements.phoneIcon.src = isLight
        ? "assets/svg/phone-light.svg"
        : "assets/svg/phone-dark.svg";
  }

  const themeToggle = document.getElementById("theme-toggle-checkbox");
  if (themeToggle) {
    themeToggle.checked = document.documentElement.classList.contains(
      "light-mode"
    );
    themeToggle.addEventListener("change", function () {
      applyTheme(this.checked ? "light" : "dark");
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