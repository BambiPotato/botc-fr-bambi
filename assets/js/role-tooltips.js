(() => {
  "use strict";

  const TOOLTIP_META_SELECTOR =
    'meta[name="botc-tooltip-description"]';

  const TOOLTIP_DELAY = 250;
  const TOOLTIP_OFFSET = 16;
  const SCREEN_MARGIN = 12;

  const descriptionCache = new Map();
  let activeLink = null;
  let showTimer = null;
  let requestNumber = 0;
  let pointerX = 0;
  let pointerY = 0;

  const tooltip = document.createElement("div");
  tooltip.className = "botc-role-tooltip";
  tooltip.setAttribute("role", "tooltip");
  tooltip.setAttribute("aria-hidden", "true");

  document.body.appendChild(tooltip);

  function tooltipsAreAvailable() {
    return (
      window.matchMedia("(hover: hover)").matches &&
      window.matchMedia("(pointer: fine)").matches
    );
  }

  function getEligibleLink(element) {
    const link = element.closest("a[href]");

    if (!link) {
      return null;
    }

    const rawHref = link.getAttribute("href");

    if (
      !rawHref ||
      rawHref.startsWith("#") ||
      rawHref.startsWith("mailto:") ||
      rawHref.startsWith("tel:") ||
      rawHref.startsWith("javascript:")
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

    if (url.pathname === window.location.pathname && !url.search) {
      return null;
    }

    return {
      link,
      url
    };
  }

  function hideTooltip() {
    clearTimeout(showTimer);
    showTimer = null;
    activeLink = null;
    requestNumber += 1;

    tooltip.classList.remove("is-visible");
    tooltip.setAttribute("aria-hidden", "true");
  }

  function positionTooltip() {
    if (!tooltip.classList.contains("is-visible")) {
      return;
    }

    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    let left = pointerX + TOOLTIP_OFFSET;
    let top = pointerY + TOOLTIP_OFFSET;

    if (left + tooltipWidth > window.innerWidth - SCREEN_MARGIN) {
      left = pointerX - tooltipWidth - TOOLTIP_OFFSET;
    }

    if (top + tooltipHeight > window.innerHeight - SCREEN_MARGIN) {
      top = pointerY - tooltipHeight - TOOLTIP_OFFSET;
    }

    left = Math.max(
      SCREEN_MARGIN,
      Math.min(left, window.innerWidth - tooltipWidth - SCREEN_MARGIN)
    );

    top = Math.max(
      SCREEN_MARGIN,
      Math.min(top, window.innerHeight - tooltipHeight - SCREEN_MARGIN)
    );

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }

  function displayTooltip(description, link) {
    if (!description || activeLink !== link) {
      return;
    }

    tooltip.textContent = description;
    tooltip.classList.add("is-visible");
    tooltip.setAttribute("aria-hidden", "false");

    positionTooltip();
  }

  async function getDescription(url) {
    const cacheKey = url.href;

    if (descriptionCache.has(cacheKey)) {
      return descriptionCache.get(cacheKey);
    }

    try {
      const response = await fetch(cacheKey, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          Accept: "text/html"
        }
      });

      if (!response.ok) {
        descriptionCache.set(cacheKey, "");
        return "";
      }

      const html = await response.text();
      const documentParser = new DOMParser();
      const fetchedDocument = documentParser.parseFromString(
        html,
        "text/html"
      );

      const descriptionMeta =
        fetchedDocument.querySelector(TOOLTIP_META_SELECTOR);

      const description = descriptionMeta
        ? descriptionMeta.getAttribute("content")?.trim() || ""
        : "";

      descriptionCache.set(cacheKey, description);

      return description;
    } catch {
      descriptionCache.set(cacheKey, "");
      return "";
    }
  }

  function prepareTooltip(link, url) {
    clearTimeout(showTimer);

    activeLink = link;
    const currentRequest = ++requestNumber;

    showTimer = window.setTimeout(async () => {
      const description = await getDescription(url);

      if (
        currentRequest !== requestNumber ||
        activeLink !== link
      ) {
        return;
      }

      if (description) {
        displayTooltip(description, link);
      }
    }, TOOLTIP_DELAY);
  }

  document.addEventListener("pointerover", event => {
    if (!tooltipsAreAvailable()) {
      return;
    }

    const result = getEligibleLink(event.target);

    if (!result) {
      return;
    }

    if (
      event.relatedTarget &&
      result.link.contains(event.relatedTarget)
    ) {
      return;
    }

    prepareTooltip(result.link, result.url);
  });

  document.addEventListener("pointerout", event => {
    if (!activeLink) {
      return;
    }

    const link = event.target.closest("a[href]");

    if (link !== activeLink) {
      return;
    }

    if (
      event.relatedTarget &&
      link.contains(event.relatedTarget)
    ) {
      return;
    }

    hideTooltip();
  });

  document.addEventListener("pointermove", event => {
    pointerX = event.clientX;
    pointerY = event.clientY;

    positionTooltip();
  });

  document.addEventListener("scroll", hideTooltip, {
    passive: true
  });

  window.addEventListener("resize", hideTooltip);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      hideTooltip();
    }
  });
})();
