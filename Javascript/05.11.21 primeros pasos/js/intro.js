window.onload = iniciar;


function iniciar() {
    console.log("dentro");
}

let nombre = "maria"
const apellido = "lopez"
    //console.log(nombre + " " + apellido)
const dias = ["l", "m", "x", "j", "v", "s", "d"]
    //console.log(dias(2))
dias.length

function visualizar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.querySelector("#apellido").value;
    //console.log(nombre, apellido);
    let respuesta = document.querySelector("#respuesta")

    if (nombre == "") {
        respuesta.innerText = "Debe completar el campo nombre";
    } else if (apellido == "") {
        respuesta.innerText = "Debe completar el campo apellido";
    } else {
        respuesta.innerText = nombre + " " + apellido;
    }
}