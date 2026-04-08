const button = document.getElementById("agregar");
const lista = document.getElementById("lista");
let contador = 2;

button.addEventListener("click", agregarTarea)

function agregarTarea(){
    const li = document.createElement('li');
    contador++;
    li.textContent = "Elemento " + contador;
    lista.appendChild(li);  

    li.addEventListener("click", function(){
        li.remove();
    });
}