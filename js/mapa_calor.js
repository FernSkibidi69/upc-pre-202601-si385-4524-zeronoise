// HU39 - Escenario 1: Ruido en hora punta (según franja horaria seleccionada)
// HU39 - Escenario 2: Evolución diaria (comparación entre mañana / tarde / noche)
const datosHorario = {
  manana: [
    { rango: "06:00 - 09:00", db: 48, clase: "bajo", label: "Ruido bajo" },
    {
      rango: "09:00 - 12:00",
      db: 62,
      clase: "moderado",
      label: "Ruido moderado",
    },
  ],
  tarde: [
    {
      rango: "12:00 - 15:00",
      db: 66,
      clase: "moderado",
      label: "Ruido moderado",
    },
    { rango: "15:00 - 18:00", db: 74, clase: "alto", label: "Ruido alto" },
  ],
  noche: [
    { rango: "18:00 - 21:00", db: 79, clase: "alto", label: "Ruido alto" },
    {
      rango: "21:00 - 00:00",
      db: 91,
      clase: "critico",
      label: "Ruido crítico",
    },
  ],
};

function renderCalor(franja) {
  const lista = document.getElementById("calorLista");
  lista.innerHTML = datosHorario[franja]
    .map(
      (d) => `
    <div class="calor-horario ${d.clase}">
      <h5>${d.rango}</h5>
      <p>${d.label}</p>
      <strong>${d.db} dB</strong>
    </div>
  `
    )
    .join("");
}

function cambiarHorario(el, franja) {
  document
    .querySelectorAll("#horarioOpciones span")
    .forEach((s) => s.classList.remove("horario-activo"));
  el.classList.add("horario-activo");
  renderCalor(franja);
}

renderCalor("manana");
