// HU18 - Escenario 1: Evidencia visual (foto vinculada al reporte)
function simularFoto() {
  const preview = document.getElementById("preview");
  preview.classList.add("show");
  preview.innerHTML = `
    <div class="attachment-row">
      <div class="attachment-thumb">📷</div>
      <div>
        <div class="attachment-name">foto_evidencia_001.jpg</div>
        <div class="attachment-meta">Vinculada al reporte actual</div>
        <span class="attachment-badge">Adjuntada correctamente</span>
      </div>
    </div>
  `;
}

// HU18 - Escenario 2: Ruido intermitente (video 10s con dB promedio extraído)
function simularVideo() {
  const preview = document.getElementById("preview");
  const dbPromedio = Math.floor(60 + Math.random() * 30);
  preview.classList.add("show");
  preview.innerHTML = `
    <div class="attachment-row">
      <div class="attachment-thumb">🎥</div>
      <div>
        <div class="attachment-name">video_evidencia_001.mp4 (10s)</div>
        <div class="attachment-meta">Nivel promedio extraído: <span class="db-extract">${dbPromedio} dB</span></div>
        <span class="attachment-badge">Video guardado</span>
      </div>
    </div>
  `;
}

// Carga de archivo real desde el input
function cargarArchivo() {
  const input = document.getElementById("archivo-evidencia");
  if (input.files.length === 0) return;

  const archivo = input.files[0];
  const esVideo = archivo.type.startsWith("video");
  const preview = document.getElementById("preview");

  preview.classList.add("show");
  preview.innerHTML = `
    <div class="attachment-row">
      <div class="attachment-thumb">${esVideo ? "🎥" : "📷"}</div>
      <div>
        <div class="attachment-name">${archivo.name}</div>
        <div class="attachment-meta">Vinculada al reporte actual</div>
        <span class="attachment-badge">Adjuntada correctamente</span>
      </div>
    </div>
  `;
}
