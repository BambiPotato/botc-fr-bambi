(() => {
  "use strict";

  const SHOW_DELAY = 180;
  const OFFSET = 16;
  const SCREEN_MARGIN = 12;

  const cache = new Map();

  let activeLink = null;
  let showTimer = null;
  let requestId = 0;
  let mouseX = 0;
  let mouseY = 0;

  const tooltip = document.createElement("div");
  tooltip.className = "botc-role-tooltip";
  tooltip.setAttribute("role", "tooltip");
  tooltip.setAttribute("aria-hidden", "true");
  document.body.appendChild(tooltip);

  function isDesktopPointer() {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function getInternalPageUrl(link) {
    if (!link) return null;
    const href = link.getAttribute("href");

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:")
    ) {
      return null;
    }

    let url;
    try {
      url = new URL(link.href, window.location.href);
    } catch {
      return null;
    }

    if (url.origin !== window.location.origin) {
      return null;
    }

    url.hash = "";
    return url;
  }

  function hideTooltip() {
    window.clearTimeout(showTimer);
    showTimer = null;
    activeLink = null;
    requestId += 1;

    tooltip.classList.remove("is-visible");
    tooltip.setAttribute("aria-hidden", "true");
    tooltip.textContent = "";
  }

  function positionTooltip() {
    if (!tooltip.classList.contains("is-visible")) {
      return;
    }

    const width = tooltip.offsetWidth;
    const height = tooltip.offsetHeight;

    let left = mouseX + OFFSET;
    let top = mouseY + OFFSET;

    if (left + width > window.innerWidth - SCREEN_MARGIN) {
      left = mouseX - width - OFFSET;
    }

    if (top + height > window.innerHeight - SCREEN_MARGIN) {
      top = mouseY - height - OFFSET;
    }

    left = Math.max(
      SCREEN_MARGIN,
      Math.min(left, window.innerWidth - width - SCREEN_MARGIN)
    );

    top = Math.max(
      SCREEN_MARGIN,
      Math.min(top, window.innerHeight - height - SCREEN_MARGIN)
    );

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }

  function showTooltip(description, link) {
    if (!description || activeLink !== link) {
      return;
    }

    tooltip.textContent = description;
    tooltip.classList.add("is-visible");
    tooltip.setAttribute("aria-hidden", "false");

    positionTooltip();
  }

  async function loadDescription(url) {
    const key = url.href;

    if (cache.has(key)) {
      return cache.get(key);
    }

    try {
      const response = await fetch(key, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          Accept: "text/html"
        }
      });

      if (!response.ok) {
        cache.set(key, "");
        return "";
      }

      const html = await response.text();
      const parsedPage = new DOMParser().parseFromString(html, "text/html");

      const dedicatedMeta = parsedPage.querySelector(
        'meta[name="botc-tooltip-description"]'
      );

      const openGraphMeta = parsedPage.querySelector(
        'meta[property="og:description"]'
      );

      const meta = dedicatedMeta || openGraphMeta;

      const description = meta
        ? (meta.getAttribute("content") || "").trim()
        : "";

      cache.set(key, description);
      return description;
    } catch {
      cache.set(key, "");
      return "";
    }
  }

  async function prepareTooltip(link, url) {
    window.clearTimeout(showTimer);

    activeLink = link;
    const currentRequest = ++requestId;

    showTimer = window.setTimeout(async () => {
      const description = await loadDescription(url);

      if (
        currentRequest !== requestId ||
        activeLink !== link ||
        !description
      ) {
        return;
      }

      showTooltip(description, link);
    }, SHOW_DELAY);
  }

  function setupEvents() {
    if (!isDesktopPointer()) {
      return;
    }

    document.addEventListener("mouseover", event => {
      const link = event.target.closest("a[href]");
      if (!link) return;

      const url = getInternalPageUrl(link);
      if (url && activeLink !== link) {
        prepareTooltip(link, url);
      }
    });

    document.addEventListener("mouseout", event => {
      const link = event.target.closest("a[href]");
      if (link && activeLink === link) {
        hideTooltip();
      }
    });
  }

  document.addEventListener("mousemove", event => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    positionTooltip();
  });

  document.addEventListener("scroll", hideTooltip, { passive: true });
  window.addEventListener("resize", hideTooltip);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupEvents);
  } else {
    setupEvents();
  }
})();
