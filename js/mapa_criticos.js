// HU17 - Datos simulados de segmentos de ruta con GPS + nivel de ruido por día
const routeData = [
  { day: "lunes", path: "M40,260 L120,220 L180,180", db: 58 },
  { day: "martes", path: "M180,180 L240,140 L300,100", db: 84 },
  { day: "miercoles", path: "M40,60 L100,90 L160,120", db: 47 },
  { day: "jueves", path: "M300,100 L340,150 L360,200", db: 91 },
  { day: "viernes", path: "M160,120 L220,160 L280,200", db: 68 },
];

function colorForDb(db) {
  if (db < 55) return { name: "verde", hex: "#27AE60" };
  if (db < 70) return { name: "amarillo", hex: "#F39C12" };
  if (db < 80) return { name: "naranja", hex: "#E67E22" };
  return { name: "rojo", hex: "#E74C3C" };
}

// HU17 - Escenario 1: Caminata riesgosa (segmento marcado en rojo intenso)
function renderMap(filterDay) {
  const svg = document.getElementById("routeMap");
  const segmentsList = document.getElementById("segmentsList");

  const filtered =
    filterDay === "all"
      ? routeData
      : routeData.filter((r) => r.day === filterDay);

  let svgContent =
    '<rect class="map-bg" x="0" y="0" width="400" height="300"/>';
  let listContent = "";

  if (filtered.length === 0) {
    listContent =
      '<div class="segment-item">No hay recorridos registrados para este día.</div>';
  }

  filtered.forEach((segment) => {
    const color = colorForDb(segment.db);
    svgContent += `<path class="route-segment" d="${segment.path}" stroke="${color.hex}"/>`;

    listContent += `
        <div class="segment-item">
          <span>${capitalize(segment.day)}</span>
          <span class="segment-db ${color.name}">${segment.db} dB</span>
        </div>
      `;
  });

  svg.innerHTML = svgContent;
  segmentsList.innerHTML = listContent;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// HU17 - Escenario 2: Revisar día específico
function filterByDate() {
  const day = document.getElementById("dateFilter").value;
  renderMap(day);
}

renderMap("all");
