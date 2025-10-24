// ===========================
// Theme + Helpers (Slate safe)
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  // --- Thème clair/sombre ---
  const btn = document.getElementById("theme-toggle");

  // Applique l'état mémorisé (par défaut: sombre)
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    if (btn) btn.textContent = "🌙 Mode sombre";
  } else {
    if (btn) btn.textContent = "☀️ Mode clair";
  }

  // Toggle au clic (ne bloque pas le reste si le bouton n'existe pas)
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      btn.textContent = isLight ? "🌙 Mode sombre" : "☀️ Mode clair";
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
