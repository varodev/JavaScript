window.onload = iniciar;

let fotos = ["img/foto2.jpg", "img/foto3.jpg", "img/foto4.jpg", "img/foto5.jpg", "img/foto6.jpg", "img/foto2.jpg"];


function iniciar() {
    console.log("dentro");
    console.log(fotos);
    let imagenes = document.querySelectorAll("div.image img")
    console.log(imagenes);
    for (let i = 0; i < imagenes.length; i++) {
        console.log(i);
        imagenes[i].setAttribute("src", fotos[i]);
    }
}

function cambiarFoto(event) {

    let fotoMini = event.target.getAttribute("src")
    console.log(fotoMini);
    event.target.setAttribute("class", "activa")
    document.querySelector("#fotoGrande").setAttribute("src", fotoMini);
    let imagenes = document.querySelectorAll("div.image img");

    for (let i = 0; i < imagenes.length; i++) {
        //console.log(i);
        imagenes[i].setAttribute("class", " ");
    }

    event.target.setAttribute("class", "activa");
}

function cambiarOpacidad(event) {
    //let FotoMini = event.target.setAttribute("class", "opacidad");
    let fotoMini = event.target.getAttribute("class");
    console.log(fotoMini);
    if (fotoMini == "activa") {
        event.target.setAttribute("class", "activa opacidad");
    } else {
        event.target.setAttribute("class", "opacidad");
    }
}

function quitarOpacidad(event) {
    let fotoMini = event.target.getAttribute("class");
    console.log(fotoMini);
    if (fotoMini == "activa") {
        event.target.setAttribute("class", "activa");
    } else if (fotoMini == "activa opacidad") {
        event.target.setAttribute("class", "activa");

    } else {
        event.target.setAttribute("class", " ");
    }

}



/*Creamos un js para cargar 6 imagenes debajo de una imagen principal
 1. Guardamos las imagenes en un array (FOTOS)
 2. Hacemos una funcion donde creamos una variable let imagenes, que hace referencia al array de let fotos
 y  le damos el document.querySelectorall y le decimos que busque las imagenes que tiene en el div - image -img (carpeta)
 3. Creamos un bucle for para recorrer el array de las fotos y usamos el set para seleccionarlas
 4. Luego hay una historia muy curiosa sobre los eventos. 
    Durante el ejercicio, se ha usado la funcion activar , para poner un recuadro negro cuando estamos sobre una foto.
    Quitar opacidad para que no se ponga opaco cuando nos quitemos de encima de la imagen y cambiar opacidad, para poner
    en las imagenes cuando queremos que la imagen sea opaca, cuando no y cuando queremos que seponga un recuadro. */


/*Set atribute sobreescribe todo*/