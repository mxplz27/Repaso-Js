function obtenerUsuarioPorId(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const usuarios = [
                {id: 1, nombre: "Ana", rol: "Aprendiz"},
                {id: 2, nombre: "Carlos", rol: "Instructor"}
            ];

            const usuario = usuarios.find(u => u.id === id);

            if (usuario) {
                resolve(usuario);                                
            }else{
                reject(new Error("Usuario no encontrado"));
            }
        }, 3000);
    });
}

async function mostrarUsuario(id) {
    const resultado = document.getElementById("resultado");

    try {
        resultado.innerHTML = "⏳ Buscando usuario...";

        const usuario = await obtenerUsuarioPorId(id);
        
        resultado.innerHTML = 
            "✅ Usuario encontrado:<br>" +
            "Nombre: " + usuario.nombre + "<br>" +
            "Rol: " + usuario.rol;

        resultado.className = "text-success fw-bold";

    } catch (error) {

        resultado.innerHTML = "❌ " + error.message;
        resultado.className = "text-danger fw-bold";

    } finally{
        console.log("Proceso Terminado");
    }
}

// Función que toma el valor del input
function buscarUsuario() {
    const id = Number(document.getElementById("idUsuario").value);
    mostrarUsuario(id);
}
