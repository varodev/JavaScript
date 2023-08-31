/*Realizad una app web que tenga una caja de texto 
donde podemos escribir un mensaje. Según vamos escribiendo, 
debajo de la caja nos va informando del número de caracteres
que llevamos escritos. Podemos usar el evento keyup*/

let cajaTexto = document.getElementById("caja")
cajaTexto.addEventListener("keyup", contarNumCaracteres);

function contarNumCaracteres() {
    let padre = document.getElementById("cabecera")
    let cajaTextoValor = cajaTexto.value;
    let cajaTextoValorLongitud = cajaTextoValor.length;
    padre.innerText = "Número de caracteres: " + cajaTextoValorLongitud;
    document.body.appendChild(padre);
}