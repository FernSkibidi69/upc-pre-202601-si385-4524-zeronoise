let medicionInterval = null;
let movimientoInterval = null;

// ===== HU01: Medición instantánea =====
// Escenario 1: Medición exitosa del nivel de ruido
function iniciarMedicion() {
  const btn = document.getElementById("btnIniciar");
  btn.disabled = true;
  btn.textContent = "Midiendo...";

  medicionInterval = setInterval(() => {
    const db = Math.floor(30 + Math.random() * 65);
    actualizarMedidor(db);
    agregarHistorial(db);
  }, 1500);
}

function detenerMedicion() {
  clearInterval(medicionInterval);
  const btn = document.getElementById("btnIniciar");
  btn.disabled = false;
  btn.textContent = "Iniciar Medición";
}

function actualizarMedidor(db) {
  const nivel = document.getElementById("medidorNivel");
  const valor = document.getElementById("medidorValor");
  const estado = document.getElementById("medidorEstado");

  const pct = Math.min(db, 100);
  nivel.style.width = pct + "%";
  valor.textContent = db + " dB";

  let color, texto;
  if (db < 55) {
    color = "#82e0aa";
    texto = "Tranquilo";
  } else if (db < 71) {
    color = "#f9e79f";
    texto = "Moderado";
  } else if (db <= 85) {
    color = "#f5b041";
    texto = "Ruido alto";
  } else {
    color = "#ec7063";
    texto = "Crítico";
  }

  nivel.style.backgroundColor = color;
  estado.textContent = texto;
}

function agregarHistorial(db) {
  const lista = document.getElementById("historialLista");
  const li = document.createElement("li");
  li.textContent = db + " dB";
  lista.prepend(li);
  if (lista.children.length > 5) lista.removeChild(lista.lastChild);
}

// ===== HU07: Medición continua en movimiento =====
// Escenario 1: Modo monitoreo activado (actualiza cada 2 segundos)
const zonasSimuladas = [
  { nombre: "Avenida principal", dbMin: 65, dbMax: 88 },
  { nombre: "Zona residencial", dbMin: 38, dbMax: 55 },
  { nombre: "Centro comercial", dbMin: 70, dbMax: 90 },
  { nombre: "Parque urbano", dbMin: 35, dbMax: 50 },
];

let bateriaSimulada = 100;

function clasificarEstado(db) {
  if (db < 55) return { texto: "Zona tranquila", color: "#2ecc71" };
  if (db < 71) return { texto: "Ruido moderado", color: "#f1c40f" };
  if (db <= 85) return { texto: "Ruido alto", color: "#f7dc6f" };
  return { texto: "Ruido crítico", color: "#ec7063" };
}

function iniciarMonitoreoContinuo() {
  movimientoInterval = setInterval(() => {
    // Simula desplazamiento a una zona aleatoria
    const zona =
      zonasSimuladas[Math.floor(Math.random() * zonasSimuladas.length)];
    const db = Math.floor(
      zona.dbMin + Math.random() * (zona.dbMax - zona.dbMin)
    );
    const estado = clasificarEstado(db);

    document.getElementById("nivelActual").textContent = db + " dB";
    document.querySelector(".dato-medicion:nth-child(3) strong").textContent =
      zona.nombre;

    const estadoAlerta = document.querySelector(".estado-alerta");
    estadoAlerta.textContent = estado.texto;
    estadoAlerta.style.color = estado.color;

    // Escenario 2: Desactivación por batería baja
    bateriaSimulada -= 3;
    if (bateriaSimulada <= 15) {
      mostrarAvisoBateria();
      detenerMonitoreoContinuo();
    }
  }, 2000);
}

function detenerMonitoreoContinuo() {
  clearInterval(movimientoInterval);
  document.getElementById("estadoTexto").textContent =
    "Medición continua desactivada";
  document.querySelector(".punto-activo").style.backgroundColor = "#95a5a6";
}

function mostrarAvisoBateria() {
  const panel = document.querySelector(".medicion-panel");
  const aviso = document.createElement("div");
  aviso.className = "aviso-bateria";
  aviso.textContent =
    "🔋 Batería baja (15%). Se recomienda desactivar el monitoreo continuo.";
  panel.appendChild(aviso);
}

// Inicia automáticamente el monitoreo al cargar la sección
iniciarMonitoreoContinuo();
