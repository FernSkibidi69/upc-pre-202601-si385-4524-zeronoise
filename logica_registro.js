const vistaLogin = document.getElementById('vista-login');
const vistaRegistro = document.getElementById('vista-registro');

const navIrLogin = document.getElementById('nav-ir-login');
const navIrRegistro = document.getElementById('nav-ir-registro');

const linkSwitchReg = document.getElementById('link-switch-reg');
const linkSwitchLog = document.getElementById('link-switch-log');

function mostrarLogin() {
  vistaRegistro.style.display = 'none';
  vistaLogin.style.display = 'block';
  navIrLogin.classList.add('active');
  navIrRegistro.classList.remove('active');
}

function mostrarRegistro() {
  vistaLogin.style.display = 'none';
  vistaRegistro.style.display = 'block';
  navIrRegistro.classList.add('active');
  navIrLogin.classList.remove('active');
}

// Eventos de los botones del panel izquierdo
navIrLogin.addEventListener('click', mostrarLogin);
navIrRegistro.addEventListener('click', mostrarRegistro);

// Eventos de los enlaces rápidos inferiores
linkSwitchReg.addEventListener('click', (e) => { e.preventDefault(); mostrarRegistro(); });
linkSwitchLog.addEventListener('click', (e) => { e.preventDefault(); mostrarLogin(); });

// Simulación funcional formularios
document.getElementById('form-registro').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Cuenta ciudadana creada con éxito! Procede a iniciar sesión.');
  mostrarLogin();
});

document.getElementById('form-login').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Inicio de sesión correcto! Redirigiendo a NoiseGuard...');
  localStorage.setItem('ciudadanoLogueado', 'true');
  window.location.href = 'index.html';
});
