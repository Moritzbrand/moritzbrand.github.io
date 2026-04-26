function getCurrentLanguage() {
    const saved = localStorage.getItem("language");
    if (saved === "de" || saved === "en") return saved;
    return navigator.language.startsWith("de") ? "de" : "en";
}

function normalizeI18n(value) {
    if (typeof value === "string") {
        return { en: value, de: value };
    }

    return {
        en: value?.en ?? "",
        de: value?.de ?? value?.en ?? ""
    };
}

function createLanguageSpans(value) {
    const lang = getCurrentLanguage();
    const text = normalizeI18n(value);

    const enHidden = lang === "de" ? " hidden" : "";
    const deHidden = lang === "en" ? " hidden" : "";

    return `
        <span class="en"${enHidden}>${text.en}</span>
        <span class="de"${deHidden}>${text.de}</span>
    `;
}

function setI18nHTML(element, value) {
    if (!element) return;
    element.innerHTML = createLanguageSpans(value);
}

function createLink(url, label, icon = "↗") {
    if (!url) return null;

    const a = document.createElement("a");
    a.className = "project-link";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `${icon} ${createLanguageSpans(label)}`;
    return a;
}

function getMediaTypeFromPath(path = "") {
    const lower = path.toLowerCase();

    if (
        lower.endsWith(".mp4") ||
        lower.endsWith(".webm") ||
        lower.endsWith(".ogg")
    ) {
        return "video";
    }

    if (lower.endsWith(".svg")) {
        return "icon";
    }

    return "image";
}

function normalizePanelMedia(panel) {
    if (panel.media?.src) {
        return {
            type: panel.media.type || getMediaTypeFromPath(panel.media.src),
            src: panel.media.src,
            alt: panel.media.alt || "",
            poster: panel.media.poster || "",
            controls: panel.media.controls ?? true,
            autoplay: panel.media.autoplay ?? false,
            muted: panel.media.muted ?? false,
            loop: panel.media.loop ?? false,
            fit: panel.media.fit || panel.fit || ""
        };
    }

    if (panel.image && panel.image !== "No Image") {
        return {
            type: getMediaTypeFromPath(panel.image),
            src: panel.image,
            alt: panel.alt || "",
            fit: panel.fit || ""
        };
    }

    return null;
}

function normalizePanelContent(panel) {
    if (Array.isArray(panel.content)) {
        return panel.content;
    }

    const blocks = [];

    if (panel.title) {
        blocks.push({
            type: "heading",
            text: panel.title
        });
    }

    if (panel.description) {
        blocks.push({
            type: "paragraph",
            text: panel.description
        });
    }

    return blocks;
}

function createPanelMedia(media) {
    if (!media?.src) return null;

    if (media.type === "video") {
        const video = document.createElement("video");
        video.src = media.src;

        if (media.poster) video.poster = media.poster;
        if (media.controls) video.controls = true;
        if (media.autoplay) video.autoplay = true;
        if (media.muted) video.muted = true;
        if (media.loop) video.loop = true;

        video.playsInline = true;
        return video;
    }

    if (media.type === "icon") {
        const icon = document.createElement("span");
        icon.className = "panel-icon";
        icon.style.setProperty("--icon-url", `url("${media.src}")`);
        icon.setAttribute("role", "img");
        icon.setAttribute("aria-label", media.alt || "Icon");
        return icon;
    }

    const img = document.createElement("img");
    img.src = media.src;
    img.alt = media.alt || "";
    return img;
}

function createPanelBlock(block) {
    let element;

    switch (block.type) {
        case "heading":
            element = document.createElement("h4");
            element.className = "panel-block panel-heading";
            setI18nHTML(element, block.text);
            return element;

        case "subheading":
            element = document.createElement("h5");
            element.className = "panel-block panel-subheading";
            setI18nHTML(element, block.text);
            return element;

        case "paragraph":
            element = document.createElement("p");
            element.className = "panel-block panel-paragraph";
            setI18nHTML(element, block.text);
            return element;

        case "list":
            element = document.createElement("ul");
            element.className = "panel-block panel-list";

            (block.items || []).forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = createLanguageSpans(item);
                element.appendChild(li);
            });

            return element;

        default:
            return null;
    }
}

