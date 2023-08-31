let contador = 0;
let respuesta = "bacalao";

function comprobar() {
    let nombre = document.getElementById("nombre").value;
    let resultado = document.getElementById("resultado");
    //console.log(nombre);
    if (nombre == "") {
        //console.log("Debes completar el campo nombre");
        resultado.innerHTML = "Escribe una respuesta";
    } else {
        //console.log(nombre);
        contador++;
        //console.log(contador);
        if (contador == 1) {
            if (nombre == respuesta) {
                resultado.innerHTML = "Enhorabuena has acertado a la primera!!";
            } else {
                resultado.innerHTML = "Lo sentimos, no has acertado, te quedan 2 intentos";
                document.getElementById("nombre").value = "";
                document.getElementById("nombre").focus();

            }
        } else if (contador == 2) {
            if (nombre == respuesta) {
                resultado.innerHTML = "Enhorabuena has acertado a la segunda!!";
            } else {
                resultado.innerHTML = "Lo sentimos, no has acertado, te queda 1 intento";
                document.getElementById("nombre").value = "";
                document.getElementById("nombre").focus();

            }
        } else if (contador == 3) {
            if (nombre == respuesta) {
                resultado.innerHTML = "Enhorabuena has acertado a la tercera!!";
            } else {
                resultado.innerHTML = "Lo sentimos, no has acertado,ha terminado el juego te queda 1 intento";
                document.getElementById("nombre").disabled = true;
                document.getElementById("boton").disabled = true;

            }
        }

    }
}