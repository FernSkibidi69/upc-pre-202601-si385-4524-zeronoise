const vistaRegistro = document.getElementById('vista-registro');
const vistaLogin = document.getElementById('vista-login');
const linkIrLogin = document.getElementById('link-ir-login');
const linkIrRegistro = document.getElementById('link-ir-registro');

// Intercambio de vistas (Registro <-> Login)
if (linkIrLogin && linkIrRegistro) {
  linkIrLogin.addEventListener('click', (e) => {
    e.preventDefault();
    vistaRegistro.style.display = 'none';
    vistaLogin.style.display = 'block';
  });

  linkIrRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    vistaLogin.style.display = 'none';
    vistaRegistro.style.display = 'block';
  });
}

// Acción al enviar el formulario de Registro
document.getElementById('form-registro').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Cuenta ciudadana creada con éxito! Procede a iniciar sesión.');
  
  // Tras registrar, lo lleva automáticamente a la pantalla de Login
  vistaRegistro.style.display = 'none';
  vistaLogin.style.display = 'block';
});

// Acción al enviar el formulario de Login
document.getElementById('form-login').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Inicio de sesión correcto! Redirigiendo a la plataforma NoiseGuard...');
  
  // Guarda un estado en la sesión del navegador para simular la persistencia
  localStorage.setItem('ciudadanoLogueado', 'true');
  
  // Redirecciona al usuario a la landing page principal automáticamente
  window.location.href = 'index.html';
});
