// Datos simulados de geolocalización -> zona residencial
const currentZone = {
  type: "Zona residencial",
  dayLimit: 60,
  nightLimit: 50,
};

// HU13 - Escenario 1: Muestra límite legal según zona
document.getElementById("zoneType").textContent = currentZone.type;
document.getElementById("limitDay").textContent = currentZone.dayLimit + " dB";
document.getElementById("limitNight").textContent =
  currentZone.nightLimit + " dB";

// HU13 - Escenario 2: Ruido ilegal (compara con hora simulada de la noche)
function checkLegalLimit() {
  const db = parseInt(document.getElementById("currentDb").value, 10);
  const resultBox = document.getElementById("resultBox");

  // Simula que la comparación se hace en horario nocturno (11 pm)
  const isNight = true;
  const limit = isNight ? currentZone.nightLimit : currentZone.dayLimit;

  if (db > limit) {
    resultBox.className = "result-box illegal";
    resultBox.textContent = `¡Excede el límite legal! Registraste ${db} dB, superando el máximo de ${limit} dB en horario nocturno. Puedes reportar a la municipalidad.`;
  } else {
    resultBox.className = "result-box legal";
    resultBox.textContent = `Tu medición de ${db} dB está dentro del límite legal (${limit} dB) para esta zona en horario nocturno.`;
  }
}
