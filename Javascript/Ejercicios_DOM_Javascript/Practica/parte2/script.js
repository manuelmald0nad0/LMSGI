const numero= document.getElementById("numero");
const bsumar = document.getElementById("sumar");
const brestar = document.getElementById("restar");
const breset = document.getElementById("reset");

let valor = localStorage.getItem("valor");
numero.textContent = valor;

bsumar.addEventListener("click", sumar);
brestar.addEventListener("click", restar);
breset.addEventListener("click", reset);

function sumar(){
  valor++;
  localStorage.setItem("valor",valor);
  numero.textContent = valor;
}

function restar(){
  valor--;
  localStorage.setItem("valor",valor);
  numero.textContent = valor;
}

function reset(){
  valor = 0;
  localStorage.setItem("valor", valor);
  numero.textContent = valor;
}

