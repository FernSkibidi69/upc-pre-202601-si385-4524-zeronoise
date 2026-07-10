// Lista simulada de funcionarios municipales
const officials = [
  { name: "Carlos Ramírez", email: "carlos.ramirez@gmail.com", role: null },
  {
    name: "Lucía Fernández",
    email: "lucia.fernandez@gmail.com",
    role: "analista",
  },
  { name: "Jorge Salas", email: "jorge.salas@gmail.com", role: null },
  { name: "Marta Vega", email: "marta.vega@gmail.com", role: "jefe" },
];

const roleLabels = {
  inspector: "Inspector de campo",
  analista: "Analista de datos",
  jefe: "Jefe de fiscalización",
};

let selectedIndex = null;

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function renderUsers() {
  const list = document.getElementById("usersList");
  list.innerHTML = officials
    .map(
      (u, i) => `
      <div class="user-item" onclick="openPanel(${i})">
        <div class="user-info">
          <div class="user-avatar">${initials(u.name)}</div>
          <div>
            <div class="user-name">${u.name}</div>
            <div class="user-email">${u.email}</div>
          </div>
        </div>
        <span class="role-tag ${u.role ? "" : "none"}">${
        u.role ? roleLabels[u.role] : "Sin rol"
      }</span>
      </div>
    `
    )
    .join("");
}

function openPanel(index) {
  selectedIndex = index;
  document.getElementById("selectedUserName").textContent =
    officials[index].name;
  document.getElementById("roleSelect").value = officials[index].role || "";
  document.getElementById("msgRoleError").classList.remove("show");
  document.getElementById("msgRoleSuccess").classList.remove("show");
  document.getElementById("assignPanel").classList.add("show");
}

function closePanel() {
  document.getElementById("assignPanel").classList.remove("show");
  selectedIndex = null;
}

// HU28 - Escenario 1: Asignación de rol exitosa
// HU28 - Escenario 2: Asignación de rol fallida (sin selección)
function assignRole() {
  const roleSelect = document.getElementById("roleSelect");
  const msgError = document.getElementById("msgRoleError");
  const msgSuccess = document.getElementById("msgRoleSuccess");

  msgError.classList.remove("show");
  msgSuccess.classList.remove("show");

  if (roleSelect.value === "" || selectedIndex === null) {
    msgError.classList.add("show");
    return;
  }

  officials[selectedIndex].role = roleSelect.value;
  msgSuccess.classList.add("show");
  renderUsers();
}

renderUsers();
