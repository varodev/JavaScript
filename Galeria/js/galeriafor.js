window.onload = iniciar;

function iniciar(){
    let fotos = ["img/cuadro1.jpg", "img/cuadro2.jpg","img/cuadro3.jpg","img/cuadro4.jpg"];
    let imagenes = document.querySelectorAll("div.imagenes img");
    //console.log(imagenes[0].getAttribute("alt"));
    for (let i = 0; i < fotos.length; i++){
        console.log(i);
        console.log(fotos[i]);
        imagenes[i].setAttribute("src", fotos[i]);
    }
}