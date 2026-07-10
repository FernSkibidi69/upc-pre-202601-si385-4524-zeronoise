// Historial simulado de auditoría de cambios
const auditLog = [
  {
    user: "Admin. Rosa Delgado",
    date: "01 jul 2026, 10:15 am",
    field: "Residencial (noche)",
    oldValue: "55 dB",
    newValue: "50 dB",
  },
  {
    user: "Admin. Rosa Delgado",
    date: "15 jun 2026, 4:30 pm",
    field: "Comercial (día)",
    oldValue: "65 dB",
    newValue: "70 dB",
  },
  {
    user: "Admin. Carlos Núñez",
    date: "02 jun 2026, 9:00 am",
    field: "Industrial (noche)",
    oldValue: "75 dB",
    newValue: "70 dB",
  },
];

// HU41 - Escenario 1: Nueva ordenanza (actualización de valores)
function saveLimits() {
  const resNight = document.getElementById("resNight").value;

  // Registra el cambio en el log de auditoría (simulado)
  auditLog.unshift({
    user: "Admin. Ana Torres",
    date: new Date().toLocaleString("es-PE"),
    field: "Residencial (noche)",
    oldValue: "50 dB",
    newValue: resNight + " dB",
  });

  document.getElementById("msgSaved").classList.add("show");
  renderAudit();
}

// HU41 - Escenario 2: Auditoría (quién, cuándo y qué valor anterior tenía)
function renderAudit() {
  const container = document.getElementById("auditList");
  container.innerHTML = auditLog
    .map(
      (entry) => `
      <div class="audit-item">
        <span class="audit-user">${entry.user}</span>
        <span class="audit-date">${entry.date}</span>
        <div class="audit-change">
          ${entry.field}: <span class="audit-old">${entry.oldValue}</span> → <strong>${entry.newValue}</strong>
        </div>
      </div>
    `
    )
    .join("");
}

function setView(view) {
  document
    .getElementById("btnEdit")
    .classList.toggle("active", view === "edit");
  document
    .getElementById("btnAudit")
    .classList.toggle("active", view === "audit");
  document.getElementById("editView").classList.toggle("show", view === "edit");
  document
    .getElementById("auditView")
    .classList.toggle("show", view === "audit");
}

renderAudit();
