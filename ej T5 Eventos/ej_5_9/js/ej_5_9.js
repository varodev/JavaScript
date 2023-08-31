/*Realizar una app que tenga un div de un tamaño 
de 200x150 donde haya una imagen ajustada a ese 
tamaño. 
A la derecha habrá un div de 400x300, debajo habrá dos 
cajas de texto.
Cuando se haga click sobre la imagen se mostrará 
dentro del div de la derecha la imagen a tamaño real 
(quedará oculta una parte ya que el div tiene menor tamaño). 
En las cajas de texto aparecerán las coordenadas del punto 
de la imagen donde se ha hecho click(event.offsetX).*/

//window.onload = function() {
var imgIzq_id = document.getElementById("imgIzq");
imgIzq_id.addEventListener("click", mostrarImagenDerecha);
//}

function mostrarImagenDerecha(evento) {
    let padre = document.getElementById("container")
    document.getElementById("cajaInfo-X").value = evento.offsetX;
    document.getElementById("cajaInfo-Y").value = evento.offsetY;

    let imgIzq = imgIzq_id; //la id
    let imgDer = document.createElement("img");
    imgDer.id = "imgDer"
    imgDer.src = imgIzq.src; //dar la ruta
    padre.appendChild(imgDer)
}