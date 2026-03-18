const inputTarea = document.getElementById("lista");
const botonTarea = document.getElementById("agregar");
const listaTarea = document.getElementById("tareaList");

botonTarea.addEventListener("click", agregarTarea);

function agregarTarea(){
    const liTarea = document.createElement("li");
    liTarea.textContent = inputTarea.value;
    const botonBorrar = document.createElement("button");
    botonBorrar.textContent ="X";
    listaTarea.appendChild(liTarea);
    liTarea.appendChild(botonBorrar);

    botonBorrar.addEventListener("click", function() {
        borrarTarea(liTarea);
    });
}

function borrarTarea(){
    liTarea.parentElement.remove();
}