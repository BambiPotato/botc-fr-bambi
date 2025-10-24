// ===========================
// Theme + Helpers (Slate safe)
// ===========================
document.addEventListener("DOMContentLoaded", () => {

  // --- Thème clair/sombre ---
  const btn = document.getElementById("theme-toggle");

  // chemin ABSOLU vers la CSS du thème clair (GitHub Pages sous /botc-fr-bambi)
  const LIGHT_HREF = "/botc-fr-bambi/assets/css/light.css";
  const LIGHT_ID   = "light-theme";

  function addLightStylesheet() {
    if (document.getElementById(LIGHT_ID)) return;
    const link = document.createElement("link");
    link.id  = LIGHT_ID;
    link.rel = "stylesheet";
    link.href = LIGHT_HREF;
    document.head.appendChild(link);
  }

  function removeLightStylesheet() {
    const link = document.getElementById(LIGHT_ID);
    if (link) link.remove();
  }

  function applyLight(btnEl) {
    document.body.classList.add("light-mode");
    addLightStylesheet();
    localStorage.setItem("theme", "light");
    if (btnEl) btnEl.textContent = "🌙 Mode sombre";
  }

  function applyDark(btnEl) {
    document.body.classList.remove("light-mode");
    removeLightStylesheet();
    localStorage.setItem("theme", "dark");
    if (btnEl) btnEl.textContent = "☀️ Mode clair";
  }

  // État mémorisé (par défaut: sombre)
  if (localStorage.getItem("theme") === "light") {
    applyLight(btn);
  } else {
    applyDark(btn);
  }

  // Toggle au clic
  if (btn) {
    btn.addEventListener("click", () => {
      const isLight = document.body.classList.contains("light-mode");
      if (isLight) {
        applyDark(btn);
      } else {
        applyLight(btn);
      }
    });
  }

  // --- Redirection automatique des liens .md -> .html ---
  // (évite les 404 sur GitHub Pages / Jekyll)
  document.querySelectorAll("a[href$='.md']").forEach(link => {
    const originalHref = link.getAttribute("href") || "";
    // Si le lien est absolu (http...) on ne touche pas
    if (/^https?:\/\//i.test(originalHref)) return;
    // Remplace .md par .html
    const newHref = originalHref.replace(/\.md$/i, ".html");
    link.setAttribute("href", newHref);
  });

  // --- JINX pliable (remplace <details>/<summary> si ton thème les rend en texte brut) ---
  // Structure attendue dans le HTML :
  // <div class="jinx-toggle">
  //   <div class="jinx-summary"><span class="arrow">▶️</span> Jinx associé (cliquer pour ouvrir)</div>
  //   <div class="jinx-content"> ... contenu ... </div>
  // </div>
  document.querySelectorAll(".jinx-toggle").forEach(block => {
    const summary = block.querySelector(".jinx-summary");
    const content = block.querySelector(".jinx-content");
    if (!summary || !content) return;

    // Etat initial : contenu masqué
    content.style.display = "none";
    summary.style.cursor = "pointer";

    // Ajoute l'icône si absente
    let arrow = summary.querySelector(".arrow");
    if (!arrow) {
      arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.textContent = "▶️";
      summary.prepend(arrow);
      summary.insertAdjacentText("beforeend", " "); // petit espace
    }

    summary.addEventListener("click", () => {
      const hidden = content.style.display === "none";
      content.style.display = hidden ? "block" : "none";
      arrow.textContent = hidden ? "🔽" : "▶️";
    });
  });
});
