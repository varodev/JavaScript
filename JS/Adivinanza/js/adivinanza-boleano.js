//Bacalao


//const RESULTADO = "bacalao";
var resultado = "bacalao";
var primeraVez = true;
var segundaVez = false;
var terceraVez = false;

function comprobar() {

    var valor = document.getElementById("nombre").value;

    var nombre = valor.toLowerCase();

    console.log(nombre)
    if (nombre == "") {
        document.getElementById("resultado").innerHTML = "Escribe una respuesta";

    } else {

        console.log(contador)

        if (primeraVez && nombre == resultado) {
            document.getElementById("resultado").innerHTML = "Enhorabuena has acertado a la primera";
            document.getElementById("nombre").value = "";
            document.getElementById("boton").disabled = true;
            document.getElementById("nombre").disabled = true;
            document.getElementById("resultado").style.color = "#ff0000";
            // document.getElementById("resultado").setAttribute("class", "efecto");

        } else if (primeraVez && nombre != resultado) {
            document.getElementById("resultado").innerHTML = "Has fallado, te quedan 2 intentos";
            document.getElementById("nombre").value = "";
            document.getElementById("nombre").focus();
            primeraVez = false;
            segundaVez = true;

        } else if (segundaVez && nombre == resultado) {
            document.getElementById("resultado").innerHTML = "Enhorabuena has acertado a la segunda";
            document.getElementById("boton").disabled = true;
            document.getElementById("nombre").disabled = true;
        } else if (segundaVez && nombre != resultado) {
            document.getElementById("resultado").innerHTML = "Has fallado, te queda 1 intento";
            document.getElementById("nombre").value = "";
            document.getElementById("nombre").focus();
            segundaVez = false;
            terceraVez = true;
        } else if (terceraVez && nombre == resultado) {
            document.getElementById("resultado").innerHTML = "Enhorabuena has acertado a la tercera";
            document.getElementById("boton").disabled = true;
            document.getElementById("nombre").disabled = true;
        } else if (terceraVez && nombre != resultado) {
            document.getElementById("resultado").innerHTML = "Has fallado, te quedan 0 intentos";
            document.getElementById("nombre").value = "";
            document.getElementById("boton").disabled = true;
            document.getElementById("nombre").disabled = true;
        }


    }


}