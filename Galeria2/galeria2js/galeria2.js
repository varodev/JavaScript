window.onload = iniciar;

let fotos = ["img/foto2.jpg", "img/foto3.jpg", "img/foto4.jpg", "img/foto5.jpg", "img/foto6.jpg", "img/foto2.jpg"];


function iniciar() {
    //console.log("dentro");
    //console.log(fotos);
    let imagenes = document.querySelectorAll("div.image img")
        // console.log(imagenes);
    for (let i = 0; i < imagenes.length; i++) {
        //console.log(i);
        imagenes[i].setAttribute("src", fotos[i]);
    }
}