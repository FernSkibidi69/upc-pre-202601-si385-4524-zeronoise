// Reportes recientes simulados (compartidos con HU20)
let reportes = [
  {
    titulo: "Av. Principal",
    desc: "Ruido alto por tráfico vehicular.",
    meta: "82 dB · Hoy 14:30",
    estado: "pendiente",
    label: "Pendiente",
  },
  {
    titulo: "Zona comercial",
    desc: "Parlantes con volumen elevado.",
    meta: "76 dB · Ayer 18:10",
    estado: "revision",
    label: "En revisión",
  },
  {
    titulo: "Parque urbano",
    desc: "Ruido moderado durante evento público.",
    meta: "65 dB · 06/07/2026",
    estado: "atendido",
    label: "Atendido",
  },
];

function renderReportes() {
  const contenedor = document.getElementById("listaReportes");
  contenedor.innerHTML = reportes
    .map(
      (r) => `
    <div class="reporte-card">
      <div>
        <h4>${r.titulo}</h4>
        <p>${r.desc}</p>
        <span>${r.meta}</span>
      </div>
      <strong class="estado-${r.estado}">${r.label}</strong>
    </div>
  `
    )
    .join("");
}

// HU19 - Escenario 1: Reporte formal enviado
// HU19 - Escenario 2: Selección de distrito distinto al de ubicación actual (ya incluido en el form)
function enviarReporte(event) {
  event.preventDefault();

  const ubicacion = document.getElementById("ubicacion-reporte").value;
  const nivel = document.getElementById("nivel-ruido").value;
  const distrito = document.getElementById("distrito-reporte");
  const distritoTexto = distrito.options[distrito.selectedIndex].text;

  reportes.unshift({
    titulo: ubicacion,
    desc: `Reporte de nivel ${nivel} enviado a ${distritoTexto}.`,
    meta: "Recién enviado · Hoy",
    estado: "pendiente",
    label: "Pendiente",
  });

  renderReportes();

  const msg = document.getElementById("msgEnvioExitoso");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 3000);

  event.target.reset();
  return false;
}

renderReportes();
