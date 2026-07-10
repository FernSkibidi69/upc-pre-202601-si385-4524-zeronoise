// HU53 - Escenario 1: Consulta del panel (rango de fechas)
function applyDateFilter() {
  // Simula recalcular las métricas según el rango de fechas seleccionado
  const from = document.getElementById("dateFrom").value;
  const to = document.getElementById("dateTo").value;

  // Valores simulados (podrían variar según el rango elegido)
  document.getElementById("reopenPct").textContent = "14%";
  document.getElementById("totalReports").textContent = "312";
}

// HU53 - Escenario 2: Ranking por inspector (mayor % de reportes reabiertos)
function toggleRanking() {
  const panel = document.getElementById("rankingPanel");
  panel.classList.toggle("show");
}
