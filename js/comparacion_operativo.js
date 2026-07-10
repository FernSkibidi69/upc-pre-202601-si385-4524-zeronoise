// Datos simulados de mediciones por hora, antes y después del operativo
const dataBefore = [65, 78, 92, 85, 70];
const dataAfter = [58, 62, 70, 65, 55];

function renderBarChart(svgId, data, colorClass) {
  const svg = document.getElementById(svgId);
  const width = 180,
    height = 140;
  const barWidth = 28;
  const gap = 8;
  const maxVal = 100;

  let content = "";
  data.forEach((val, i) => {
    const barHeight = (val / maxVal) * 100;
    const x = i * (barWidth + gap) + 5;
    const y = 110 - barHeight;
    content += `<rect class="bar ${colorClass}" x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="3"/>`;
    content += `<text class="bar-label" x="${
      x + barWidth / 2
    }" y="125" text-anchor="middle">${val}</text>`;
  });

  svg.innerHTML = content;
}

// HU31 - Escenario 1: Análisis de impacto (gráficos lado a lado)
// HU31 - Escenario 2: Indicador de éxito (% de reducción)
function compareData() {
  renderBarChart("chartBefore", dataBefore, "");
  renderBarChart("chartAfter", dataAfter, "after");

  document.getElementById("chartsRow").classList.add("show");

  const maxBefore = Math.max(...dataBefore);
  const maxAfter = Math.max(...dataAfter);
  const reduction = Math.round(((maxBefore - maxAfter) / maxBefore) * 100);

  document.getElementById(
    "successText"
  ).textContent = `Reducción del ${reduction}% en dB máximos después del operativo`;
  document.getElementById("successIndicator").classList.add("show");
}
