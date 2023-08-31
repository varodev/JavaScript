let fotos = ["img/inicial.jpg", "img/foto2.jpg", "img/foto3.jpg", "img/foto4.jpg", "img/foto5.jpg", "img/foto6.jpg"];
let texto = ["1/6", "2/6", "3/6", "4/6", "5/6", "6/6"];


let posicion = 0;

function pulsaAvanzar() {
    let inicial = document.querySelector('#inicial'); //se guarda en la variable la foto central
    let punto = document.querySelectorAll(".punto img"); //se guarda en una variable todos los dot's

    for (let i = 0; i < punto.length; i++) { //para resetear todo en negro
        punto[i].setAttribute("class", "") //es class porque los dots es una clase
    }
    //console.log(posicion);
    if (posicion >= fotos.length - 1) {
        posicion = 0;
        punto[posicion].setAttribute("class", "")
    } else {
        posicion++
        punto[posicion].setAttribute("class", "") //cuando se da a la flecha, cambia el color del punto
    }
    //console.log(posicion);
    inicial.setAttribute("src", fotos[posicion]); //cuando se da a la flecha, se cambia la foto almacenada en el array
    document.querySelector("#texto").innerHTML = texto[posicion]; //se selecciona el texto del array y se imprime el texto en esa posición en el html
    //console.log(posicion);
}

function pulsaRetroceder() {
    let inicial = document.querySelector('#inicial');
    let punto = document.querySelectorAll(".punto img");

    for (let i = 0; i < punto.length; i++) {
        punto[i].setAttribute("class", "")
    }

    if (posicion <= 0) {
        posicion = fotos.length - 1;
        punto[posicion].setAttribute("class", "")
    } else {
        posicion--
        punto[posicion].setAttribute("class", "")
    }
    //console.log(posicion);
    inicial.setAttribute("src", fotos[posicion]);
    document.querySelector("#texto").innerHTML = texto[posicion];
    //console.log(posicion)
}

function cambiarPunto(event) {
    let inicial = document.querySelector("#inicial"); //se guarda en la variable la foto central
    let idPunto = event.target.getAttribute("id"); //se guarda en una variable la id que es LA POSICION que cuando se hace click se desencadena la funcion cambiaPunto(e)
    //let dot = document.querySelectorAll(".dot img"); //se guarda en una variable todos los dot's
    //console.log(idpunto);
    inicial.setAttribute("src", fotos[idPunto]); //se cambia la foto (guardada en el array) dependiendo de la posicion que se clicke en el dot
    document.querySelector("#texto").innerHTML = texto[idPunto]; //se cambia el texto (guardado en el array) dependiendo de la posicion que se clicke en el dot y se imprime en el html
    //dot[idDot].setAttribute("class", "opacidad"); //se cambia la opacidad dependiendo de la posicion que se clicke en el dot
}

/*function cambiarOpacidad(event) {
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
}*/