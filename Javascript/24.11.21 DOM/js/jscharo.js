let fotos = ["img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg", "img/foto4.jpg", "img/foto5.jpg", "img/foto6.jpg"];

//window.onload = init;

function init() {
    let div1 = document.createElement("div")
    let fotoprincipal = document.createElement("img")
    fotoprincipal.src = fotos[0]
    fotoprincipal.id = "fotoprincipal"
    div1.appendChild(fotoprincipal)
    slider.appendChild(div1)

    let div2 = document.createElement("div")
    div2.className = "image"

    for (let i = 0; i < fotos.length; i++) {
        let col = document.createElement("div")
        let imagen = document.createElement("img")
        imagen.setAttribute("src", fotos[i])
        col.appendChild(imagen)
        col.appendChild = "col-2"
        div2.appendChild(col)
            //onclick="cambiaFoto("
        imagen.setAttribute("onclick", "cambiarfoto(event);")
        imagen.setAttribute("onmouseover", "cambiarOpacidad(event);")
        imagen.setAttribute("onmouseout", "quitarOpacidad(event)")
    }
    //let galeria = document.querySelector("#slider")
    //galeria.appendChild(div1)
    //galeria.appendChild(div2)
    slider.appendChild(div1)
    slider.appendChild(div2)
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