// ===========================
// Thème clair/sombre + anti-404 + Jinx pliable
// ===========================
document.addEventListener("DOMContentLoaded", () => {

  // --- 🎨 Thème clair / sombre ---
  const btn = document.getElementById("theme-toggle");

  // Appliquer le thème mémorisé (sombre par défaut)
  const applyTheme = () => {
    const isLight = localStorage.getItem("theme") === "light";
    document.body.classList.toggle("light-mode", isLight);
    if (btn) {
      btn.textContent = isLight ? "🌙 Mode sombre" : "☀️ Mode clair";
    }
  };
  applyTheme();

  // Quand on clique sur le bouton
  if (btn) {
    btn.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      btn.textContent = isLight ? "🌙 Mode sombre" : "☀️ Mode clair";
    });
  }

  // --- 🔁 Redirection automatique des liens .md → .html ---
  document.querySelectorAll("a[href$='.md']").forEach(link => {
    const originalHref = link.getAttribute("href") || "";
    // Ignorer les liens externes
    if (/^https?:\/\//i.test(originalHref)) return;
    // Convertir .md → .html
    const newHref = originalHref.replace(/\.md$/i, ".html");
    link.setAttribute("href", newHref);
  });

  // --- 📂 Jinx pliable (pour remplacer <details>/<summary>) ---
  document.querySelectorAll(".jinx-toggle").forEach(block => {
    const summary = block.querySelector(".jinx-summary");
    const content = block.querySelector(".jinx-content");
    if (!summary || !content) return;

    content.style.display = "none";
    summary.style.cursor = "pointer";

    // Ajoute la flèche si elle n’existe pas déjà
    let arrow = summary.querySelector(".arrow");
    if (!arrow) {
      arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.textContent = "▶️ ";
      summary.prepend(arrow);
    }

    summary.addEventListener("click", () => {
      const hidden = content.style.display === "none";
      content.style.display = hidden ? "block" : "none";
      arrow.textContent = hidden ? "🔽 " : "▶️ ";
    });
  });
});
