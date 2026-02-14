var formulario = document.getElementById("formulario");
var tabla = document.getElementById("tablaDatos");
var datos = JSON.parse(localStorage.getItem("datos")) || [];
mostrarDatos();

formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  var nombre = document.getElementById("nombre").value;
  var documento = document.getElementById("documento").value;
  var correo = document.getElementById("correo").value.trim().toLowerCase();
  var indice = document.getElementById("indice").value;

  // Limpiar errores
  errorNombre.innerHTML = "";
  errorDocumento.innerHTML = "";
  errorCorreo.innerHTML = "";

  var valido = true;

  if (nombre.length < 3) {
    errorNombre.innerHTML = "Nombre muy corto";
    valido = false;
  }

  if (documento == "") {
    errorDocumento.innerHTML = "Ingrese documento";
    valido = false;
  }

  if (correo == "" || correo.indexOf("@") == -1) {
    errorCorreo.innerHTML = "Correo no válido";
    valido = false;
  }

  if (!valido) return;

  // ✅ VALIDAR CORREO Y DOCUMENTO ÚNICOS
  var correoRepetido = false;
var documentoRepetido = false;

datos.forEach(function (d, i) {

  if (i === parseInt(indice)) return;

  if (d.correo === correo) {
    correoRepetido = true;
  }

  if (d.documento === documento) {
    documentoRepetido = true;
  }
});

if (correoRepetido) {
  errorCorreo.innerHTML = "Este correo ya está registrado";
}

if (documentoRepetido) {
  errorDocumento.innerHTML = "Este documento ya está registrado";
}

if (correoRepetido || documentoRepetido) {
  return;
}


  // 🔥 AGREGADO: GUARDAR O EDITAR (SIN CAMBIAR TU ESTRUCTURA)
  if (indice === "") {
    datos.push({ nombre: nombre, documento: documento, correo: correo });
  } else {
    datos[indice] = { nombre: nombre, documento: documento, correo: correo };
  }

  localStorage.setItem("datos", JSON.stringify(datos));

  formulario.reset();
  mostrarDatos();
});

function mostrarDatos() {
  tabla.innerHTML = "";

  for (var i = 0; i < datos.length; i++) {
    tabla.innerHTML += `
      <tr>
        <td>${datos[i].correo}</td>
        <td>${datos[i].nombre}</td>
        <td>${datos[i].documento}</td>
        <td>
          <button class="btn btn-warning btn-sm me-1" onclick="editar(${i})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminar(${i})">Eliminar</button>
        </td>
      </tr>
    `;
  }
}

function editar(i) {
  nombre.value = datos[i].nombre;
  documento.value = datos[i].documento;
  correo.value = datos[i].correo;
  indice.value = i;
}

function eliminar(i) {
  if (confirm("¿Borra este registro?")) {
    datos.splice(i, 1);
    localStorage.setItem("datos", JSON.stringify(datos));
    mostrarDatos();
  }
}

// BORRAR TODO
function borrarTodo() {
  if (confirm("¿Borrar todos los registros?")) {
    datos = [];
    localStorage.removeItem("datos");
    mostrarDatos();
  }
}

/* EXPORTAR JSON */
function exportarJSON() {
  var texto = JSON.stringify(datos, null, 2);
  var blob = new Blob([texto], { type: "application/json" });
  var enlace = document.createElement("a");

  enlace.href = URL.createObjectURL(blob);
  enlace.download = "datos.json";
  enlace.click();
}

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

/* 🔥 AGREGADO: CONECTAR BOTONES DEL NAVBAR */
var btnExportar = document.getElementById("btnExportar");
if (btnExportar) {
  btnExportar.addEventListener("click", exportarJSON);
}

var btnBorrarTodo = document.getElementById("btnBorrarTodo");
if (btnBorrarTodo) {
  btnBorrarTodo.addEventListener("click", borrarTodo);
}
