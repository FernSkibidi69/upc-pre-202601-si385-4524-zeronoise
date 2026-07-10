// HU25 - Escenario 1: Lugar seguro (nueva zona recomendada)
function recomendarZona() {
  const lista = document.getElementById("zonasLista");
  const nueva = document.createElement("div");
  nueva.className = "zona-recomendada";
  nueva.dataset.confirmaciones = "1";
  nueva.innerHTML = `
    <h5>Tu ubicación actual</h5>
    <p>Promedio aproximado: 45 dB</p>
    <span>Recomendada recién por ti.</span>
    <div class="confirmacion-row">
      <span class="confirmacion-count">1 / 5 confirmaciones</span>
      <button onclick="confirmarZona(this)">Confirmar</button>
    </div>
  `;
  lista.prepend(nueva);

  const msg = document.getElementById("msgRecomendada");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 2500);
}

// HU25 - Escenario 2: Confirmación comunitaria (al llegar a 5, se valida la zona)
function confirmarZona(btn) {
  const zona = btn.closest(".zona-recomendada");
  let count = parseInt(zona.dataset.confirmaciones, 10) + 1;
  zona.dataset.confirmaciones = count;

  const label = zona.querySelector(".confirmacion-count");
  label.textContent = `${count} / 5 confirmaciones`;

  if (count >= 5) {
    zona.classList.add("validada");
    label.textContent = "✔ Validada por la comunidad";
    btn.disabled = true;
  }
}
