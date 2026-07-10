// ===================================================
// Cuentas de funcionario municipal pre-creadas (demo)
// No se registran desde el formulario porque no se
// cuenta con acceso real a correos @muni.gob.pe
// ===================================================
const cuentasFuncionarioDemo = {
  "ana.torres@muni.gob.pe": { password: "12345678", nombre: "Ana Torres" },
  "carlos.ramirez@muni.gob.pe": {
    password: "12345678",
    nombre: "Carlos Ramírez",
  },
};

// Cuenta ciudadana demo para pruebas rápidas
const cuentasCiudadanoDemo = {
  "ana.torres@gmail.com": { password: "12345678", nombre: "Ana Torres" },
};

// Combina cuentas demo + cuentas registradas por el usuario (localStorage)
function obtenerCuenta(rol, correo) {
  const registradas = JSON.parse(
    localStorage.getItem("noiseguard_accounts") || "{}"
  );
  const registradasRol = registradas[rol] || {};
  const demoRol =
    rol === "ciudadano" ? cuentasCiudadanoDemo : cuentasFuncionarioDemo;

  return registradasRol[correo] || demoRol[correo] || null;
}

function guardarCuenta(rol, correo, password, nombre) {
  const cuentas = JSON.parse(
    localStorage.getItem("noiseguard_accounts") || "{}"
  );
  if (!cuentas[rol]) cuentas[rol] = {};
  cuentas[rol][correo] = { password, nombre };
  localStorage.setItem("noiseguard_accounts", JSON.stringify(cuentas));
}

function saveSession(rol, nombre, correo) {
  sessionStorage.setItem(
    "noiseguard_session",
    JSON.stringify({ rol, nombre, correo })
  );
}

function getSession() {
  const raw = sessionStorage.getItem("noiseguard_session");
  return raw ? JSON.parse(raw) : null;
}

function clearSession() {
  sessionStorage.removeItem("noiseguard_session");
}

function requireRole(rolEsperado) {
  const session = getSession();
  if (!session || session.rol !== rolEsperado) {
    window.location.href = "iniciar_sesion.html";
    return null;
  }
  return session;
}

function getIniciales(nombre) {
  return nombre
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
