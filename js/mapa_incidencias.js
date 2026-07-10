// HU35 - Datos simulados de incidencias con antigüedad en días
const incidents = [
  { x: 80, y: 80, address: "Av. Javier Prado 450", days: 3, attended: false },
  { x: 180, y: 140, address: "Jr. Los Pinos 120", days: 9, attended: false },
  { x: 260, y: 90, address: "Av. Larco 890", days: 12, attended: false },
  { x: 320, y: 180, address: "Calle San Martín 30", days: 2, attended: true },
  { x: 140, y: 200, address: "Av. Angamos 560", days: 8, attended: false },
];

let showOnlyOld = false;

// HU35 - Escenario 1: Incidencias pendientes en rojo, atendidas en verde
function renderMap() {
  const svg = document.getElementById("incidentsMap");
  let content = '<rect class="map-bg" x="0" y="0" width="400" height="260"/>';

  const filtered = getFilteredIncidents();

  filtered.forEach((inc) => {
    const color = inc.attended ? "#27AE60" : "#E74C3C";
    content += `<circle class="marker" cx="${inc.x}" cy="${inc.y}" r="8" fill="${color}"/>`;
  });

  svg.innerHTML = content;
  renderList(filtered);
}

function renderList(list) {
  const container = document.getElementById("incidentsList");

  if (list.length === 0) {
    container.innerHTML =
      '<div class="incident-item">No hay incidencias que coincidan con el filtro.</div>';
    return;
  }

  container.innerHTML = list
    .map(
      (inc) => `
      <div class="incident-item">
        <div>
          <div class="incident-address">${inc.address}</div>
          <div class="incident-days">${inc.days} día(s) pendiente</div>
        </div>
        <span class="incident-status ${inc.attended ? "verde" : "rojo"}">
          ${inc.attended ? "Atendido" : "No atendido"}
        </span>
      </div>
    `
    )
    .join("");
}

// HU35 - Escenario 2: Priorizar las más viejas (>7 días)
function getFilteredIncidents() {
  return showOnlyOld ? incidents.filter((i) => i.days > 7) : incidents;
}

function applyFilter() {
  showOnlyOld = document.getElementById("filterOldToggle").checked;
  renderMap();
}

renderMap();
