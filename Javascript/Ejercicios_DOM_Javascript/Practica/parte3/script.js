const principio = document.getElementById("principal");
const btn = document.getElementById("boton");

btn.addEventListener("click", añadir);

function añadir(){
    let imagen = document.createElement("img");
    imagen.setAttribute("src", "imagen.png");
    imagen.setAttribute("width", "100px");
    imagen.setAttribute("height", "100px");
    principio.appendChild(imagen);
}