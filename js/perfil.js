// HU06 - Escenario 1: Actualización de datos
// HU06 - Escenario 2: Datos inválidos
function saveProfile(event) {
  event.preventDefault();

  const msgError = document.getElementById("msgProfileError");
  const msgSuccess = document.getElementById("msgProfileSuccess");
  msgError.classList.remove("show");
  msgSuccess.classList.remove("show");

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const distrito = document.getElementById("distrito").value;

  const telefonoValido = /^[0-9]{9}$/.test(telefono.replace(/\s/g, ""));

  if (
    nombre === "" ||
    distrito === "" ||
    (telefono !== "" && !telefonoValido)
  ) {
    msgError.classList.add("show");
    return false;
  }

  msgSuccess.classList.add("show");
  return false;
}
