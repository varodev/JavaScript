window.onload = iniciar;

let fotos = ["images/foto1.jpg, images/foto2.jpg, images/foto3.jpg, images/foto4.jpg, images/foto5.jpg, images/foto6.jpg"];

function iniciar() {
    //console.log("fotos");

    let imagenes = document.querySelectorAll("div.image images")

    //console.log(imagemes);

    for (let i = 0; i < imagenes.length; i++) {
        //console.log(i);
        imagenes[i].setAttribute("src", fotos[i]);
    }
}

function cambiarfoto(event) {
    let fotomini = event.target.getAttribute("src");
    //console.log("dentro click");
    document.querySelector("#fotoprincipal").setAttribute("src", fotomini);

    let imagenes = document.querySelectorAll("div.image images")

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].setAttribute("class", " ");
    }
    event.target.setAttribute("class", "activa")

}

function cambiarOpacidad(event) {
    let mini = event.target.setAttribute("class", "opacidad");

    if (mini == "activa") {
        event.target.setAttribute("class", "activa opacidad");

    } else {
        event.target.setAttribute("class", "opacidad")
    }
}

function quitarOpacidad(event) {
    let mini = event.target.setAttribute("class", "opacidad");

    if (mini == "activa opacidad") {
        event.target.setAttribute("class", "activa");

    } else if (mini == "activa opacidad") {
        event.target.setAttribute("class", "activa")
    } else {
        event.target.setAttribute("class", " ")
    }

}