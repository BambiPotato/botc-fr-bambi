(() => {
  "use strict";

  const SHOW_DELAY = 180;
  const GAP = 10;
  const SCREEN_MARGIN = 12;

  const descriptionCache = new Map();

  let activeLink = null;
  let showTimer = null;
  let requestId = 0;

  /*
   * Le style est placé ici pour que l’infobulle ait toujours
   * exactement la même apparence, sans conflit avec le reste du wiki.
   */
  const style = document.createElement("style");

  style.textContent = `
    .botc-role-tooltip {
      position: fixed !important;
      top: var(--botc-tooltip-top, 0px) !important;
      left: var(--botc-tooltip-left, 0px) !important;
      z-index: 999999 !important;

      box-sizing: border-box !important;
      width: max-content !important;
      max-width: min(360px, calc(100vw - 24px)) !important;
      padding: 13px 17px !important;

      background: #f7f2e8 !important;
      border: 1px solid #b99a82 !important;
      border-radius: 9px !important;

      color: #5a2929 !important;
      font-family: Georgia, "Times New Roman", serif !important;
      font-size: 17px !important;
      font-weight: 400 !important;
      line-height: 1.45 !important;
      text-align: center !important;

      box-shadow:
        0 8px 22px rgba(65, 42, 31, 0.18),
        0 2px 5px rgba(65, 42, 31, 0.10) !important;

      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;

      transform: translateY(3px) !important;
      transition:
        opacity 0.12s ease,
        transform 0.12s ease,
        visibility 0.12s ease !important;
    }

    .botc-role-tooltip.is-visible {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateY(0) !important;
    }

    @media (hover: none), (pointer: coarse) {
      .botc-role-tooltip {
        display: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  const tooltip = document.createElement("div");

  tooltip.className = "botc-role-tooltip";
  tooltip.setAttribute("role", "tooltip");
  tooltip.setAttribute("aria-hidden", "true");

  document.body.appendChild(tooltip);

  function supportsHover() {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function getInternalUrl(link) {
    if (!link) {
      return null;
    }

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
      url = new URL(href, window.location.href);
    } catch {
      return null;
    }

    if (url.origin !== window.location.origin) {
      return null;
    }

    /*
     * Les liens vers des fichiers qui ne sont pas des pages
     * sont ignorés.
     */
    if (
      /\.(png|jpe?g|gif|webp|svg|pdf|json|zip|mp3|mp4)$/i.test(
        url.pathname
      )
    ) {
      return null;
    }

    /*
     * On évite l’infobulle lorsque le lien pointe vers
     * la page sur laquelle on se trouve déjà.
     */
    if (
      url.pathname === window.location.pathname &&
      url.search === window.location.search
    ) {
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

  function positionTooltip(link) {
    if (!link || !tooltip.classList.contains("is-visible")) {
      return;
    }

    const linkRect = link.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    /*
     * Position normale :
     * centrée juste en dessous du rôle survolé.
     */
    let left =
      linkRect.left +
      linkRect.width / 2 -
      tooltipRect.width / 2;

    let top = linkRect.bottom + GAP;

    /*
     * Si la bulle dépasse en bas de l’écran,
     * elle se place juste au-dessus du rôle.
     */
    if (
      top + tooltipRect.height >
      window.innerHeight - SCREEN_MARGIN
    ) {
      top = linkRect.top - tooltipRect.height - GAP;
    }

    /*
     * La bulle ne doit jamais sortir à gauche ou à droite.
     */
    left = Math.max(
      SCREEN_MARGIN,
      Math.min(
        left,
        window.innerWidth -
          tooltipRect.width -
          SCREEN_MARGIN
      )
    );

    /*
     * Sécurité si l’écran est particulièrement petit.
     */
    top = Math.max(
      SCREEN_MARGIN,
      Math.min(
        top,
        window.innerHeight -
          tooltipRect.height -
          SCREEN_MARGIN
      )
    );

    tooltip.style.setProperty(
      "--botc-tooltip-left",
      `${Math.round(left)}px`
    );

    tooltip.style.setProperty(
      "--botc-tooltip-top",
      `${Math.round(top)}px`
    );
  }

  function showTooltip(description, link) {
    if (!description || activeLink !== link) {
      return;
    }

    tooltip.textContent = description;
    tooltip.classList.add("is-visible");
    tooltip.setAttribute("aria-hidden", "false");

    positionTooltip(link);
  }

  async function loadDescription(url) {
    const cacheKey = url.href;

    if (descriptionCache.has(cacheKey)) {
      return descriptionCache.get(cacheKey);
    }

    try {
      const response = await fetch(cacheKey, {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store",
        headers: {
          Accept: "text/html"
        }
      });

      if (!response.ok) {
        descriptionCache.set(cacheKey, "");
        return "";
      }

      const html = await response.text();

      const parsedPage = new DOMParser().parseFromString(
        html,
        "text/html"
      );

      /*
       * Première source :
       * le champ description: dédié aux infobulles.
       */
      const dedicatedDescription = parsedPage.querySelector(
        'meta[name="botc-tooltip-description"]'
      );

      /*
       * Sources de secours :
       * elles utilisent normalement la même valeur description:.
       */
      const standardDescription = parsedPage.querySelector(
        'meta[name="description"]'
      );

      const openGraphDescription = parsedPage.querySelector(
        'meta[property="og:description"]'
      );

      const twitterDescription = parsedPage.querySelector(
        'meta[name="twitter:description"]'
      );

      const descriptionMeta =
        dedicatedDescription ||
        standardDescription ||
        openGraphDescription ||
        twitterDescription;

      const description = descriptionMeta
        ? (
            descriptionMeta.getAttribute("content") || ""
          ).trim()
        : "";

      descriptionCache.set(cacheKey, description);

      return description;
    } catch (error) {
      console.error(
        "Impossible de charger la description :",
        url.href,
        error
      );

      descriptionCache.set(cacheKey, "");

      return "";
    }
  }

  function prepareTooltip(link, url) {
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

  function initialiseTooltips() {
    if (!supportsHover()) {
      return;
    }

    document.addEventListener("mouseover", event => {
      const link = event.target.closest("a[href]");

      if (!link) {
        return;
      }

      /*
       * On ignore les mouvements entre plusieurs éléments
       * appartenant au même lien.
       */
      if (
        event.relatedTarget &&
        link.contains(event.relatedTarget)
      ) {
        return;
      }

      const url = getInternalUrl(link);

      if (!url) {
        return;
      }

      prepareTooltip(link, url);
    });

    document.addEventListener("mouseout", event => {
      const link = event.target.closest("a[href]");

      if (!link || link !== activeLink) {
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

    document.addEventListener("focusin", event => {
      const link = event.target.closest("a[href]");

      if (!link) {
        return;
      }

      const url = getInternalUrl(link);

      if (url) {
        prepareTooltip(link, url);
      }
    });

    document.addEventListener("focusout", hideTooltip);
    document.addEventListener("click", hideTooltip);

    document.addEventListener(
      "scroll",
      hideTooltip,
      { passive: true }
    );

    window.addEventListener("resize", hideTooltip);

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        hideTooltip();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialiseTooltips
    );
  } else {
    initialiseTooltips();
  }
})();
