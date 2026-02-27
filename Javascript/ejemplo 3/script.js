const tareas = document.getElementById("tareas");
const button = document.getElementById("agregar");
const entrada = document.getElementById("entrada");
const bborrar = document.getElementById("borrar");
const bcambiarcolor = document.getElementById("cambiarcolor");

button.addEventListener('click', agregar);
bcambiarcolor.addEventListener('click', cambiarcolor);

function color(){
    const listatareali = document.querySelectorAll("li");
    for (let i=0; i<listatareali.length; i++){
        listatareali[i].style.color="red";
    }
}

function agregar(){
    const ptarea = document.createElement("p");
    const node = document.createTextNode(entrada.value);
    ptarea.appendChild(node);
    tareas.appendChild(ptarea);

    const enlace = document.createElement("a");
    const node2 = document.createTextNode("Enlace a..");
    enlace.appendChild(node2);
    enlace.setAttribute("href", "https://www.ieszaidinvergeles.org");

    const image = document.createElement("img");
    tareas.appendChild(image);
    image.setAttribute("src" , "peter griffin.png")

    ptarea.appendChild(enlace);
}

function borrar(){
    ptarea.remove();
}