/*Realizar un programa JS que cuando se pulse un botón vaya pidiendo números al
usuario e insertándolos en un array hasta que el usuario diga que no quiere introducir
más. Habrá un segundo botón que permitirá pedir al usuario una operación (suma, resta,
multiplicación o división) y un número, a continuación aplicará la operación a cada uno
de los elementos del array. Por ejemplo, si el usuario introduce suma y el 5 sumará 5 a
cada uno de los elementos del array.
El tercer botón permite mostrar el contenido del array.*/
let arrayNumeros = new Array();

function pedir_numeros() {
    var numero = "";
    var opcion = "";
    const SI = "si"

    do {
        numero = parseInt(prompt("Introduzca un número "));
        arrayNumeros.push(numero);
        opcion = prompt("quiere continuar? si para continuar y no para dejar de añidir numero")
    } while (opcion.localeCompare(SI) == 0);
}

function operar() {
    var eleccion = "";
    var numero = "";
    eleccion = prompt("Introduzca suma, resta, multiplicacion o division");
    numero = parseInt(prompt("Introduzca un número a operar a cada elemento del array"));

    if (eleccion.localeCompare("suma") == 0) {
        for (let i = 0; i < arrayNumeros.length; i++) {
            arrayNumeros[i] = arrayNumeros[i] + numero;
        }
    } else if (eleccion.localeCompare("resta") == 0) {
        for (let i = 0; i < arrayNumeros.length; i++) {
            arrayNumeros[i] = arrayNumeros[i] - numero;
        }
    } else if (eleccion.localeCompare("multiplicacion") == 0) {
        for (let i = 0; i < arrayNumeros.length; i++) {
            arrayNumeros[i] = arrayNumeros[i] * numero;
        }
    } else if (eleccion.localeCompare("division") == 0) {
        for (let i = 0; i < arrayNumeros.length; i++) {
            arrayNumeros[i] = arrayNumeros[i] / numero;
        }
    } else {
        alert("error");
    }
    alert("Numeros operados");

}

function mostrar_numeros() {
    alert(arrayNumeros);
}