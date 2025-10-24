// ===========================
// Thème clair / sombre + Helpers + Jinx
// ===========================
document.addEventListener("DOMContentLoaded", () => {

  // --- 🎨 Thème clair / sombre ---
  const btn = document.getElementById("theme-toggle");

  // Applique l'état mémorisé (sombre par défaut)
  const isLight = localStorage.getItem("theme") === "light";
  if (isLight) document.body.classList.add("light-mode");
  if (btn) btn.textContent = isLight ? "🌙 Mode sombre" : "☀️ Mode clair";

  // Toggle au clic
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const lightNow = document.body.classList.contains("light-mode");
      localStorage.setItem("theme", lightNow ? "light" : "dark");
      btn.textContent = lightNow ? "🌙 Mode sombre" : "☀️ Mode clair";
    });
  }

  // --- 🔁 Correction automatique des liens .md -> .html ---
  document.querySelectorAll("a[href$='.md']").forEach(link => {
    const originalHref = link.getAttribute("href") || "";
    if (/^https?:\/\//i.test(originalHref)) return; // ignore les liens externes
    const newHref = originalHref.replace(/\.md$/i, ".html");
    link.setAttribute("href", newHref);
  });

  // --- 📂 JINX pliable (compat thème Slate) ---
  document.querySelectorAll(".jinx-toggle").forEach(block => {
    const summary = block.querySelector(".jinx-summary");
    const content = block.querySelector(".jinx-content");
    if (!summary || !content) return;

    // État initial
    content.style.display = "none";
    summary.style.cursor = "pointer";

    // Flèche si absente
    let arrow = summary.querySelector(".arrow");
    if (!arrow) {
      arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.textContent = "▶️";
      summary.prepend(arrow);
      summary.insertAdjacentText("beforeend", " ");
    }

    // Toggle
    summary.addEventListener("click", () => {
      const hidden = content.style.display === "none";
      content.style.display = hidden ? "block" : "none";
      arrow.textContent = hidden ? "🔽" : "▶️";
    });
  });

});
