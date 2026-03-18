let contador = 0;
const numero = document.getElementById("area")
const button1 = document.getElementById("boton");
const button2 = document.getElementById("boton2");
const button3 = document.getElementById("boton3");

button1.addEventListener("click", sumar);
button2.addEventListener("click", restar);
button3.addEventListener("click", reset);

function sumar(){
    contador++;
    numero.textContent = contador;
}

function restar(){
    contador--;
    numero.textContent = contador;
}

function reset(){
    contador = 0;
    numero.textContent = contador;
}