// HU20 - Escenario 1: Consulta de seguimiento (estados: Pendiente / En revisión / Atendido / Rechazado)
const misReportes = [
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

function renderSeguimiento() {
  const contenedor = document.getElementById("listaSeguimiento");
  contenedor.innerHTML = misReportes
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

// HU20 - Escenario 2: Actualización automática (notificación cuando cambia a "Atendido")
function simularActualizacion() {
  misReportes[0].estado = "atendido";
  misReportes[0].label = "Atendido";
  renderSeguimiento();

  const toast = document.getElementById("notifToast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4000);
}

renderSeguimiento();
setTimeout(simularActualizacion, 3000);
