// HU16 - Escenario 1: Domingo por la noche (resumen semanal total)
const horasSemana = [
  { dia: "Lunes", horas: 1.2 },
  { dia: "Martes", horas: 2.1 },
  { dia: "Miércoles", horas: 0.8 },
  { dia: "Jueves", horas: 3.5 },
  { dia: "Viernes", horas: 4.2 },
  { dia: "Sábado", horas: 1.5 },
  { dia: "Domingo", horas: 1.0 },
];

function calcularResumen() {
  const totalHoras = horasSemana.reduce((sum, d) => sum + d.horas, 0);
  const diaMax = horasSemana.reduce(
    (max, d) => (d.horas > max.horas ? d : max),
    horasSemana[0]
  );

  document.getElementById("diaMayor").textContent = diaMax.dia;
  document.getElementById(
    "diaMayorTexto"
  ).textContent = `Registro aproximado de ${Math.round(
    diaMax.horas * 20
  )} dB en zona comercial.`;

  // HU16 - Escenario 2: Exceso semanal (>15 horas >70 dB)
  const card = document.getElementById("cardRecomendacion");
  const titulo = document.getElementById("recomendacionTitulo");
  const texto = document.getElementById("recomendacionTexto");

  if (totalHoras > 15) {
    card.classList.add("alerta");
    titulo.textContent = "Usar protección auditiva";
    texto.textContent = `Superaste las 15 horas de exposición >70 dB (${totalHoras.toFixed(
      1
    )}h). Considera usar protectores auditivos en tu ruta habitual.`;
  } else {
    titulo.textContent = "Evitar horas punta";
    texto.textContent = `Esta semana llevas ${totalHoras.toFixed(
      1
    )}h de exposición. Se recomienda reducir el tiempo en horarios de alto tráfico.`;
  }
}

calcularResumen();
