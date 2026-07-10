// HU12 - Escenario 1: Cambio de umbral nocturno
// HU12 - Escenario 2: Cambio de umbral diurno
function actualizarValor(tipo) {
  const input = document.getElementById("umbral" + tipo);
  const span = document.getElementById("valor" + tipo);
  span.textContent = input.value + " dB";
}

function guardarConfig() {
  const msg = document.getElementById("msgConfirmacion");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 2500);
}
