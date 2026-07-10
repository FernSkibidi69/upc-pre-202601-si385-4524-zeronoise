// HU37 - Escenario 1: Distribución de fuentes del último mes
const sources = [
  { name: "Vehículos", pct: 45, color: "#2980B9" },
  { name: "Construcción", pct: 30, color: "#E67E22" },
  { name: "Música", pct: 20, color: "#F39C12" },
  { name: "Otros", pct: 5, color: "#27AE60" },
];

function renderPieChart() {
  const svg = document.getElementById("pieChart");
  const cx = 100,
    cy = 100,
    r = 90;
  let startAngle = 0;
  let content = "";

  sources.forEach((s) => {
    const angle = (s.pct / 100) * 360;
    const endAngle = startAngle + angle;

    const x1 = cx + r * Math.cos((Math.PI / 180) * (startAngle - 90));
    const y1 = cy + r * Math.sin((Math.PI / 180) * (startAngle - 90));
    const x2 = cx + r * Math.cos((Math.PI / 180) * (endAngle - 90));
    const y2 = cy + r * Math.sin((Math.PI / 180) * (endAngle - 90));

    const largeArc = angle > 180 ? 1 : 0;

    content += `<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc} 1 ${x2},${y2} Z" fill="${s.color}"/>`;

    startAngle = endAngle;
  });

  svg.innerHTML = content;

  const legend = document.getElementById("pieLegend");
  legend.innerHTML = sources
    .map(
      (s) => `
      <div class="pie-legend-item">
        <div class="pie-legend-left">
          <span class="pie-dot" style="background:${s.color}"></span>
          <span>${s.name}</span>
        </div>
        <span class="pie-pct">${s.pct}%</span>
      </div>
    `
    )
    .join("");
}

// HU37 - Escenario 2: Ver tendencia (barras apiladas por semana)
const weeklyTrend = [
  { week: "Sem 1", vehiculos: 40, construccion: 35, musica: 20, otros: 5 },
  { week: "Sem 2", vehiculos: 42, construccion: 30, musica: 22, otros: 6 },
  { week: "Sem 3", vehiculos: 45, construccion: 25, musica: 25, otros: 5 },
  { week: "Sem 4", vehiculos: 48, construccion: 20, musica: 27, otros: 5 },
];

function renderStackedChart() {
  const svg = document.getElementById("stackedChart");
  const width = 320,
    height = 200;
  const chartH = 150;
  const barWidth = 50;
  const gap = 20;
  const colors = {
    vehiculos: "#2980B9",
    construccion: "#E67E22",
    musica: "#F39C12",
    otros: "#27AE60",
  };

  let content = "";

  weeklyTrend.forEach((w, i) => {
    let yOffset = chartH;
    const x = i * (barWidth + gap) + 20;

    ["vehiculos", "construccion", "musica", "otros"].forEach((key) => {
      const segHeight = (w[key] / 100) * chartH;
      yOffset -= segHeight;
      content += `<rect x="${x}" y="${yOffset}" width="${barWidth}" height="${segHeight}" fill="${colors[key]}"/>`;
    });

    content += `<text x="${x + barWidth / 2}" y="${
      chartH + 16
    }" text-anchor="middle" font-size="10" fill="#888">${w.week}</text>`;
  });

  svg.innerHTML = content;
}

function setView(view) {
  document.getElementById("btnPie").classList.toggle("active", view === "pie");
  document
    .getElementById("btnTrend")
    .classList.toggle("active", view === "trend");
  document.getElementById("pieView").classList.toggle("show", view === "pie");
  document
    .getElementById("trendView")
    .classList.toggle("show", view === "trend");
}

renderPieChart();
renderStackedChart();
