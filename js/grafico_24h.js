// HU09 - Escenario 1: Consulta histórica (gráfico de barras dB vs hora)
// HU09 - Escenario 2: Identificar el momento más ruidoso
const horas = ["00h", "04h", "08h", "12h", "16h", "20h", "24h"];

function generarDatos() {
  return horas.map((h) => ({
    hora: h,
    db: Math.floor(35 + Math.random() * 55),
  }));
}

function colorPorDb(db) {
  if (db < 55) return "#1a5276";
  if (db < 71) return "#2e86c1";
  if (db <= 85) return "#e67e22";
  return "#c0392b";
}

function renderGrafico() {
  const datos = generarDatos();
  const contenedor = document.getElementById("graficoBarras");
  contenedor.innerHTML = "";

  const maxDb = Math.max(...datos.map((d) => d.db));
  const minDb = Math.min(...datos.map((d) => d.db));
  const promedio = Math.round(
    datos.reduce((sum, d) => sum + d.db, 0) / datos.length
  );

  const picoData = datos.find((d) => d.db === maxDb);

  datos.forEach((d) => {
    const item = document.createElement("div");
    item.className = "barra-item";

    const alturaPct = (d.db / 100) * 100;
    item.innerHTML = `
      <div class="barra" style="height:${alturaPct}%; background-color:${colorPorDb(
      d.db
    )}"></div>
      <span>${d.hora}</span>
    `;
    contenedor.appendChild(item);
  });

  document.getElementById("mayorNivel").textContent = maxDb + " dB";
  document.getElementById("menorNivel").textContent = minDb + " dB";
  document.getElementById("promedioNivel").textContent = promedio + " dB";
  document.getElementById(
    "resumenTexto"
  ).textContent = `El punto más ruidoso del día fue a las ${picoData.hora} con ${maxDb} dB, coincidiendo con zonas de tráfico y actividad comercial.`;
}

renderGrafico();
