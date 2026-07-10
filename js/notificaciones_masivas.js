// Alcance simulado por distrito
const districtReach = {
  all: 50000,
  lince: 4200,
  san_isidro: 3800,
  miraflores: 5100,
};

// HU51 - Escenario 2: Enfoque por distrito (actualiza el alcance estimado)
function updateReach() {
  const district = document.getElementById("targetDistrict").value;
  document.getElementById("reachCount").textContent =
    districtReach[district].toLocaleString("es-PE");
}

// HU51 - Escenario 1: Semana del silencio (confirmación de envío programado)
function sendCampaign() {
  const district = document.getElementById("targetDistrict").value;
  const reach = districtReach[district];

  document.getElementById("finalReachCount").textContent =
    reach.toLocaleString("es-PE");
  document.getElementById("msgCampaignSuccess").classList.add("show");
}
