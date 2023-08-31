/*Realizad una app web que tenga un link y un div que contenga un 
párrafo, y que nos permita arrastrar y soltar el link en el div. 
Al hacer drop se elimina el párrafo y se pone link. 
Ojo, soltar sobre el div, no sobre el párrafo*/

//window.onload = function() {
let enlace = document.getElementById("enlace");
let contendor = document.getElementById("divDestino")

enlace.addEventListener("dragstart", iniciarDrag);
contendor.addEventListener("dragover", mantenerDrag);
contendor.addEventListener("drop", finalizarDrop);
//}

function iniciarDrag(evento) {
  evento.dataTransfer.setData("text", evento.target.id);
}

function mantenerDrag(evento) {
  evento.preventDefault();
}

function finalizarDrop(evento) {
  evento.preventDefault();
  let data = evento.dataTransfer.getData("text");
  this.textContent = "";
  evento.target.appendChild(document.getElementById(data));
}
