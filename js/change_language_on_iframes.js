window.addEventListener("message", function (event) {
        if (event.data && event.data.type === "set-language") {
            const lang = event.data.language;
            localStorage.setItem("language", lang);
            document.documentElement.lang = lang;

            const frames = document.querySelectorAll("iframe");
            frames.forEach(frame => {
                if (frame.contentWindow) {
                    frame.contentWindow.postMessage({ type: "set-language", language: lang }, "*");
                }
            });
        }
    });