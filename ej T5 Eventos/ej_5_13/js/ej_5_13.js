/*Realizad una app que tenga dos divs, cada uno de ellos tiene una imagen. 
Queremos hacer drag&drop de forma que se intercambien las imágenes. 
Pista: Si depuras el ejercicio anterior observa que en la función hacerDrag, 
el evento.target tiene un atributo parentNode que es el “padre” de la imagen 
de la que se hace el drag, ese sería el div origen
El html se puede coger de https://codepen.io/jluis_b/pen/eYGVbeM
Utiliza el depurador para ver las propiedades del parámetro evento 
(target, currentTarget, dataTransfer…)*/

//window.onload = function() {
let imagen1=document.getElementById("imagen1");    
let imagen2=document.getElementById("imagen2");
//dragstart
imagen1.addEventListener("dragstart", inicializarDrag);
imagen2.addEventListener("dragstart", inicializarDrag);

let cajaImagen=document.getElementById("cajaImagen");
let container=document.getElementById("container");
//dragover
cajaImagen.addEventListener("dragover", controlarDrag);
container.addEventListener("dragover", controlarDrag);
//drop
cajaImagen.addEventListener("drop", hacerDrop);
container.addEventListener("drop", hacerDrop);
//}
var divOrigen = null;

function inicializarDrag(evento) {
    evento.dataTransfer.setData("text", evento.target.id);
    divOrigen = document.getElementById(evento.target.id).parentNode;
}

function controlarDrag(evento) {
    evento.preventDefault();
}

function hacerDrop(evento) {
    evento.preventDefault();
    var data = evento.dataTransfer.getData("text");
    //cuidado el target es la imagen en este caso, por eso ponemos parentNode
    evento.target.parentNode.appendChild(document.getElementById(data));
    //Llevo la foto de este div al div en el que estaba la foto origen
    divOrigen.appendChild(evento.target);
}