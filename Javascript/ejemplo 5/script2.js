let diapositivaActual = 0;
const galeria = document.getElementsByClassName("imagen");
mostrarGaleria();

function mostrarGaleria(){

    for(i = 0; i < galeria.length; i++){
       galeria[i].style.display = "none";
    }
    galeria[diapositivaActual].style.display ="block";
    diapositivaActual++;

    if(diapositivaActual >= galeria.length){
        diapositivaActual = 0;
    }
    setTimeout(mostrarGaleria, 2000)
}