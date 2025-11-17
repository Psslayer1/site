document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "en"; // default language

  async function loadLang(lang) {
    const dict = await fetch(`./lang/${lang}.json`).then(res => res.json());

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    const btn = document.getElementById("langToggle");
    if (btn) btn.textContent = lang === "en" ? "AR" : "EN";

    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.style.fontFamily = lang === "ar" ? "'aejapan', sans-serif" : "'neue hass', sans-serif";

    currentLang = lang;
  }

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "ar" : "en";
      loadLang(nextLang);
    });
  }

  loadLang(currentLang);
});
