/*Realizar un programa JS que tenga tres botones y un array interno de series. Uno de los
botones permite introducir una nueva serie, al pulsarlo se le pide al usuario el nombre de
la serie, se comprueba que no está en el array y se inserta, si ya está se muestra un
mensaje de error.
El otro botón permite cambiar el contenido del elemento que está en una determinada
posición del array. Para ellos primero se le pide la posición y luego el contenido.
El tercer botón permite mostrar el contenido del array.*/
var arraySeries = new Array("andor", "mandaloriano", "she-hulk ", "sandman");

function insertar_en_array() {
    var elemento = "";
    var posicion = 0;
    var encontrado = false;
    elemento = prompt("Introduce serie nueva a insertar: ");

    while (!encontrado && (posicion < arraySeries.length)) {
        if (elemento.localeCompare(arraySeries[posicion]) == 0) {
            encontrado = true;
            alert("Error, serie ya almacenada");
        }
        posicion++
    }

    if (!encontrado) {
        arraySeries.push(elemento);
        alert("Elemento añadido");
    }
}

function cambiar_en_array() {
    var posicion_cambio = 0;
    var elemento_cambio = "";

    posicion_cambio = parseInt(prompt("Introduzca posición del array a cambiar"));
    elemento_cambio = prompt("Introduce serie a cambiar: ");

    if (posicion_cambio < arraySeries.length) {
        arraySeries[posicion_cambio] = elemento_cambio;
    }
}

function mostrar_en_array() {
    alert(arraySeries);
}