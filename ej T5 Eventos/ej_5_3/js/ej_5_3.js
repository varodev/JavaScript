//Realizar el ejercicio anterior usando funciones anónimas
/*Realizar una app que tenga un div de 200px de alto 
y un párrafo con un texto dentro de él. Al pasar el 
ratón sobre el div aumenta el tamaño del font del texto 
y el color. Cuando el ratón sale del div se reduce el tamaño
y de deja el color inicial.*/

let divResultado = document.getElementById("divResultado");

divResultado.addEventListener("mouseover", function() {
    divResultado.classList.add("grande");
});
divResultado.addEventListener("mouseleave", function() {
    divResultado.classList.remove("grande");
});