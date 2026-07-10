// HU24 - Escenario 1: Consultar una publicación existente
const publicaciones = [
  {
    zona: "Av. Principal",
    texto: "Ruido constante de tráfico y bocinas durante la tarde.",
    db: "82 dB",
    estado: "Zona crítica",
    hora: "18:30",
  },
  {
    zona: "Zona comercial",
    texto: "Música alta proveniente de un local cercano.",
    db: "76 dB",
    estado: "Zona ruidosa",
    hora: "20:10",
  },
  {
    zona: "Parque urbano",
    texto: "Evento público con ruido moderado.",
    db: "65 dB",
    estado: "Zona moderada",
    hora: "16:00",
  },
];

function renderPublicaciones() {
  const lista = document.getElementById("publicacionesLista");
  lista.innerHTML = publicaciones
    .map(
      (p, i) => `
    <div class="publicacion-item" onclick="verDetalle(${i})">
      <h4>${p.zona}</h4>
      <p>${p.texto}</p>
      <span>${p.db} · ${p.hora}</span>
    </div>
  `
    )
    .join("");
}

function verDetalle(index) {
  const p = publicaciones[index];
  document.getElementById("detalleZona").textContent = p.zona;
  document.getElementById("detalleTexto").textContent = p.texto;
  document.getElementById("detalleDb").textContent = p.db;
  document.getElementById("detalleEstado").textContent = p.estado;
  document.getElementById("detalleHora").textContent = p.hora;
  document.getElementById("msgAccion").classList.remove("show");
  document.getElementById("detalleCard").style.display = "block";
}

function cerrarDetalle() {
  document.getElementById("detalleCard").style.display = "none";
}

function agregarEvidencia() {
  const msg = document.getElementById("msgAccion");
  msg.textContent = "Evidencia adicional agregada a esta publicación.";
  msg.classList.add("show");
}

// HU24 - Escenario 2: Generación del informe (clasificación de zona al reportar)
function reportarPublicacion() {
  const msg = document.getElementById("msgAccion");
  msg.textContent =
    "Publicación reportada. Informe generado con la clasificación de la zona.";
  msg.classList.add("show");
}

renderPublicaciones();
