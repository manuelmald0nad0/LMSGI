const tareas = document.getElementById("lista");
const button = document.getElementById("agregar");

button.addEventListener('click', agregar);

function agregar(){
    const ptarea = document.createElement("p");
    const node = document.createTextNode(entrada.value);
    ptarea.appendChild(node);
    tareas.appendChild(ptarea);
}
