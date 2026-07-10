// HU43 - Escenario 1: Caso resuelto -> notificación automática al ciudadano
function markAsAttended() {
  const badge = document.getElementById("statusBadge");
  badge.textContent = "Atendido";
  badge.classList.add("atendido");

  document.getElementById("notifCard").classList.add("show");
  document.getElementById("feedbackPanel").classList.add("show");
}

// HU43 - Escenario 2: Ciudadano insatisfecho (reabrir reporte)
function closeSatisfied() {
  document.getElementById("feedbackPanel").classList.remove("show");
}

function openReopenForm() {
  document.getElementById("reopenForm").classList.add("show");
}

function submitReopen() {
  const reason = document.getElementById("reopenReason").value.trim();
  if (reason === "") {
    alert("Por favor explica el motivo antes de reabrir el reporte.");
    return;
  }

  document.getElementById("msgReopened").classList.add("show");
  document.getElementById("reopenForm").classList.remove("show");

  const badge = document.getElementById("statusBadge");
  badge.textContent = "En evaluación";
  badge.classList.remove("atendido");
}
