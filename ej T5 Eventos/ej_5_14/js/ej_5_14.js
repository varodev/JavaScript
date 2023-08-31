/*Realizar una app como la de la figura que permita intercambiar 
cualquier foto arrastrando una sobre otra. 
El código html: https://codepen.io/jluis_b/pen/ExwQzqK*/
//window.onload = function() {
let imgDrag = document.getElementsByClassName("img_drag");
let divDrop = document.getElementsByClassName("div_drop");

for (let elemento of imgDrag) {
    elemento.addEventListener("dragstart", inicializarDrag);
}
for (let elemento of divDrop) {
    elemento.addEventListener("dragover", controlarDrag);
    elemento.addEventListener("drop", hacerDrop);
}
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