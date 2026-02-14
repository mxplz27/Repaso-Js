/* =========================
   ACTIVIDAD 3 – ARRAYS
========================= */

// Arrays dados
var baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
var baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

// Unir arrays
var todosLosPaises = baseDatos1.concat(baseDatos2);

/* Buscar país escrito por el usuario */
function buscarPais() {
  var pais = document.getElementById("pais").value.trim();
  var resultado = document.getElementById("resultadoPais");

  if (pais === "") {
    resultado.innerHTML = "⚠️ Escriba un país";
    return;
  }

  if (todosLosPaises.includes(pais)) {
    resultado.innerHTML = "✅ El país <b>" + pais + "</b> SÍ existe en la base de datos";
  } else {
    resultado.innerHTML = "❌ El país <b>" + pais + "</b> NO existe en la base de datos";
  }
}

/* Mostrar todos los países */
function mostrarPaises() {
  document.getElementById("listaPaises").innerHTML =
    todosLosPaises.join(" - ");
}
