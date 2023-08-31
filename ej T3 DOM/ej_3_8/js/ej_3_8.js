/*A partir del html y el css dados (https://codepen.io/jluis_b/pen/VwawoOx), bajaos el
código a Visual Studio Code y cread en el div central una lista de ciudades, por ejemplo:
<ol id="ListaCiudades">
y realizar un programa js que al pulsar un botón cree una tabla en el div de la derecha
con los elementos de la lista central (ver figura abajo). Para obtener a los elementos de la
lista (li) deberías acceder al objeto que contiene la lista (su id es “listaCiudades”) y luego
obtener la lista de elementos “li” que contiene (getElementsByTagName)*/
function crear_tabla() {
    let der = document.getElementById("derecha"); //padre--
    let tabla = document.createElement("table"); //hijo

    let lista_ciudades = document.getElementById("listaCiudades");
    let lista_item = lista_ciudades.getElementsByTagName("li");

    let filas = null;
    let celdas = null;

    for (let i = 0; i < lista_item.length; i++) {
        filas = tabla.insertRow(0);
        celdas = filas.insertCell(0);
        celdas.innerText = lista_item[i].innerText; //las celdas a cada vuelta se rellena con elementos de las listas 
        der.appendChild(tabla);
    }
    // der.appendChild(tabla);


}