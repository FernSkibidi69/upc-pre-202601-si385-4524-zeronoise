// HU23 - Escenario 1: Carga inicial con marcadores de colores según nivel
// HU23 - Escenario 2: Interacción con puntos (detalle del reporte)
const puntosMapa = [
  {
    zona: "Av. Principal",
    db: "82 dB",
    estado: "Zona crítica",
    horario: "18:30",
    texto:
      "Reporte generado por usuarios debido a tráfico intenso y ruido constante en la zona.",
  },
  {
    zona: "Zona comercial",
    db: "76 dB",
    estado: "Zona ruidosa",
    horario: "20:10",
    texto: "Ruido reportado por parlantes de locales comerciales.",
  },
  {
    zona: "Parque urbano",
    db: "48 dB",
    estado: "Zona tranquila",
    horario: "09:00",
    texto: "Zona con bajo nivel de ruido, apta para descanso.",
  },
];

function verDetalle(index) {
  const p = puntosMapa[index];
  document.getElementById("detalleZona").textContent = p.zona;
  document.getElementById("detalleDb").textContent = p.db;
  document.getElementById("detalleEstado").textContent = p.estado;
  document.getElementById("detalleHorario").textContent = p.horario;
  document.getElementById("detalleTexto").textContent = p.texto;
}
