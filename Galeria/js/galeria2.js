let fotos = ["img/cuadro1.jpg", "img/cuadro2.jpg","img/cuadro3.jpg","img/cuadro4.jpg"];

let numFoto = 0;

function pasoAdelante(){
    let fotogrande = document.getElementById("fotogrande");
    //console.log(numFoto);
    
    if (numFoto >= fotos.length -1){
        
        numFoto = 0;
    }
    else {
        numFoto++
    }
    //console.log(numFoto);
    fotogrande.setAttribute("src", fotos[numFoto]);
}

function pasoAtras(){
    let fotogrande = document.getElementById("fotogrande");
    //console.log(numFoto);
    
    if (numFoto <= 0){
        numFoto = fotos.length -1;
    }
    else {
        numFoto--
    }
    //console.log(numFoto);
    fotogrande.setAttribute("src", fotos[numFoto]);
}