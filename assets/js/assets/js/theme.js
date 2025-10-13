document.addEventListener("DOMContentLoaded", () => {
  // === 🌙 GESTION DU MODE SOMBRE / CLAIR ===
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    // Mode par défaut
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-mode");
      btn.textContent = "🌙 Mode sombre";
    } else {
      btn.textContent = "☀️ Mode clair";
    }

    // Changement de mode
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        btn.textContent = "🌙 Mode sombre";
      } else {
        localStorage.setItem("theme", "dark");
        btn.textContent = "☀️ Mode clair";
      }
    });
  }

  // === 🔁 REDIRECTION AUTOMATIQUE DES LIENS .md ===
  document.querySelectorAll("a[href$='.md']").forEach(link => {
    const originalHref = link.getAttribute("href");
    const newHref = originalHref.replace(/\.md$/, '');
    link.setAttribute("href", newHref);
  });

  // === 🧩 JINX PLIABLE ===
  document.querySelectorAll(".jinx-toggle").forEach(function (block) {
    const summary = block.querySelector(".jinx-summary");
    const content = block.querySelector(".jinx-content");
    const arrow = block.querySelector(".arrow");

    if (!summary || !content || !arrow) return;

    // État initial : fermé
    content.style.display = "none";
    arrow.textContent = "▶️";
    summary.style.cursor = "pointer";

    summary.addEventListener("click", function () {
      const isHidden = content.style.display === "none";
      content.style.display = isHidden ? "block" : "none";
      arrow.textContent = isHidden ? "🔽" : "▶️";
    });
  });
});

