//Bacalao
//window.onload = init;

// function init() {
//     document.getElementById("reset").disabled = true;
// }
var contador = 0;
var resultado = "bacalao";


function comprobar() {
    document.getElementById("reset").disabled = true;
    var valor = document.getElementById("nombre").value;

    var nombre = valor.toLowerCase();

    console.log(nombre)
    if (nombre == "") {
        document.getElementById("resultado").innerHTML = "Escribe una respuesta";


    } else {
        contador++
        console.log(contador)

        if (contador == 1 && nombre == resultado) {
            document.getElementById("resultado").innerHTML = "Enhorabuena has acertado a la primera";
            document.getElementById("nombre").value = "";
            document.getElementById("boton").disabled = true;
            document.getElementById("nombre").disabled = true;

        } else if (contador == 1 && nombre != resultado) {
            document.getElementById("resultado").innerHTML = "Has fallado, te quedan 2 intentos";
            document.getElementById("nombre").value = "";
            document.getElementById("nombre").focus();

        } else if (contador == 2 && nombre == resultado) {
            document.getElementById("resultado").innerHTML = "Enhorabuena has acertado a la segunda";
            document.getElementById("boton").disabled = true;
            document.getElementById("nombre").disabled = true;
        } else if (contador == 2 && nombre != resultado) {
            document.getElementById("resultado").innerHTML = "Has fallado, te queda 1 intento";
            document.getElementById("nombre").value = "";
            document.getElementById("nombre").focus();
        } else if (contador == 3 && nombre == resultado) {
            document.getElementById("resultado").innerHTML = "Enhorabuena has acertado a la tercera";
            document.getElementById("boton").disabled = true;
            document.getElementById("nombre").disabled = true;
        } else if (contador == 3 && nombre != resultado) {
            document.getElementById("resultado").innerHTML = "Has fallado, te quedan 0 intentos";
            document.getElementById("nombre").value = "";
            document.getElementById("boton").disabled = true;
            document.getElementById("reset").disabled = false;


        }


    }


}

function resetear() {
    document.getElementById("boton").disabled = false;
    document.getElementById("nombre").disabled = false;
    document.getElementById("reset").disabled = false;
    contador = 0;
    document.getElementById("resultado").innerHTML = "Tienes tres intentos para acertar...";
}