let fotos = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg", "images/foto4.jpg", "images/foto5.jpg", "images/foto6.jpg"];
let texto = ["1/6", "2/6", "3/6", "4/6", "5/6", "6/6"];
let posicion = 0;

function fotoIzq() {
    let fotoMain = document.querySelector("#fotoMain"); //se guarda en la variable la foto central
    let dot = document.querySelectorAll(".dot img"); //se guarda en una variable todos los dot's

    for (let i = 0; i < dot.length; i++) { //para resetear todo en negro
        dot[i].setAttribute("class", "") //es class porque los dots es una clase
    }
    //console.log(posicion);
    if (posicion >= fotos.length - 1) {
        posicion = 0;
        dot[posicion].setAttribute("class", "opacidad")
    } else {
        posicion++
        dot[posicion].setAttribute("class", "opacidad") //cuando se da a la flecha, cambia el color del punto
    }
    //console.log(posicion);
    fotoMain.setAttribute("src", fotos[posicion]); //cuando se da a la flecha, se cambia la foto almacenada en el array
    document.querySelector("#texto").innerHTML = texto[posicion]; //se selecciona el texto del array y se imprime el texto en esa posición en el html
    //console.log(posicion);
}

function fotoDer() {
    let fotoMain = document.querySelector("#fotoMain");
    let dot = document.querySelectorAll(".dot img");

    for (let i = 0; i < dot.length; i++) {
        dot[i].setAttribute("class", "")
    }

    if (posicion <= 0) {
        posicion = fotos.length - 1;
        dot[posicion].setAttribute("class", "opacidad")
    } else {
        posicion--
        dot[posicion].setAttribute("class", "opacidad")
    }
    //console.log(posicion);
    fotoMain.setAttribute("src", fotos[posicion]);
    document.querySelector("#texto").innerHTML = texto[posicion];
    //console.log(posicion)
}

function cambiarPunto(event) {
    let fotoMain = document.querySelector("#fotoMain"); //se guarda en la variable la foto central
    let idDot = event.target.getAttribute("id"); //se guarda en una variable la id que es LA POSICION que cuando se hace click se desencadena la funcion cambiaPunto(e)
    //let dot = document.querySelectorAll(".dot img"); //se guarda en una variable todos los dot's
    //console.log(idpunto);
    fotoMain.setAttribute("src", fotos[idDot]); //se cambia la foto (guardada en el array) dependiendo de la posicion que se clicke en el dot
    document.querySelector("#texto").innerHTML = texto[idDot]; //se cambia el texto (guardado en el array) dependiendo de la posicion que se clicke en el dot y se imprime en el html
    //dot[idDot].setAttribute("class", "opacidad"); //se cambia la opacidad dependiendo de la posicion que se clicke en el dot
}

function cambiarOpacidad(event) {
    let dots = event.target.getAttribute("id");
    if (dots == "activa") {
        event.target.setAttribute("class", "activa opacidad");
    } else {
        event.target.setAttribute("class", "opacidad");
    }
}

function quitarOpacidad(event) {
    let dots = event.target.getAttribute("id");
    if (dots == "activa opacidad") {
        event.target.setAttribute("class", "activa");
    } else if (dots == "activa opacidad") {
        event.target.setAttribute("class", "activa")
    } else {
        event.target.setAttribute("class", " ")
    }
}