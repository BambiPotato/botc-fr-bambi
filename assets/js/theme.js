// ===========================
// BOTC Theme + Helpers (safe)
// ===========================
(function () {
  // Empêche une double exécution si le script est injecté deux fois
  if (window.__BOTC_THEME_INIT__) return;
  window.__BOTC_THEME_INIT__ = true;

  document.addEventListener("DOMContentLoaded", function () {

    // ---------- 1) Bouton Thème (créé si absent) ----------
    var btn = document.getElementById("theme-toggle");
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "theme-toggle";
      btn.type = "button";
      btn.textContent = "☀️ Mode clair"; // ajusté après applyTheme()
      // Style minimal au cas où le CSS global ne le définit pas
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

    // ---------- 3) Liens .md -> .html (évite 404 GH Pages) ----------
    Array.prototype.forEach.call(document.querySelectorAll("a[href$='.md']"), function (link) {
      var href = link.getAttribute("href") || "";
      // Ne pas toucher aux liens absolus
      if (/^https?:\/\//i.test(href)) return;
      link.setAttribute("href", href.replace(/\.md$/i, ".html"));
    });

    // ---------- 4) Blocs JINX repliables ----------
    // Structure attendue :
    // <div class="jinx-toggle">
    //   <div class="jinx-summary">Titre (cliquer)</div>
    //   <div class="jinx-content">Contenu…</div>
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

    // ---------- 5) PATCH : Attributs "style”color:blue”" cassés + adoucissement ----------
    // Certaines pages contiennent des attributs avec guillemets courbes (ex: style”color:blue”)
    // On les détecte, on applique la couleur voulue, puis on retire cet attribut cassé.
    (function fixBrokenStyleAttributes() {
      var all = document.querySelectorAll("*");
      for (var i = 0; i < all.length; i++) {
        var el = all[i];
        if (!el.getAttributeNames) continue;
        var names = el.getAttributeNames();

        for (var j = 0; j < names.length; j++) {
          var name = names[j];
          // Ne pas toucher au vrai "style"
          if (name === "style") continue;

          // Si un attribut ressemble à "style" (avec guillemets typographiques, variantes, etc.)
          if (/style/i.test(name)) {
            var val = el.getAttribute(name) || "";

            // Tente d'extraire une couleur simple "color: xxx"
            var m = val.match(/color\s*:\s*([#a-z0-9]+)/i);
            if (m) {
              var raw = (m[1] || "").toLowerCase();
              var resolved = raw;

              // Harmonisation vers des teintes SOFT cohérentes avec style-soft.css
              if (raw === "blue") resolved = "#4ea3ff";        // BLEU doux (villageois, étrangers)
              else if (raw === "red") resolved = "#d45b5b";    // ROUGE doux (sbires, démons)
              else if (raw === "#fff" || raw === "#ffffff" || raw === "white") resolved = "#e6e6e6"; // blanc doux

              el.style.color = resolved;
            }

            // Nettoie l’attribut cassé
            el.removeAttribute(name);
          }
        }
      }
    })();

  });
})();
