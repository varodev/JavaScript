/*Hacer una app que contenga varios divs 
(ponedles una altura height: 200px para que se vea bien), 
dentro de cada div habrá párrafos con texto. 
Cuando se clicke con el ratón sobre el div sobre el párrafo 
se cambia de forma aleatoria el tamaño del texto del párrafo
(objeto.style.fontSize = (tamanio + “px"))*/

var parrafos = document.getElementsByTagName("p");

for (let elemento of parrafos) {
    elemento.addEventListener("click", cambiarTamanoAleatorio);
}

function cambiarTamanoAleatorio() {
    this.style.fontSize = ((Math.random() * 50 + 15) + "px");
}

/*for (let elemento of parrafos) {
    elemento.addEventListener('click', function() {
        elemento.style.fontSize = ((Math.random() * 50 + 15) + "px");
    });
} */