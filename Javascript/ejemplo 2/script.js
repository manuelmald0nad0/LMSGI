function cambiarColor() {
    const cuadrado = document.getElementById("cuadrado");
    cuadrado.style.backgroundColor = "green";
    cuadrado.style.width = "300px";
    document.body.style.backgroundColor = "grey"
}
function ocultar() {
    const cuadrado = document.getElementById("cuadrado");
    cuadrado.style.display = "none";
}

function modoNoche() {
    const texto = document.getElementById("texto");
    texto.style.color = "white";
    document.body.style.backgroundColor = "black";
}

function colorTexto() {
    const texto = document.getElementById("texto");
    texto.style.color = "white";
}