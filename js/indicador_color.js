// HU08 - Escenario 1: Ruido bajo (verde)
// HU08 - Escenario 2: Ruido extremo (rojo, parpadea)
function simular(db) {
  const circulo = document.getElementById("circuloMedidor");
  const dbTexto = document.getElementById("dbActual");
  const estado = document.getElementById("estadoActual");

  dbTexto.textContent = db + " dB";
  circulo.classList.remove("parpadea");

  let color, texto;
  if (db < 55) {
    color = "#27ae60";
    texto = "Bajo";
  } else if (db < 71) {
    color = "#f1c40f";
    texto = "Moderado";
  } else if (db <= 85) {
    color = "#e67e22";
    texto = "Alto";
  } else {
    color = "#c0392b";
    texto = "Crítico";
    circulo.classList.add("parpadea");
  }

  circulo.style.backgroundColor = color;
  estado.textContent = texto;
  estado.style.color = color;
}
