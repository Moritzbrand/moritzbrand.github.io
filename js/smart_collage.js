function getMediaElement(item) {
    return item.querySelector("img, video");
}

function getMediaDimensions(mediaElement) {
    if (!mediaElement) {
        return {
            width: 1,
            height: 1
        };
    }

    if (mediaElement.tagName.toLowerCase() === "video") {
        return {
            width: mediaElement.videoWidth || 16,
            height: mediaElement.videoHeight || 9
        };
    }

    return {
        width: mediaElement.naturalWidth || 1,
        height: mediaElement.naturalHeight || 1
    };
}

function getOrientation(width, height) {
    const ratio = width / height;

    if (ratio >= 1.22) {
        return "wide";
    }

    if (ratio <= 0.82) {
        return "tall";
    }

    return "square";
}

function getDenseSize(orientation, isFeatured) {
    if (isFeatured) {
        return {
            columns: 8,
            rows: 42
        };
    }

    if (orientation === "wide") {
        return {
            columns: 6,
            rows: 24
        };
    }

    if (orientation === "tall") {
        return {
            columns: 3,
            rows: 38
        };
    }

    return {
        columns: 4,
        rows: 28
    };
}

function prepareCollageFrame(item) {
    const mediaElement = getMediaElement(item);

    if (!mediaElement) {
        return;
    }

    if (mediaElement.parentElement.classList.contains("collage-frame")) {
        return;
    }

    const frame = document.createElement("div");
    frame.className = "collage-frame";

    mediaElement.parentElement.insertBefore(frame, mediaElement);
    frame.appendChild(mediaElement);
}

function prepareCaption(item) {
    const caption = item.querySelector("figcaption");

    if (!caption) {
        return;
    }

    caption.classList.add("collage-caption");
}

function applyItemLayout(item, index, preset) {
    const mediaElement = getMediaElement(item);
    const dimensions = getMediaDimensions(mediaElement);
    const orientation = getOrientation(dimensions.width, dimensions.height);

    item.classList.remove("is-wide", "is-tall", "is-square");
    item.classList.add(`is-${orientation}`);

    const isFeatured = item.classList.contains("is-featured");
    const denseSize = getDenseSize(orientation, isFeatured);

    item.style.setProperty("--collage-col-span", denseSize.columns);
    item.style.setProperty("--collage-row-span", denseSize.rows);
}

function chooseFeaturedItem(gallery) {
    if (gallery.querySelector(".collage-item.is-featured")) {
        return;
    }

    const items = Array.from(gallery.querySelectorAll(".collage-item"));
    const firstWideItem = items.find(item => item.classList.contains("is-wide"));

    if (firstWideItem) {
        firstWideItem.classList.add("is-featured");
        return;
    }

    if (items[0]) {
        items[0].classList.add("is-featured");
    }
}

function loadMediaThenApply(item, index, gallery, preset) {
    const mediaElement = getMediaElement(item);

    if (!mediaElement) {
        return;
    }

    const apply = () => {
        applyItemLayout(item, index, preset);
        chooseFeaturedItem(gallery);

        Array.from(gallery.querySelectorAll(".collage-item")).forEach((galleryItem, galleryIndex) => {
            applyItemLayout(galleryItem, galleryIndex, preset);
        });
    };

    if (mediaElement.tagName.toLowerCase() === "video") {
        if (mediaElement.readyState > 0) {
            apply();
        } else {
            mediaElement.addEventListener("loadedmetadata", apply, { once: true });
        }

        return;
    }

    if (mediaElement.complete && mediaElement.naturalWidth > 0) {
        apply();
    } else {
        mediaElement.addEventListener("load", apply, { once: true });
    }
}

function enhanceSmartCollage(gallery) {
    const preset = gallery.dataset.collagePreset || "hero-wide";
    const items = Array.from(gallery.querySelectorAll(".collage-item"));

    items.forEach((item, index) => {
        prepareCollageFrame(item);
        prepareCaption(item);
        loadMediaThenApply(item, index, gallery, preset);
    });
}

function enhanceSmartCollages() {
    document.querySelectorAll(".smart-collage").forEach(enhanceSmartCollage);
}

document.addEventListener("DOMContentLoaded", enhanceSmartCollages);