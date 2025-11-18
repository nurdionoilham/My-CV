document.addEventListener("DOMContentLoaded", () => {

    const langBtn = document.getElementById("lang-toggle");
    const themeBtn = document.getElementById("theme-toggle");

    // Default Bahasa
    let currentLang = "en"; // Bisa diubah ke "id" kalau mau default Indonesia

    // Default Theme
    let currentTheme = localStorage.getItem("theme") || "light"; // Default light, atau dari localStorage

    function applyLanguage(lang) {
        if (lang === "en") {
            langBtn.textContent = "EN";

            document.getElementById("hero-title").innerHTML = "My work<br>is your best solution";
            document.getElementById("hero-desc").innerHTML = 'FIRST ORDER <span class="highlight">50% DISCOUNT</span>';
            document.getElementById("contact-btn").textContent = "Contact";
            document.getElementById("about-btn").textContent = "About me";
            document.getElementById("award-title").textContent = "BEST DESIGNER";
            document.getElementById("award-desc").innerHTML = "UX and UI<br>2020";

            document.querySelectorAll('.menu a')[0].textContent = "Home";
            document.querySelectorAll('.menu a')[1].textContent = "About me";
            document.querySelectorAll('.menu a')[2].textContent = "Gallery";

        } else {
            langBtn.textContent = "ID";

            document.getElementById("hero-title").innerHTML = "Karya saya<br>adalah solusi terbaik Anda";
            document.getElementById("hero-desc").innerHTML = 'PESAN PERTAMA <span class="highlight">DISKON 50%</span>';
            document.getElementById("contact-btn").textContent = "Kontak";
            document.getElementById("about-btn").textContent = "Tentang saya";
            document.getElementById("award-title").textContent = "DESAINER TERBAIK";
            document.getElementById("award-desc").innerHTML = "UX dan UI<br>2020";

            document.querySelectorAll('.menu a')[0].textContent = "Beranda";
            document.querySelectorAll('.menu a')[1].textContent = "Tentang saya";
            document.querySelectorAll('.menu a')[2].textContent = "Galeri";
        }
    }

    function applyTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("manual-dark");
            document.documentElement.classList.add("manual-dark");
            document.body.classList.remove("manual-light");
            document.documentElement.classList.remove("manual-light");
            themeBtn.textContent = "🌙"; // Moon for dark mode
        } else {
            document.body.classList.add("manual-light");
            document.documentElement.classList.add("manual-light");
            document.body.classList.remove("manual-dark");
            document.documentElement.classList.remove("manual-dark");
            themeBtn.textContent = "☀️"; // Sun for light mode
        }
        localStorage.setItem("theme", theme);
    }

    // Event Toggle Language
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "id" : "en";
        applyLanguage(currentLang);
    });

    // Event Toggle Theme
    themeBtn.addEventListener("click", () => {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(currentTheme);
    });

    // Jalankan default bahasa dan theme
    applyLanguage(currentLang);
    applyTheme(currentTheme);
});
