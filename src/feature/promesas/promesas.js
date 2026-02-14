function validarVocal(cadena) {
  return new Promise(function(resolve, reject) {
    if (!cadena || cadena.length === 0) {
      reject("La cadena está vacía");
      return;
    }

    // Obtener la última letra
    var ultimaLetra = cadena.charAt(cadena.length - 1);

    // Validar vocal (mayúscula o minúscula)
    if (/[aeiou]/i.test(ultimaLetra)) {
      resolve("La palabra termina en la vocal: " + ultimaLetra);
    } else {
      reject("La palabra no termina en una vocal");
    }
  });
}

function probar() {
  var palabra = document.getElementById("palabra").value;

  // Alerta si el campo está vacío
  if (palabra === "") {
    alert("Debe llenar el campo para saber si es una vocal");
    return;
  }

  validarVocal(palabra)
    .then(function(resultado) {
      // Mostrar en el div en lugar de alert
      document.getElementById("resultadoPromesa").textContent = resultado;
    })
    .catch(function(error) {
      document.getElementById("resultadoPromesa").textContent = error;
    });
}