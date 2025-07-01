particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // زدنا عددها قليلاً
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#c5f0f2" }, // لون الجسيمات (أزرق فاتح جداً)
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2.5,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#74c9df", // لون الخطوط (أزرق داكن وهادئ)
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2, // حركة أبطأ وأكثر هدوءاً
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "grab" }, // غيرنا التأثير إلى "grab" الأنيق
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_opacity: 0.5 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});