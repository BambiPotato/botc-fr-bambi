(() => {
  "use strict";

  /* =========================================================
     RÉGLAGES GÉNÉRAUX
     ========================================================= */

  const SHOW_DELAY = 180;

  /*
   * Petit espace entre le lien et l’infobulle.
   * La bulle reste proche du rôle, comme sur le wiki original.
   */
  const GAP = 8;

  /*
   * Marge de sécurité pour empêcher l’infobulle
   * de sortir des limites de l’écran.
   */
  const SCREEN_MARGIN = 12;

  /*
   * Les descriptions déjà chargées sont conservées en mémoire.
   * Une même fiche n’est donc pas téléchargée plusieurs fois.
   */
  const descriptionCache = new Map();

  let activeLink = null;
  let showTimer = null;
  let requestId = 0;


  /* =========================================================
     APPARENCE DE L’INFOBULLE
     ========================================================= */

  const style = document.createElement("style");

  style.textContent = `
    .botc-role-tooltip {
      position: fixed !important;

      top: var(--botc-tooltip-top, 0px) !important;
      left: var(--botc-tooltip-left, 0px) !important;

      z-index: 999999 !important;
      box-sizing: border-box !important;

      width: max-content !important;
      max-width: min(330px, calc(100vw - 24px)) !important;

      padding: 11px 15px !important;

      background: #f8f4ec !important;
      border: 1px solid #c3a994 !important;
      border-radius: 9px !important;

      color: #5a2929 !important;

      font-family:
        Georgia,
        "Times New Roman",
        serif !important;

      font-size: 16px !important;
      font-weight: 400 !important;
      line-height: 1.42 !important;
      text-align: center !important;

      overflow-wrap: anywhere !important;
      white-space: normal !important;

      box-shadow:
        0 7px 18px rgba(65, 42, 31, 0.15),
        0 2px 4px rgba(65, 42, 31, 0.08) !important;

      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;

      transform: translateY(2px) !important;

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

    /*
     * Sur un appareil entièrement tactile,
     * l’infobulle est désactivée afin que le premier toucher
     * ouvre normalement le lien.
     */
    @media (hover: none), (pointer: coarse) {
      .botc-role-tooltip {
        display: none !important;
      }
    }
  `;

  document.head.appendChild(style);


  /* =========================================================
     CRÉATION DE L’INFOBULLE
     ========================================================= */

  const tooltip = document.createElement("div");

  tooltip.className = "botc-role-tooltip";
  tooltip.setAttribute("role", "tooltip");
  tooltip.setAttribute("aria-hidden", "true");

  document.body.appendChild(tooltip);


  /* =========================================================
     COMPATIBILITÉ DE L’APPAREIL
     ========================================================= */

  function supportsHover() {
    return window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
  }


  /* =========================================================
     DÉTECTION DU LIEN
     ========================================================= */

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
      /*
       * Le script suit directement le href réel.
       *
       * Exemple :
       * <a href="./goon.html">Gros bras</a>
       *
       * Il ouvre goon.html.
       * Il ne tente jamais de fabriquer une adresse
       * à partir du texte français « Gros bras ».
       */
      url = new URL(href, window.location.href);
    } catch {
      return null;
    }

    /*
     * Les liens externes sont ignorés.
     */
    if (url.origin !== window.location.origin) {
      return null;
    }

    /*
     * Les fichiers qui ne sont pas des pages HTML
     * ne doivent pas produire d’infobulle.
     */
    if (
      /\.(png|jpe?g|gif|webp|svg|pdf|json|zip|mp3|mp4|webm)$/i.test(
        url.pathname
      )
    ) {
      return null;
    }

    /*
     * Pas d’infobulle si le lien renvoie exactement
     * vers la page actuelle.
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


  /* =========================================================
     MASQUAGE
     ========================================================= */

  function hideTooltip() {
    window.clearTimeout(showTimer);

    showTimer = null;
    activeLink = null;
    requestId += 1;

    tooltip.classList.remove("is-visible");
    tooltip.setAttribute("aria-hidden", "true");
    tooltip.textContent = "";
  }


  /* =========================================================
     POSITIONNEMENT SOUS LE RÔLE
     ========================================================= */

  function positionTooltip(link) {
    if (
      !link ||
      !tooltip.classList.contains("is-visible")
    ) {
      return;
    }

    const linkRect = link.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    /*
     * Position normale :
     * l’infobulle est centrée sous le rôle cliquable.
     */
    let left =
      linkRect.left +
      linkRect.width / 2 -
      tooltipRect.width / 2;

    let top = linkRect.bottom + GAP;

    /*
     * Elle reste sous le rôle dans tous les cas où elle tient
     * encore dans la partie visible de l’écran.
     *
     * Elle ne passe au-dessus que si elle serait réellement coupée
     * par le bas de la fenêtre.
     */
    const wouldOverflowBottom =
      top + tooltipRect.height >
      window.innerHeight - SCREEN_MARGIN;

    if (wouldOverflowBottom) {
      const positionAbove =
        linkRect.top -
        tooltipRect.height -
        GAP;

      /*
       * Elle passe au-dessus uniquement s’il y a suffisamment
       * de place. Sinon, elle reste contenue dans l’écran.
       */
      if (positionAbove >= SCREEN_MARGIN) {
        top = positionAbove;
      } else {
        top =
          window.innerHeight -
          tooltipRect.height -
          SCREEN_MARGIN;
      }
    }

    /*
     * Protection contre les dépassements à gauche et à droite.
     * La bulle reste centrée autant que possible.
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
     * Protection supplémentaire contre les dépassements verticaux.
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


  /* =========================================================
     AFFICHAGE
     ========================================================= */

  function showTooltip(description, link) {
    if (
      !description ||
      activeLink !== link
    ) {
      return;
    }

    tooltip.textContent = description;
    tooltip.classList.add("is-visible");
    tooltip.setAttribute("aria-hidden", "false");

    positionTooltip(link);
  }


  /* =========================================================
     CHARGEMENT DE LA DESCRIPTION
     ========================================================= */

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
       * Source principale :
       * la balise créée directement à partir du champ
       * description: de la fiche.
       */
      const dedicatedDescription =
        parsedPage.querySelector(
          'meta[name="botc-tooltip-description"]'
        );

      /*
       * Sources de secours.
       * Elles utilisent normalement la même valeur description:.
       */
      const standardDescription =
        parsedPage.querySelector(
          'meta[name="description"]'
        );

      const openGraphDescription =
        parsedPage.querySelector(
          'meta[property="og:description"]'
        );

      const twitterDescription =
        parsedPage.querySelector(
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
        "Impossible de charger la description de l’infobulle :",
        url.href,
        error
      );

      descriptionCache.set(cacheKey, "");

      return "";
    }
  }


  /* =========================================================
     PRÉPARATION AU SURVOL
     ========================================================= */

  function prepareTooltip(link, url) {
    window.clearTimeout(showTimer);

    /*
     * Une ancienne infobulle ne doit pas rester visible
     * pendant que l’on survole un nouveau rôle.
     */
    tooltip.classList.remove("is-visible");
    tooltip.setAttribute("aria-hidden", "true");
    tooltip.textContent = "";

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


  /* =========================================================
     ÉVÉNEMENTS
     ========================================================= */

  function initialiseTooltips() {
    if (!supportsHover()) {
      return;
    }

    document.addEventListener("mouseover", event => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");

      if (!link) {
        return;
      }

      /*
       * Ignore les mouvements entre plusieurs éléments
       * appartenant au même lien.
       */
      if (
        event.relatedTarget instanceof Node &&
        link.contains(event.relatedTarget)
      ) {
        return;
      }

      const url = getInternalUrl(link);

      if (!url) {
        return;
      }

      /*
       * Évite de relancer inutilement l’infobulle
       * lorsque le même lien est déjà actif.
       */
      if (activeLink === link) {
        return;
      }

      prepareTooltip(link, url);
    });

    document.addEventListener("mouseout", event => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");

      if (
        !link ||
        link !== activeLink
      ) {
        return;
      }

      if (
        event.relatedTarget instanceof Node &&
        link.contains(event.relatedTarget)
      ) {
        return;
      }

      hideTooltip();
    });

    /*
     * Compatibilité avec la navigation au clavier.
     */
    document.addEventListener("focusin", event => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");

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

    /*
     * L’infobulle disparaît pendant un défilement
     * pour éviter qu’elle reste suspendue loin du lien.
     */
    document.addEventListener(
      "scroll",
      hideTooltip,
      {
        passive: true,
        capture: true
      }
    );

    window.addEventListener(
      "resize",
      hideTooltip
    );

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        hideTooltip();
      }
    });
  }


  /* =========================================================
     LANCEMENT
     ========================================================= */

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialiseTooltips
    );
  } else {
    initialiseTooltips();
  }
})();
