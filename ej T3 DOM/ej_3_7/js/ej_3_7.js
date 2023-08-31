/*Realiza una app web que pida al usuario el nombre de tres ciudades separados por
comas y ponga cada una de las ciudades en una caja diferente (https://codepen.io/
jluis_b/pen/wvmLwqE). Utilizar la función split() para obtener cada ciudad del texto de
entrada. Ver referencia: https://www.w3schools.com/jsref/jsref_split.asp*/
let array_ciudades = new Array()

function aniadir_cabecera() {
    let texto_ciudades = prompt("Introduzca el nombre de tres ciudades separados por comas");
    array_ciudades = texto_ciudades.split(",");
    let parrafo1 = "";
    let parrafo2 = "";
    let parrafo3 = "";
    let nodoTexto_ciudades = document.createTextNode(" "); //lo creo vacio para machacarlo

    if (array_ciudades.length == 3) {
        parrafo1 = document.createElement("p");
        nodoTexto_ciudades = document.createTextNode(array_ciudades[0]);
        parrafo1.appendChild(nodoTexto_ciudades)
        let izq = document.getElementById("caja_izquierda");
        izq.appendChild(parrafo1);

        parrafo2 = document.createElement("p");
        nodoTexto_ciudades = document.createTextNode(array_ciudades[1]);
        parrafo2.appendChild(nodoTexto_ciudades)
        let central = document.getElementById("caja_central");
        central.appendChild(parrafo2);

        parrafo3 = document.createElement("p");
        nodoTexto_ciudades = document.createTextNode(array_ciudades[2]);
        parrafo3.appendChild(nodoTexto_ciudades)
        let der = document.getElementById("caja_derecha");
        der.appendChild(parrafo3);
    }
}