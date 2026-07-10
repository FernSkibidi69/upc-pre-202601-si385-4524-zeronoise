// HU02 - Escenario 1: registro exitoso (correo Gmail válido + contraseñas coinciden)
// HU02 - Escenario 2: campos incompletos o inválidos
function handleRegister(event) {
  event.preventDefault();

  const nombre = document.getElementById("regNombre").value.trim();
  const correo = document.getElementById("regEmail").value.trim().toLowerCase();
  const password = document.getElementById("regPassword").value;
  const passwordConfirm = document.getElementById("regPasswordConfirm").value;

  const msgWarning = document.getElementById("msgRegisterWarning");
  const msgSuccess = document.getElementById("msgRegisterSuccess");
  msgWarning.classList.remove("show");
  msgSuccess.classList.remove("show");

  const esGmail = correo.endsWith("@gmail.com");
  const passwordValida = password.length >= 8;
  const passwordsCoinciden = password === passwordConfirm;

  if (nombre === "" || !esGmail || !passwordValida || !passwordsCoinciden) {
    msgWarning.classList.add("show");
    return false;
  }

  // Los ciudadanos se registran con Gmail; las cuentas de funcionario
  // ya están pre-cargadas en auth.js (cuentasFuncionarioDemo)
  guardarCuenta("ciudadano", correo, password, nombre);

  msgSuccess.classList.add("show");
  setTimeout(() => {
    window.location.href = "iniciar_sesion.html";
  }, 1500);

  return false;
}
