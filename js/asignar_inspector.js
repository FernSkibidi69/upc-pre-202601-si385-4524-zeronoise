// HU36 - Datos simulados de inspectores con su carga semanal
const inspectors = [
  { name: "Inspector Ramírez", load: 8 },
  { name: "Inspector Quispe", load: 3 },
  { name: "Inspectora Flores", load: 5 },
  { name: "Inspector Medina", load: 1 },
];

let selectedInspector = null;

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function renderInspectors() {
  const list = document.getElementById("inspectorsList");
  list.innerHTML = inspectors
    .map(
      (insp, i) => `
      <div class="inspector-item" id="inspItem${i}" onclick="selectInspector(${i})">
        <div class="inspector-info">
          <div class="inspector-avatar">${initials(insp.name)}</div>
          <div>
            <div class="inspector-name">${insp.name}</div>
            <div class="inspector-load">${
              insp.load
            } incidencias esta semana</div>
          </div>
        </div>
        <span class="load-badge ${insp.load >= 8 ? "alta" : "normal"}">${
        insp.load >= 8 ? "Carga alta" : "Disponible"
      }</span>
      </div>
    `
    )
    .join("");
}

// HU36 - Escenario 2: Evitar sobrecarga (advertencia si ya tiene 8+ incidencias)
function selectInspector(index) {
  selectedInspector = index;

  document
    .querySelectorAll(".inspector-item")
    .forEach((el) => el.classList.remove("selected"));
  document.getElementById(`inspItem${index}`).classList.add("selected");

  const warning = document.getElementById("overloadWarning");
  const insp = inspectors[index];

  if (insp.load >= 8) {
    warning.textContent = `⚠️ Este inspector tiene carga alta (${insp.load} incidencias esta semana).`;
    warning.classList.add("show");
  } else {
    warning.classList.remove("show");
  }

  document.getElementById("assignBtn").disabled = false;
}

// HU36 - Escenario 1: Elegir inspector y confirmar (marcador cambia a amarillo)
function confirmAssignment() {
  if (selectedInspector === null) return;

  document.getElementById("incidentMarker").className = "marker-dot amarillo";
  document.getElementById("msgAssignSuccess").classList.add("show");
}

renderInspectors();
