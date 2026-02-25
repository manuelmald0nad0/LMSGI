const tareas = document.getElementById("tareas");
const button = document.getElementById("agregar");

button.addEventListener('click', agregar);

function agregar(){
    const ptarea = document.createElement("p");
    const node = document.createTextNode("Comprar el pan");
    ptarea.appendChild(node);
    tareas.appendChild(ptarea);
}