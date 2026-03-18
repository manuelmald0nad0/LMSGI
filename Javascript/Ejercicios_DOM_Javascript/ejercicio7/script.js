const button = document.getElementById("boton")
const entrada = document.getElementById("nombre")

button.addEventListener('click', alertar)

function alertar(evento){
    evento.preventDefault
    if(entrada.value == ""){
        alert("El campo no puede estar vacio")
    }
}