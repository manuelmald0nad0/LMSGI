const galeria = document.getElementsByClassName("imagen");
const button1 = document.getElementById("boton");
const button2 = document.getElementById("boton2");
const button3 = document.getElementById("boton3");

button1.addEventListener("click", function(){fboton (0)});
button2.addEventListener("click", function(){fboton (1)});
button3.addEventListener("click", function(){fboton (2)});

function fboton(index){
    for(i = 0; i < galeria.length; i++){
       galeria[i].style.display = "none";
    }
    
    galeria[index].style.display = "block";
}

