// =====================================================
// assets/js/theme.js
// - Bouton clair/sombre (via body.light-mode)
// - Liens .md -> .html (anti-404)
// - "Jinx pliable" (fallback si <details>/<summary> s'affichent mal)
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------
  // 1) Thème clair / sombre
  // ------------------------------
  const btn = document.getElementById("theme-toggle");

  function setButtonLabel(isLight) {
    if (!btn) return;
    btn.textContent = isLight ? "🌙 Mode sombre" : "☀️ Mode clair";
  }

  function applyLight() {
    document.body.classList.add("light-mode");
    try { localStorage.setItem("theme", "light"); } catch(e){}
    setButtonLabel(true);
  }

  function applyDark() {
    document.body.classList.remove("light-mode");
    try { localStorage.setItem("theme", "dark"); } catch(e){}
    setButtonLabel(false);
  }

  // État mémorisé (par défaut : sombre)
  let stored = null;
  try { stored = localStorage.getItem("theme"); } catch(e){ stored = null; }
  if (stored === "light") applyLight(); else applyDark();

  // Toggle au clic (ne bloque rien si le bouton n’existe pas)
  if (btn) {
    btn.addEventListener("click", () => {
      const isLight = document.body.classList.contains("light-mode");
      if (isLight) applyDark(); else applyLight();
    });
  }

  // ------------------------------
  // 2) Liens .md -> .html (anti-404)
  // ------------------------------
  document.querySelectorAll("a[href$='.md']").forEach(link => {
    const originalHref = link.getAttribute("href") || "";
    if (/^https?:\/\//i.test(originalHref)) return; // on ne touche pas aux URLs externes
    link.setAttribute("href", originalHref.replace(/\.md$/i, ".html"));
  });

  // ------------------------------
  // 3) JINX pliable (fallback)
  // ------------------------------
  // HTML attendu :
  // <div class="jinx-toggle">
  //   <div class="jinx-summary">Jinx associé (cliquer pour ouvrir)</div>
  //   <div class="jinx-content">… contenu …</div>
  // </div>
  document.querySelectorAll(".jinx-toggle").forEach(block => {
    const summary = block.querySelector(".jinx-summary");
    const content = block.querySelector(".jinx-content");
    if (!summary || !content) return;

    // État initial : masqué
    content.style.display = "none";

    summary.style.cursor = "pointer";
    summary.setAttribute("role", "button");
    summary.setAttribute("tabindex", "0");
    summary.setAttribute("aria-expanded", "false");

    let arrow = summary.querySelector(".arrow");
    if (!arrow) {
      arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.textContent = "▶️";
      arrow.style.marginRight = "6px";
      summary.prepend(arrow);
    }

    function toggle() {
      const hidden = content.style.display === "none";
      content.style.display = hidden ? "block" : "none";
      arrow.textContent = hidden ? "🔽" : "▶️";
      summary.setAttribute("aria-expanded", hidden ? "true" : "false");
    }

    summary.addEventListener("click", toggle);
    summary.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });

});
