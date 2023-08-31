/*Realiza un programa javascript que tenga declarado internamente un array, le debe pedir
al usuario una posición del array y mostrar el contenido. Debe controlar que la posición
que pide el usuario está dentro del rango del array. Se debe preguntar al usuario si desea
repetir el proceso, se repetirá mientras el usuario diga “Si”*/
let perros = new Array("collie", "dogo", "dalmata", "mastin", "labrador")

function mostrarElementos() {
    let opcion = "";
    let posicion = 0;
    const SI = "Si"

    do {
        posicion = parseInt(prompt("introduce una posicion a buscar la raza de perros"));
        if (posicion < perros.length) {
            alert("la raza de perros a buscar es " + perros[posicion] + ", en la posicion " + posicion);
        } else {
            alert("la posicion excede al tamaño del array");
        }
        opcion = prompt("desea repetir? Si/No");
    } while (opcion.localeCompare(SI) == 0)
}