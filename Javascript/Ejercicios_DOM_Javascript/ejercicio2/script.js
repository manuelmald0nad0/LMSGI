const button = document.getElementById("color");

button.addEventListener("click", cambiarColor);

function cambiarColor() {
    const cuadrado = document.getElementById("caja");
    cuadrado.style.backgroundColor = "green";
    cuadrado.style.color = "white";
}