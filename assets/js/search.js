/* =========================================================
   BOTC Wiki Search — version corrigée FR/EN
   Fichier : /assets/js/search.js
   ========================================================= */

(function () {
  "use strict";

  const SEARCH_INDEX_URL = "/botc-fr-bambi/assets/search/search.json";
  const MAX_RESULTS = 12;
  const MIN_QUERY_LENGTH = 2;

  let searchData = [];
  let searchReady = false;

  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’']/g, " ")
      .replace(/[-_/]/g, " ")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function cleanTitle(title) {
    return String(title || "")
      .replace(/\.md$/i, "")
      .replace(/\.html$/i, "")
      .replace(/_/g, " ")
      .trim();
  }

  function extractFrenchTitle(item) {
    const content = String(item.content || "").replace(/\s+/g, " ").trim();
    if (!content) return "";

    const stopWords = [
      "Apparaît dans",
      "Informations",
      "Type :",
      "Nom original :",
      "Artiste :",
      "Révélé :",
      "Résumé"
    ];

    let title = content;

    for (const stop of stopWords) {
      const index = title.indexOf(stop);
      if (index > 0) {
        title = title.slice(0, index);
      }
    }

    title = title
      .replace(/[^\p{L}\p{N}\s'’\-]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (!title) return "";
    if (title.length > 70) return "";

    return title;
  }

  function detectModule(item) {
    const path = String(item.path || item.url || "").toLowerCase();

    if (path.includes("tb_roles")) return "Trouble Brewing";
    if (path.includes("bmr_roles")) return "Bad Moon Rising";
    if (path.includes("sv_roles")) return "Sects & Violets";
    if (path.includes("roles_experimentaux")) return "The Carousel / Expérimentaux";
    if (path.includes("voyageurs")) return "Voyageurs";
    if (path.includes("legendaire")) return "Légendaires";
    if (path.includes("loric")) return "Lorics";

    return "";
  }

  function detectType(item) {
    const path = String(item.path || item.url || "").toLowerCase();
    const content = String(item.content || "").toLowerCase();

    if (
      path.includes("tb_roles") ||
      path.includes("bmr_roles") ||
      path.includes("sv_roles") ||
      path.includes("roles_experimentaux")
    ) {
      return "Rôle";
    }

    if (path.includes("voyageurs")) return "Voyageur";
    if (path.includes("legendaire")) return "Légendaire";
    if (path.includes("loric")) return "Loric";
    if (path.includes("glossaire")) return "Glossaire";
    if (path.includes("etats")) return "États";
    if (path.includes("capacite")) return "Capacités";
    if (path.includes("strategie")) return "Stratégie";
    if (path.includes("conteur")) return "Conseils Conteurs";
    if (path.includes("regles")) return "Règles";
    if (path.includes("repartition")) return "Répartition";
    if (path.includes("installation")) return "Installation";
    if (path.includes("teensyville")) return "Teensyville";

    if (content.includes("type :")) return "Rôle";

    return item.type || "Page";
  }

  function detectCategory(item) {
    const lower = String(item.content || "").toLowerCase();

    if (lower.includes("type : villageois")) return "Villageois";
    if (lower.includes("type : marginal")) return "Marginaux";
    if (lower.includes("type : étranger")) return "Marginaux";
    if (lower.includes("type : sbire")) return "Sbire";
    if (lower.includes("type : démon")) return "Démon";
    if (lower.includes("type : voyageur")) return "Voyageur";
    if (lower.includes("type : légendaire")) return "Légendaire";
    if (lower.includes("type : loric")) return "Loric";

    return "";
  }

  function extractOriginalName(item) {
    const content = String(item.content || "");
    const match = content.match(/Nom original\s*:\s*([A-Za-z0-9À-ÿ'’\-\s]+)/i);

    if (!match) return "";

    return match[1]
      .replace(/Artiste\s*:.*$/i, "")
      .replace(/Révélé\s*:.*$/i, "")
      .replace(/Résumé\s*:.*$/i, "")
      .trim();
  }

  function makeSnippet(content, query) {
    const raw = String(content || "").replace(/\s+/g, " ").trim();
    if (!raw) return "";

    const normalizedContent = normalizeText(raw);
    const normalizedQuery = normalizeText(query);
    const index = normalizedContent.indexOf(normalizedQuery);

    if (index === -1) {
      return raw.slice(0, 140) + (raw.length > 140 ? "…" : "");
    }

    const start = Math.max(0, index - 60);
    const end = Math.min(raw.length, index + normalizedQuery.length + 90);

    return (start > 0 ? "…" : "") + raw.slice(start, end) + (end < raw.length ? "…" : "");
  }

  function scoreItem(item, query) {
    const q = normalizeText(query);

    let score = 0;

    if (item.searchTitle === q) score += 200;
    if (item.searchOriginal === q) score += 180;

    if (item.searchTitle.startsWith(q)) score += 130;
    if (item.searchOriginal.startsWith(q)) score += 120;

    if (item.searchTitle.includes(q)) score += 90;
    if (item.searchOriginal.includes(q)) score += 80;

    if (item.searchContent.includes(q)) score += 35;
    if (item.searchCategory.includes(q)) score += 30;
    if (item.searchModule.includes(q)) score += 25;
    if (item.searchPath.includes(q)) score += 20;

    const words = q.split(" ").filter(Boolean);

    for (const word of words) {
      if (word.length < 2) continue;

      if (item.searchTitle.includes(word)) score += 25;
      if (item.searchOriginal.includes(word)) score += 22;
      if (item.searchContent.includes(word)) score += 10;
      if (item.searchPath.includes(word)) score += 6;
    }

    if (item.type === "Rôle") score += 10;
    if (item.category) score += 6;

    return score;
  }

  function prepareData(data) {
    return data
      .filter(function (item) {
        return item && item.url;
      })
      .map(function (item) {
        const frenchTitle = extractFrenchTitle(item);
        const title = frenchTitle || cleanTitle(item.title);
        const originalName = extractOriginalName(item);
        const module = detectModule(item);
        const type = detectType(item);
        const category = detectCategory(item);
        const content = item.content || "";
        const path = item.path || "";

        return {
          title,
          url: item.url,
          content,
          path,
          type,
          category,
          module,
          originalName,

          searchTitle: normalizeText(title),
          searchOriginal: normalizeText(originalName),
          searchCategory: normalizeText(category),
          searchModule: normalizeText(module),
          searchContent: normalizeText(content),
          searchPath: normalizeText(path)
        };
      });
  }

  function search(query) {
    const q = normalizeText(query);

    if (q.length < MIN_QUERY_LENGTH) return [];

    return searchData
      .map(function (item) {
        return {
          item,
          score: scoreItem(item, q)
        };
      })
      .filter(function (result) {
        return result.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      })
      .slice(0, MAX_RESULTS)
      .map(function (result) {
        return result.item;
      });
  }

  function resultMeta(item) {
    const parts = [];

    if (item.category) parts.push(item.category);
    else if (item.type) parts.push(item.type);

    if (item.module) parts.push(item.module);

    return parts.join(" • ");
  }

  function renderResults(results, query, resultsBox) {
    if (!resultsBox) return;

    if (!query || normalizeText(query).length < MIN_QUERY_LENGTH) {
      resultsBox.innerHTML = "";
      resultsBox.classList.remove("is-visible");
      return;
    }

    if (!results.length) {
      resultsBox.innerHTML = '<div class="botc-search-empty">Aucun résultat trouvé.</div>';
      resultsBox.classList.add("is-visible");
      return;
    }

    resultsBox.innerHTML = results
      .map(function (item) {
        const original = item.originalName
          ? `<div class="botc-search-original">${escapeHtml(item.originalName)}</div>`
          : "";

        const meta = resultMeta(item)
          ? `<div class="botc-search-meta">${escapeHtml(resultMeta(item))}</div>`
          : "";

        const snippet = item.type !== "Rôle"
          ? `<div class="botc-search-snippet">${escapeHtml(makeSnippet(item.content, query))}</div>`
          : "";

        return `
          <a class="botc-search-result" href="${escapeAttribute(item.url)}">
            <div class="botc-search-result-body">
              <div class="botc-search-title">${escapeHtml(item.title)}</div>
              ${original}
              ${meta}
              ${snippet}
            </div>
          </a>
        `;
      })
      .join("");

    resultsBox.classList.add("is-visible");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }

  function setupSearchUI() {
    const input = document.querySelector("[data-botc-search-input]");
    const resultsBox = document.querySelector("[data-botc-search-results]");

    if (!input || !resultsBox) return;

    input.addEventListener("input", function () {
      if (!searchReady) return;

      const query = input.value;
      const results = search(query);

      renderResults(results, query, resultsBox);
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        input.value = "";
        resultsBox.innerHTML = "";
        resultsBox.classList.remove("is-visible");
      }
    });

    document.addEventListener("click", function (event) {
      const searchArea = document.querySelector(".botc-search");
      if (!searchArea) return;

      if (!searchArea.contains(event.target)) {
        resultsBox.classList.remove("is-visible");
      }
    });

    input.addEventListener("focus", function () {
      if (resultsBox.innerHTML.trim()) {
        resultsBox.classList.add("is-visible");
      }
    });
  }

  async function loadSearchIndex() {
    try {
      const response = await fetch(SEARCH_INDEX_URL, {
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error("Impossible de charger l’index de recherche.");
      }

      const data = await response.json();

      searchData = prepareData(data);
      searchReady = true;
    } catch (error) {
      console.error("[BOTC Search]", error);
    }
  }

  document.addEventListener("DOMContentLoaded", async function () {
    setupSearchUI();
    await loadSearchIndex();
  });
})();
