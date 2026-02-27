const numeroSecreto = Math.floor(Math.random()*11);
const boton = document.getElementById("boton");
const entrada = document.getElementById("entrada");
let intentos = 0;

boton.addEventListener("click", adivinar);

function adivinar(){
    intentos++;
    if(numeroSecreto == entrada.value){
        document.getElementById("mensaje").textContent = "Correcto, has adivinado";
    }else if (numeroSecreto < entrada.value){
        document.getElementById("mensaje").textContent = "El numero es menor";
    }else{
        document.getElementById("mensaje").textContent = "El numero es mayor";
    }
    document.getElementById("intentos").textContent="El numero de intentos es:" + intentos; 
}