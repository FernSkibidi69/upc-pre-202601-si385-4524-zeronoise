function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

const paginaActual = window.location.pathname.split("/").pop();

const mapaSecciones = {
  "medicion.html": "sec-medir",
  "indicador_color.html": "sec-medir",
  "notificacion_limite.html": "sec-medir",
  "mapa_colaborativo.html": "sec-mapa",
  "interaccion_mapa.html": "sec-mapa",
  "zonas_silenciosas.html": "sec-mapa",
  "mapa_criticos.html": "sec-mapa",
  "evidencia_audiovisual.html": "sec-reportes",
  "enviar_incidencia.html": "sec-reportes",
  "seguimiento_reporte.html": "sec-reportes",
  "grafico_24h.html": "sec-historial",
  "resumen_semanal.html": "sec-historial",
  "limite_legal.html": "sec-historial",
  "salud_cardiovascular.html": "sec-historial",
  "perfil.html": "sec-perfil",
  "config_preferencial.html": "sec-perfil",

  "mapa_incidencias.html": "sec-fiscalizacion",
  "asignar_inspector.html": "sec-fiscalizacion",
  "comparacion_operativo.html": "sec-fiscalizacion",
  "tablero_distrito.html": "sec-analitica",
  "mapa_calor.html": "sec-analitica",
  "grafico_fuentes.html": "sec-analitica",
  "dashboard_tiempo.html": "sec-analitica",
  "panel_satisfaccion.html": "sec-analitica",
  "asignacion_roles.html": "sec-administracion",
  "actualizar_limite_legal.html": "sec-administracion",
  "mensaje_automatico.html": "sec-comunicacion",
  "notificaciones_masivas.html": "sec-comunicacion",
};

const seccionActiva = mapaSecciones[paginaActual];

document.querySelectorAll(".side-link").forEach((link) => {
  if (link.getAttribute("href").includes("#" + seccionActiva)) {
    link.classList.add("active");
  }
});
