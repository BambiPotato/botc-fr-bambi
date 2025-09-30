// 🌙 Mode sombre par défaut
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  document.getElementById("theme-toggle").textContent = "🌙 Mode sombre";
} else {
  document.getElementById("theme-toggle").textContent = "☀️ Mode clair";
}

// Bascule au clic
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    document.getElementById("theme-toggle").textContent = "🌙 Mode sombre";
  } else {
    localStorage.setItem("theme", "dark");
    document.getElementById("theme-toggle").textContent = "☀️ Mode clair";
  }
});
