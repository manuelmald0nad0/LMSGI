const button = document.getElementById("toggle");
const frase = document.getElementById("mensaje");

button.addEventListener("click", ocultar);

function ocultar() {
    if (frase.style.display == 'none') {
    frase.style.display = 'block';
  } else {
    frase.style.display = 'none';
  }
}