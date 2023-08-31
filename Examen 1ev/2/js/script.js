/* Desarrollad una app que tiene en html una caja de texto, una lista de
ciudades (ul) y un botón. El usuario podrá escribir el nombre de una ciudad en la caja de
texto y cada vez que pulse el botón se insertará el elemento en la lista.*/

function añadirCiudad() {
    let valor = document.getElementById("cajaTexto").value;
    let listaCiudades = document.getElementById("listaCiudades") //padre

    let elementoLista = document.createElement("li") //hijo
    let nodoTexto = document.createTextNode(valor)
    elementoLista.appendChild(nodoTexto)
    listaCiudades.appendChild(elementoLista)
}