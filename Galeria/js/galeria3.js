let fotos = ["img/cuadro1.jpg", "img/cuadro2.jpg","img/cuadro3.jpg","img/cuadro4.jpg"];

let numFoto = 0;

function cambiarfoto(boton){
    let fotogrande = document.getElementById("fotogrande");
    if (boton == "adelante"){
        if (numFoto >= fotos.length -1){
        
            numFoto = 0;
        }
        else {
            numFoto++
        }
    }
    else {
        if (numFoto <= 0){
            numFoto = fotos.length -1;
        }
        else {
            numFoto--
        }
    }
    fotogrande.setAttribute("src", fotos[numFoto]);
}