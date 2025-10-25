// ===========================
// Thème clair/sombre + anti-404 + Jinx pliable (version sûre)
// ===========================
(function () {
  // Empêche une double exécution si le script est injecté deux fois
  if (window.__BOTC_THEME_INIT__) return;
  window.__BOTC_THEME_INIT__ = true;

  document.addEventListener("DOMContentLoaded", function () {
    // ---------- 1) Bouton de thème : créer s'il n'existe pas ----------
    var btn = document.getElementById("theme-toggle");
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "theme-toggle";
      btn.type = "button";
      btn.textContent = "☀️ Mode clair"; // sera ajusté juste après
      // Style léger au cas où le CSS global ne le définit pas
      btn.style.position = "fixed";
      btn.style.top = "12px";
      btn.style.right = "12px";
      btn.style.padding = "8px 12px";
      btn.style.cursor = "pointer";
      btn.style.border = "none";
      btn.style.borderRadius = "8px";
      btn.style.background = "#444";
      btn.style.color = "#fff";
      btn.style.fontSize = "14px";
      btn.style.zIndex = "999";
      document.body.appendChild(btn);
    }

    // ---------- 2) Thème clair / sombre ----------
    function applyTheme() {
      var isLight = localStorage.getItem("theme") === "light";
      document.body.classList.toggle("light-mode", isLight);
      btn.textContent = isLight ? "🌙 Mode sombre" : "☀️ Mode clair";
    }
    applyTheme();

    btn.addEventListener("click", function () {
      var nowLight = !document.body.classList.contains("light-mode");
      document.body.classList.toggle("light-mode", nowLight);
      localStorage.setItem("theme", nowLight ? "light" : "dark");
      btn.textContent = nowLight ? "🌙 Mode sombre" : "☀️ Mode clair";
    });

    // ---------- 3) Liens .md -> .html (évite les 404 sur GH Pages) ----------
    Array.prototype.forEach.call(document.querySelectorAll("a[href$='.md']"), function (link) {
      var href = link.getAttribute("href") || "";
      // ne pas toucher aux liens absolus
      if (/^https?:\/\//i.test(href)) return;
      link.setAttribute("href", href.replace(/\.md$/i, ".html"));
    });

    // ---------- 4) JINX pliable ----------
    // Structure HTML attendue :
    // <div class="jinx-toggle">
    //   <div class="jinx-summary">Jinx associé (cliquer pour ouvrir)</div>
    //   <div class="jinx-content"> ... contenu ... </div>
    // </div>
    Array.prototype.forEach.call(document.querySelectorAll(".jinx-toggle"), function (block) {
      var summary = block.querySelector(".jinx-summary");
      var content = block.querySelector(".jinx-content");
      if (!summary || !content) return;

      // État initial
      content.style.display = "none";
      summary.style.cursor = "pointer";

      // Petite flèche
      var arrow = summary.querySelector(".arrow");
      if (!arrow) {
        arrow = document.createElement("span");
        arrow.className = "arrow";
        arrow.textContent = "▶️ ";
        summary.insertBefore(arrow, summary.firstChild);
      }

      summary.addEventListener("click", function () {
        var hidden = content.style.display === "none";
        content.style.display = hidden ? "block" : "none";
        arrow.textContent = hidden ? "🔽 " : "▶️ ";
      });
    });
  });
})();
