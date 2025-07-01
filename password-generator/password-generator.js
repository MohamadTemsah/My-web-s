document.addEventListener('DOMContentLoaded', () => {
    // --- كل الأكواد الآن تعمل بأمان بعد تحميل الصفحة بالكامل ---
    console.log("✅ Final Correct Script Loaded");

    // --- 1. تشغيل الخلفية المتحركة (مرة واحدة فقط هنا) ---
    particlesJS("particles-js", {
        "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.3, "width": 1 }, "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false } },
        "interactivity": { "detect_on": "window", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } } },
        "retina_detect": true
    });

    // --- 2. الحصول على عناصر الصفحة ---
    const passwordDisplay = document.getElementById('passwordDisplay');
    const generateButton = document.getElementById('generateButton');
    const copyButton = document.getElementById('copyButton');
    const includeNumbersCheckbox = document.getElementById('includeNumbers');
    const includeSymbolsCheckbox = document.getElementById('includeSymbols');
    const eyes = document.querySelector('.character-eyes');
    const pupils = document.querySelectorAll('.pupil');
    const generatorWrapper = document.querySelector('.generator-wrapper');

    // --- 3. تعريف الأحرف ---
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|";

    // --- 4. سلوك العيون بناءً على حجم الشاشة ---
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            pupils.forEach(pupil => {
                const eye = pupil.parentElement;
                const rect = eye.getBoundingClientRect();
                const eyeX = rect.left + rect.width / 2;
                const eyeY = rect.top + rect.height / 2;
                const deltaX = e.clientX - eyeX;
                const deltaY = e.clientY - eyeY;
                const angle = Math.atan2(deltaY, deltaX);
                const radius = 15;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                pupil.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
            });
        });
    } else {
        pupils.forEach(pupil => {
            pupil.style.transform = `translate(-50%, -50%) translateY(12px)`;
        });
    }

    // --- 5. دالة إنشاء كلمة المرور ---
    function generatePassword() {
        const passwordLength = 16;
        let charPool = upperCaseChars + lowerCaseChars;
        let password = "";
        if (includeNumbersCheckbox.checked) { charPool += numberChars; }
        if (includeSymbolsCheckbox.checked) { charPool += symbolChars; }
        if (charPool.length === 0) {
            passwordDisplay.value = "Please select options.";
            return;
        }
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            password += charPool[randomIndex];
        }
        passwordDisplay.value = password;
    }

    // --- 6. ربط الأحداث بالأزرار ---
    generateButton.addEventListener('click', () => {
        generatePassword();
        if (eyes) {
            eyes.classList.add('blinking');
        }
    });

    const container = document.querySelector('.container');
    if (container) {
        container.addEventListener('mouseleave', () => {
            if (eyes) {
                eyes.classList.remove('blinking');
            }
        });
        container.addEventListener('touchstart', () => {
            if (eyes) {
                eyes.classList.remove('blinking');
            }
        }, { passive: true });
    }

    copyButton.addEventListener('click', () => {
        if (passwordDisplay.value) {
            navigator.clipboard.writeText(passwordDisplay.value)
                .then(() => {
                    copyButton.innerHTML = "Copied!";
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="fa fa-clipboard"></i>';
                    }, 1500);
                });
        }
    });
});