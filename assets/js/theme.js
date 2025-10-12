document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  // 🌙 Mode sombre par défaut (sauf si l'utilisateur avait choisi "clair")
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    btn.textContent = "🌙 Mode sombre";
  } else {
    btn.textContent = "☀️ Mode clair";
  }

  // Lorsqu’on clique sur le bouton
  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      btn.textContent = "🌙 Mode sombre";
    } else {
      localStorage.setItem("theme", "dark");
      btn.textContent = "☀️ Mode clair";
    }
  });// 🔁 Redirection automatique des liens .md vers la version sans .md
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href$='.md']").forEach(link => {
    // Récupère le lien complet
    const originalHref = link.getAttribute("href");
    // Enlève l'extension .md
    const newHref = originalHref.replace(/\.md$/, '');
    link.setAttribute("href", newHref);
  });

// --- JINX PLIABLE ---
// Crée un effet repliable (comme <details>/<summary>) compatible avec le thème Slate
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".jinx-toggle").forEach(function (block) {
    const summary = block.querySelector(".jinx-summary");
    const content = block.querySelector(".jinx-content");

    if (!summary || !content) return;

    // Ajoute un curseur et un petit effet visuel
    summary.style.cursor = "pointer";
    summary.addEventListener("click", function () {
      const isHidden = content.style.display === "none";
      content.style.display = isHidden ? "block" : "none";
      summary.querySelector(".arrow").textContent = isHidden ? "🔽" : "▶️";
    });

    // État initial : contenu masqué
    content.style.display = "none";
  });
});

