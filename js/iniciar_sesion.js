let currentRole = "ciudadano";

const dominioPorRol = {
  ciudadano: "@gmail.com",
  funcionario: "@muni.gob.pe",
};

function switchRole(role) {
  currentRole = role;
  document
    .getElementById("btnCiudadano")
    .classList.toggle("active", role === "ciudadano");
  document
    .getElementById("btnFuncionario")
    .classList.toggle("active", role === "funcionario");

  const subtitle = document.getElementById("loginSubtitle");
  const emailInput = document.getElementById("loginEmail");

  if (role === "ciudadano") {
    subtitle.textContent =
      "Inicia sesión con tu cuenta de Gmail para gestionar tus mediciones y reportes.";
    emailInput.placeholder = "tu.correo@gmail.com";
  } else {
    subtitle.textContent =
      "Inicia sesión con tu correo institucional para acceder al panel municipal.";
    emailInput.placeholder = "tu.correo@muni.gob.pe";
  }

  document.querySelectorAll(".msg").forEach((m) => m.classList.remove("show"));
}

// HU03 / HU27 - Escenario 1: inicio de sesión exitoso
// HU03 / HU27 - Escenario 2: credenciales incorrectas o dominio no válido
function handleLogin(event) {
  event.preventDefault();

  const correo = document
    .getElementById("loginEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("loginPassword").value;

  const msgError = document.getElementById("msgLoginError");
  const msgSuccess = document.getElementById("msgLoginSuccess");
  msgError.classList.remove("show");
  msgSuccess.classList.remove("show");

  const dominioEsperado = dominioPorRol[currentRole];
  const dominioValido = correo.endsWith(dominioEsperado);
  const cuenta = obtenerCuenta(currentRole, correo);

  if (!dominioValido) {
    msgError.textContent = `Debes usar un correo con dominio ${dominioEsperado} para acceder como ${currentRole}.`;
    msgError.classList.add("show");
    return false;
  }

  if (!cuenta || cuenta.password !== password) {
    msgError.textContent = "Correo o contraseña incorrectos.";
    msgError.classList.add("show");
    return false;
  }

  saveSession(currentRole, cuenta.nombre, correo);
  msgSuccess.classList.add("show");

  setTimeout(() => {
    window.location.href =
      currentRole === "ciudadano"
        ? "index-ciudadano.html"
        : "index-municipalidad.html";
  }, 1200);

  return false;
}
