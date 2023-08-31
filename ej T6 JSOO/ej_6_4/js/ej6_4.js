/*Realizad una app web que tenga internamente declarado un arrayAux de objetos JSON
de videojuegos. Uno de los atributos de un videojuego es el año de lanzamiento. 
En la pantalla aparecerán dos cajas de texto para rellenar el rango de años de 
lanzamiento de los videojuegos que queremos filtrar. 
Se mostrará en pantalla los juegos que cumplen con ese criterio en una tabla.*/

let juegosJSON = [
    { "nombre": "Fornite", "productora": "Epic", "lanzamiento": 2004 },
    { "nombre": "Fornite2", "productora": "Epic", "lanzamiento": 2008 },
    { "nombre": "Fornite3", "productora": "Epic", "lanzamiento": 2012 },
    { "nombre": "Fifa 2014", "productora": "Epic", "lanzamiento": 2014 },
    { "nombre": "Fifa 2015", "productora": "Epic", "lanzamiento": 2015 },
    { "nombre": "Fifa 2016", "productora": "Epic", "lanzamiento": 2016 },
    { "nombre": "Fifa 2017", "productora": "Epic", "lanzamiento": 2017 },
    { "nombre": "Resident Evil 0", "productora": "Epic", "lanzamiento": 2018 },
    { "nombre": "Resident Evil 1", "productora": "Epic", "lanzamiento": 2019 },
    { "nombre": "Resident Evil 2", "productora": "Epic", "lanzamiento": 2020 },
    { "nombre": "Resident Evil", "productora": "Epic", "lanzamiento": 2019 }
];
var arrayAux = []
function procesarPeticion() {
    let padre = document.getElementById("resultado");
    let inicioRango = document.getElementById("inicio").value;
    let finRango = document.getElementById("fin").value;

    for (let elemento of juegosJSON) {
        if ((elemento.lanzamiento > inicioRango) && (elemento.lanzamiento < finRango)) {
            arrayAux.push(elemento);
        }
    }

    crearTabla(arrayAux, padre)
}

function crearTabla(arrayAux, padre) {
    let tabla = document.createElement("table");
    let fila = tabla.insertRow(0);
    let celda = fila.insertCell(-1);
    let nodo = document.createTextNode("Nombre videojuego");
    celda.appendChild(nodo)

    nodo = document.createTextNode("Productora");
    celda = fila.insertCell(-1);
    celda.appendChild(nodo);

    nodo = document.createTextNode("Lanzamiento");
    celda = fila.insertCell(-1);
    celda.appendChild(nodo);

    for (elemento of arrayAux) {
        crearCerdas(tabla, fila, celda, nodo)
    }
    padre.appendChild(tabla)
}

function crearCerdas(tabla, fila, celda, nodo){
     fila = tabla.insertRow(-1);

        nodo = document.createTextNode(elemento.nombre);
        celda = fila.insertCell(-1);
        celda.appendChild(nodo);

        nodo = document.createTextNode(elemento.productora);
        celda = fila.insertCell(-1);
        celda.appendChild(nodo);

        nodo = document.createTextNode(elemento.lanzamiento);
        celda = fila.insertCell(-1);
        celda.appendChild(nodo);
}