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
  });
});
