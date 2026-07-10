// HU38 - Escenario 1: Métrica mensual (tiempo promedio de asignación)
// Ya renderizado estáticamente en el HTML: 2.3 días

// HU38 - Escenario 2: Benchmark comparativo entre distritos
function toggleBenchmark() {
  const checked = document.getElementById("benchmarkToggle").checked;
  document.getElementById("benchmarkPanel").classList.toggle("show", checked);
}
