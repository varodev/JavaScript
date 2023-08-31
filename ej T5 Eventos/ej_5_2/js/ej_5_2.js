/*Realizar una app que tenga un div de 200px de alto y un párrafo 
con un texto dentro de él. Al pasar el ratón sobre el div aumenta 
el tamaño del font del texto y el color. Cuando el ratón sale del 
div se reduce el tamaño y de deja el color inicial.*/

let divResultado = document.getElementById("divResultado")
divResultado.addEventListener("mouseover", grande);
divResultado.addEventListener("mouseleave", normal);

function grande() {
    divResultado.classList.add("grande");
}

function normal() {
    divResultado.classList.remove("grande");
}