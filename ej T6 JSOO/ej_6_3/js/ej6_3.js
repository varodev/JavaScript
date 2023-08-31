/*Realizar una app que tenga declarado internamente un array de series, 
cada objeto del array tendrá como atributos el nombre de la serie, 
el género(humor, ciencia ficción…), número de temporadas….
La aplicación tendrá un desplegable en el que se puede seleccionar un 
género, al seleccionarlo se mostrará toda la información de las series
del género seleccionado.
Cada serie se mostrará en un párrafo distinto.*/

var arraySeries = [
    { nombreSerie: "Drum", temporadas: 2, genero: "ciencia ficción" },
    { nombreSerie: "Bebito Fiu Fiu", temporadas: 35, genero: "humor" },
    { nombreSerie: "September", temporadas: 4, genero: "acción" },
    { nombreSerie: "Nice day", temporadas: 3, genero: "humor" },
    { nombreSerie: "DIE", temporadas: 4, genero: "acción" },
    { nombreSerie: "Moon", temporadas: 2, genero: "ciencia ficción" }
];
//var objetoJSON = JSON.stringify(arraySeries);//objetos de cada elemento del array
//console.log(objetoJSON)

function procesarPeticion() {
    let padre = document.getElementById("resultado");
    let tipoSerie = document.getElementById("tipoSerie").value;

    padre.textContent = "";
    for (let i = 0; i < arraySeries.length; i++) {
        if (arraySeries[i].genero.localeCompare(tipoSerie) == 0) {
            mostrarSerie(arraySeries[i], padre);
        }
    }
}
function mostrarSerie(serie, padre) {
    let parrafo = document.createElement("p");
    let nodo = document.createTextNode("Nombre Serie: " + serie.nombreSerie + " Temporadas: " + serie.temporadas +
        " Género: " + serie.genero);
    parrafo.appendChild(nodo);
    padre.appendChild(parrafo)
}