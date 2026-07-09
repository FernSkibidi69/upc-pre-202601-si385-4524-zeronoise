document.addEventListener("DOMContentLoaded", () => {
  const vistaLogin = document.getElementById("vista-login");
  const vistaRegistro = document.getElementById("vista-registro");
  
  const irARegistro = document.getElementById("link-ir-registro");
  const irALogin = document.getElementById("link-ir-login");

  // Cambiar a vista de Registro
  irARegistro.addEventListener("click", (e) => {
    e.preventDefault();
    vistaLogin.style.display = "none";
    vistaRegistro.style.display = "block";
  });

  // Cambiar a vista de Login
  irALogin.addEventListener("click", (e) => {
    e.preventDefault();
    vistaRegistro.style.display = "none";
    vistaLogin.style.display = "block";
  });
});
