// Create an Object
const person = {
  name: "Juan Carlos Valencia",
  age: 30,
  city: "Cali",
  profession: "Desarrollador"
};

// Function Destructuring
function mostrarDatos() {

  // Destructuring con cambio de nombre de variable
  let { name: nombre, age: edad, profession: profesion } = person;

  // Display Values
  document.getElementById("demo").innerHTML = `
    <strong>Nombre:</strong> ${nombre} <br>
    <strong>Edad:</strong> ${edad} <br>
    <strong>Profesión:</strong> ${profesion}
  `;
}