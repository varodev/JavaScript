/*Realizar una variante del ejercicio anterior
Cuando se haga click sobre la imagen se mostrará dentro del div 
de la derecha la imagen a tamaño real 
(quedará oculta una parte ya que el div tiene menor tamaño). 
En las cajas de texto aparecerán las coordenadas del punto de la 
imagen donde se ha hecho click (event.offsetX)
Cuando se mueva el ratón sobre la imagen de la izquierda se irá 
moviendo la de la derecha y se verá ampliado en la derecha la parte 
donde está el ratón en la de la izquierda. 
Pista: imagenDerecha.style.top = ("-" + (posicionYclick*3) + "px");*/

//window.onload = function() {
var imgIzq_id = document.getElementById("imgIzq")
imgIzq_id.addEventListener("click", mostrarImagenDerecha);
imgIzq_id.addEventListener("mousemove", moverRaton);
//}

function mostrarImagenDerecha(evento) {
    let padre = document.getElementById("container")
    document.getElementById("cajaInfo-X").value = evento.offsetX;
    document.getElementById("cajaInfo-Y").value = evento.offsetY;

    let imgIzq = imgIzq_id //le damos la id
    let imgDer = document.createElement("img");
    imgDer.id = "imgDer"
    imgDer.src = imgIzq.src;
    padre.appendChild(imgDer)
}

function moverRaton(evento) {
    document.getElementById("cajaInfo-X").value = evento.offsetX;
    document.getElementById("cajaInfo-Y").value = evento.offsetY;

    imgDer_id = document.getElementById("imgDer")

    imgDer_id.style.left = ("-" + (evento.offsetX * 3) + "px");
    imgDer_id.style.top = ("-" + (evento.offsetY * 3) + "px");
}