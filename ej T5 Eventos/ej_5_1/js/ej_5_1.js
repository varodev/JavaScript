/*Realizar una app que al pasar el ratón sobre una imagen aparezca 
un h1 debajo de la imagen que contenga una descripción de la misma, 
cuando deje de estar sobre la imagen desaparece el h1*/

let imagen = document.getElementById("collie");
imagen.addEventListener("mouseover", ganarFocoH1);
imagen.addEventListener("mouseleave", perderFocoH1);

function ganarFocoH1() {
    let padre = document.getElementById("resultado");
    let cabecera = document.createElement("H1");
    cabecera.id = "cabeceraPerros";
    let nodo = document.createTextNode("Border Collies");
    cabecera.appendChild(nodo);
    padre.appendChild(cabecera);
}

function perderFocoH1() {
    let cabeceraPerros = document.getElementById("cabeceraPerros");
    cabeceraPerros.parentNode.removeChild(cabeceraPerros);
}

