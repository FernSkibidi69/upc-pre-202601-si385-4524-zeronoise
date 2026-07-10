// HU29 - Escenario 1: Calor por cuadras (mapa con colores según dB promedio)
const blocksData = [
  { x: 0, y: 0, w: 100, h: 65, db: 48 },
  { x: 100, y: 0, w: 100, h: 65, db: 72 },
  { x: 200, y: 0, w: 100, h: 65, db: 90 },
  { x: 300, y: 0, w: 100, h: 65, db: 60 },
  { x: 0, y: 65, w: 100, h: 65, db: 55 },
  { x: 100, y: 65, w: 100, h: 65, db: 68 },
  { x: 200, y: 65, w: 100, h: 65, db: 82 },
  { x: 300, y: 65, w: 100, h: 65, db: 47 },
  { x: 0, y: 130, w: 100, h: 65, db: 63 },
  { x: 100, y: 130, w: 100, h: 65, db: 91 },
  { x: 200, y: 130, w: 100, h: 65, db: 58 },
  { x: 300, y: 130, w: 100, h: 65, db: 75 },
  { x: 0, y: 195, w: 100, h: 65, db: 42 },
  { x: 100, y: 195, w: 100, h: 65, db: 66 },
  { x: 200, y: 195, w: 100, h: 65, db: 79 },
  { x: 300, y: 195, w: 100, h: 65, db: 53 },
];

function colorForDb(db) {
  if (db < 55) return "#27AE60";
  if (db < 70) return "#F39C12";
  if (db < 85) return "#E67E22";
  return "#E74C3C";
}

function renderBlocksMap() {
  const svg = document.getElementById("blocksMap");
  let content = '<rect class="map-bg" x="0" y="0" width="400" height="260"/>';

  blocksData.forEach((b) => {
    content += `<rect class="block-cell" x="${b.x}" y="${b.y}" width="${
      b.w
    }" height="${b.h}" fill="${colorForDb(b.db)}"/>`;
  });

  svg.innerHTML = content;
}

// HU29 - Escenario 2: Ranking de las 5 intersecciones con mayor dB sostenido
const criticalPoints = [
  { address: "Av. Javier Prado x Av. Aramburú", db: 91 },
  { address: "Av. Arequipa x Av. 28 de Julio", db: 90 },
  { address: "Jr. de la Unión x Av. Wilson", db: 82 },
  { address: "Av. Larco x Av. Benavides", db: 79 },
  { address: "Av. Angamos x Av. Petit Thouars", db: 75 },
];

function renderRanking() {
  const list = document.getElementById("rankingList");
  list.innerHTML = criticalPoints
    .sort((a, b) => b.db - a.db)
    .map(
      (p, i) => `
        <div class="ranking-item">
          <div class="ranking-position">${i + 1}</div>
          <div class="ranking-info">
            <div class="ranking-address">${p.address}</div>
          </div>
          <div class="ranking-db">${p.db} dB</div>
        </div>
      `
    )
    .join("");
}

function setView(view) {
  document
    .getElementById("btnBlocks")
    .classList.toggle("active", view === "blocks");
  document
    .getElementById("btnRanking")
    .classList.toggle("active", view === "ranking");
  document
    .getElementById("blocksView")
    .classList.toggle("show", view === "blocks");
  document
    .getElementById("rankingView")
    .classList.toggle("show", view === "ranking");
}

renderBlocksMap();
renderRanking();
