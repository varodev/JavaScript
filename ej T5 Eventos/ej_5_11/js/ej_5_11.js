/*A partir del html y css que podéis consultar en https://codepen.io/jluis_b/pen/BaLqdEo
realizar una app que cuando se mueva el ratón por alguno de los divs 
centrales (de colores) se actualice el color del div de la derecha 
y se muestre información de las coordenadas X e Y del ratón, 
además se debe mostrar el identificador del div y el evento que se ha 
producido. Para obtener el color del div podéis utilizar 
let color = window.getComputedStyle(DivQueLanzaElEvento,null).getPropertyValue("background-color");*/
//window.onload = function() {
let listaCajasCentrales = document.getElementsByClassName('divInterno');

for (let elemento of listaCajasCentrales) {
    elemento.addEventListener('mousemove', colorearDiv);
}
//}

function colorearDiv(eventoLanzado) {
    let color = window.getComputedStyle(this, null).getPropertyValue("background-color");
    let divDerecha = document.getElementById("derecha")
    let cajaCoordenadas = document.getElementById("cajaCoords");
    let cajaEvento = document.getElementById("cajaEvento");
    let cajaIdDivEvento = document.getElementById("cajaIdDivEvento");

    divDerecha.style.backgroundColor = color;
    cajaCoordenadas.value = "Coord X: " + eventoLanzado.clientX + " Coord Y" + eventoLanzado.clientY;
    cajaEvento.value = eventoLanzado.type;
    cajaIdDivEvento.value = this.id;
}