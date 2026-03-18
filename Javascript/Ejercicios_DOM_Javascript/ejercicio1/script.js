const frase = document.getElementById("texto");
const button = document.getElementById("btn");

button.addEventListener("click", cambiar);

function cambiar(){
    frase.textContent = "Texto cambiado con JavaScript";
}