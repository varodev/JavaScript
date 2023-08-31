/*Realizar una aplicación web que tenga declarado internamente un array de series y otro
de temporadas de esas series. Por ejemplo:
Cuando se pulsa un botón se muestra una tabla como la siguiente:*/
let series = ["Vikingos", "Gambito de dama", "La casa de papel"]
let numero_temporadas = [2, 3, 5]

function mostrar_series() {
    let tabla = document.createElement("table"); //creo la tabla

    let fila = tabla.insertRow(0); //inserto una fila

    let celda1 = fila.insertCell(0); //inserto celda0 en posicion 0
    let celda2 = fila.insertCell(1); //inserto celda1 en posicion 1

    celda1.innerText = "Series"; //Relleno celda0 a capón
    celda2.innerText = "Temporadas"; //Relleno celda1 a capón

    for (let i = 0; i < series.length; i++) {
        fila = tabla.insertRow(-1); //Inserta una fila en el primer elemento de la tabla y devuelve una referencia a la fila

        celda1 = fila.insertCell(0); //inserto celda0 en posicion 0
        celda2 = fila.insertCell(1); //inserto celda1 en posicion 1

        celda1.innerText = series[i]; //cada iteracion, se rellana con un elemento del array series
        celda2.innerText = numero_temporadas[i]; //cada iteracion, se rellana con un elemento del array series
    }
    document.body.appendChild(tabla); //se inserta la tabla en el documento




}