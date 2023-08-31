/*Desarrollad una app que tiene un html con una un botón. 
El código javascript tendrá declarado internamente un array de nombres de personas.
Cuando se pulse el botón se debe recorrer el array, crear una cadena concatenando
“Hola “ a cada elemento del array y mostrar el saludo “Hola xxxx” (xxxx será el nombre
de cada persona) en una cabecera H1 creada para ese propósito (un H1 para cada uno).*/
let arrayNombres = ["Ana", "Alicia", "Bob"];

function imprimirNombres() {
    let padre = document.getElementById("resultado");
    const PALABRA = "Hola";

    for (let index = 0; index < arrayNombres.length; index++) {
        let h1 = document.createElement("h1");
        let nodo_texto = document.createTextNode(PALABRA + " " + arrayNombres[index]);
        h1.appendChild(nodo_texto);
        padre.appendChild(h1);
    }

    /*for (let nombres of arrayNombres) {
        let h1 = document.createElement("h1");
        let nodo_texto = document.createTextNode(palabra + " " + nombres);
        h1.appendChild(nodo_texto);
        padre.appendChild(h1);
    }*/
}