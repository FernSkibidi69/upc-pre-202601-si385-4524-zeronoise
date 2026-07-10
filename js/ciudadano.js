// Index ciudadano: dashboard con sidebar y navegación real hacia las páginas de HU.

// Toggle del sidebar en pantallas pequeñas
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

// Scroll suave desde el sidebar hacia cada sección
document.querySelectorAll('.sidebar-nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Cierra el sidebar en móvil después de navegar
    document.getElementById("sidebar").classList.remove("open");
  });
});

// Resalta el link activo del sidebar según la sección visible
const groups = document.querySelectorAll(".group[id]");
const sideLinks = document.querySelectorAll(".side-link");

window.addEventListener("scroll", () => {
  let current = groups[0] ? groups[0].id : "";
  groups.forEach((group) => {
    if (window.scrollY >= group.offsetTop - 120) {
      current = group.id;
    }
  });

  sideLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
});
