function actualizarUmbral(){
  const umbral = document.getElementById('umbral');
  document.getElementById('valorUmbral').textContent = umbral.value + ' dB';
}

function guardarAlertas(){
  const msg = document.getElementById('msgGuardado');
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 2500);
}

// HU14 - Escenario 1: Superación de límite (alerta visible)
// HU14 - Escenario 2: Evitar falsas alertas (horario "No molestar" -> solo registro)
function simularRuido(db, esNoche){
  const umbral = parseInt(document.getElementById('umbral').value, 10);
  const alertasActivas = document.getElementById('activarAlertas').checked;

  document.getElementById('alertaItem').style.display = 'none';
  document.getElementById('logSilencioso').style.display = 'none';

  if(!alertasActivas || db <= umbral) return;

  if(esNoche){
    document.getElementById('logSilencioso').style.display = 'block';
  } else {
    document.getElementById('alertaDescripcion').textContent =
      `Se registraron ${db} dB, superando el umbral de ${umbral} dB.`;
    document.getElementById('alertaHora').textContent =
      'Última alerta: ' + new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('alertaItem').style.display = 'flex';

    const lista = document.getElementById('historialAlertas');
    const li = document.createElement('li');
    li.textContent = `Umbral superado: ${db} dB a las ${new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}`;
    lista.prepend(li);
  }
}