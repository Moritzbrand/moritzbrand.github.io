document.querySelectorAll(".copy-text").forEach(span => {
    span.addEventListener("click", async () => {
        const lang = document.documentElement.lang || localStorage.getItem("language") || "en";

        const copiedMessage = lang === "de" ? "Kopiert!" : "Copied!";

        const text =
            span.dataset[`copy${lang.charAt(0).toUpperCase() + lang.slice(1)}`] ||
            span.dataset.copy ||
            span.innerText.trim();

        try {
            await navigator.clipboard.writeText(text);

            const oldHtml = span.innerHTML;
            span.textContent = copiedMessage;

            setTimeout(() => {
                span.innerHTML = oldHtml;
            }, 1000);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    });
});