// HU15 - Escenario 1: Primera vez en zona roja (>65 dB) muestra modal automático
function closeModal() {
  document.getElementById("firstTimeModal").classList.add("hide");
}

// HU15 - Escenario 2: Consulta voluntaria del artículo "Efectos cardiovasculares"
function openArticle() {
  const articleBox = document.getElementById("articleBox");
  articleBox.classList.toggle("show");
}