function getPanelLayout(panel, hasMedia, hasContent) {
    if (panel.layout) return panel.layout;

    if (hasMedia && hasContent) return "media-text";
    if (hasContent) return "text-only";
    if (hasMedia) return "media-only";

    return "text-only";
}

function applyPanelLayoutClass(panelNode, layout) {
    panelNode.classList.remove(
        "is-media-text",
        "is-text-media",
        "is-text-only",
        "is-media-only"
    );

    if (layout === "text-media") {
        panelNode.classList.add("is-text-media");
    } else if (layout === "text-only") {
        panelNode.classList.add("is-text-only");
    } else if (layout === "media-only") {
        panelNode.classList.add("is-media-only");
    } else {
        panelNode.classList.add("is-media-text");
    }
}

function renderProjectsPage(data) {
    const root = document.getElementById("projects-root");
    const languageTemplate = document.getElementById("language-template");
    const projectTemplate = document.getElementById("project-template");
    const panelTemplate = document.getElementById("panel-template");

    if (!root || !languageTemplate || !projectTemplate || !panelTemplate) return;

    root.innerHTML = "";

    data.forEach(languageEntry => {
        const languageNode = languageTemplate.content.firstElementChild.cloneNode(true);

        setI18nHTML(languageNode.querySelector(".language-title"), languageEntry.language);
        setI18nHTML(languageNode.querySelector(".language-experience"), languageEntry.experience);

        const projectList = languageNode.querySelector(".project-list");

        languageEntry.projects.forEach(project => {
            const projectNode = projectTemplate.content.firstElementChild.cloneNode(true);

            setI18nHTML(projectNode.querySelector(".project-title"), project.title);
            setI18nHTML(projectNode.querySelector(".project-hint"), project.hint);
            setI18nHTML(projectNode.querySelector(".project-description"), project.description);

            const panelContainer = projectNode.querySelector(".project-panels");

            (project.panels || []).forEach(panel => {
                const panelNode = panelTemplate.content.firstElementChild.cloneNode(true);
                const mediaContainer = panelNode.querySelector(".panel-media");
                const contentContainer = panelNode.querySelector(".panel-content");

                const media = normalizePanelMedia(panel);
                const contentBlocks = normalizePanelContent(panel);

                const mediaElement = createPanelMedia(media);
                const hasMedia = !!mediaElement;
                const hasContent = contentBlocks.length > 0;

                const layout = getPanelLayout(panel, hasMedia, hasContent);
                applyPanelLayoutClass(panelNode, layout);

                if (hasMedia) {
                    if (media.fit === "contain" || media.type === "icon") {
                        mediaContainer.classList.add("is-contain");
                    }

                    if (media.type === "icon") {
                        mediaContainer.classList.add("is-icon");
                    }

                    mediaContainer.appendChild(mediaElement);
                } else {
                    mediaContainer.remove();
                }

                if (hasContent) {
                    contentBlocks.forEach(block => {
                        const blockElement = createPanelBlock(block);
                        if (blockElement) contentContainer.appendChild(blockElement);
                    });
                } else {
                    contentContainer.remove();
                }

                if (hasMedia || hasContent) {
                    panelContainer.appendChild(panelNode);
                }
            });

            const linkContainer = projectNode.querySelector(".project-links");

            const githubLink = createLink(project.links?.github, {
                en: "GitHub",
                de: "GitHub"
            });

            const projectLink = createLink(project.links?.project, {
                en: "Download project",
                de: "Projekt herunterladen"
            }, "↓");

            const executableLink = createLink(project.links?.executable, {
                en: "Download executable",
                de: "Executable herunterladen"
            }, "↓");

            [githubLink, projectLink, executableLink]
                .filter(Boolean)
                .forEach(link => linkContainer.appendChild(link));

            projectList.appendChild(projectNode);
        });

        root.appendChild(languageNode);
    });
}