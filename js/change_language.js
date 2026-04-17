function applyLanguage(lang) {
    const enElements = document.querySelectorAll(".en");
    const deElements = document.querySelectorAll(".de");

    if (lang === "de") {
        enElements.forEach(el => el.hidden = true);
        deElements.forEach(el => el.hidden = false);
    } else {
        enElements.forEach(el => el.hidden = false);
        deElements.forEach(el => el.hidden = true);
    }

    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);
}

function setLanguage(lang) {
    localStorage.setItem("language", lang);

    if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: "set-language", language: lang }, "*");
    } else {
        applyLanguage(lang);
    }
}

function getStartLanguage() {
    const savedLanguage = localStorage.getItem("language");
    const browserLanguage = navigator.language.startsWith("de") ? "de" : "en";
    return savedLanguage || browserLanguage;
}

window.addEventListener("DOMContentLoaded", function () {
    applyLanguage(getStartLanguage());
});

window.addEventListener("message", function (event) {
    if (event.data && event.data.type === "set-language") {
        applyLanguage(event.data.language);
    }
});