/*Modifica la tarea 4 (RGB) para que cuando se haga click(mousedown)
sobre el div se active la funcionalidad y cuando se haga 
doble click(dblclick) se desactive. 
En una etiqueta se mostrará si la funcionalidad está activada o no */

var contenedor = document.getElementById("contenedor");
var cabecera = document.getElementById("cabecera");

//cuando se haga click(mousedown) sobre el div se active la funcionalidad
contenedor.addEventListener("click", function() {
    contenedor.addEventListener('mouseleave', cambiarColor);
    cabecera.innerText = "Colores activados"
});

//cuando se haga doble click(dblclick) se desactive
contenedor.addEventListener('dblclick', function() {
    contenedor.removeEventListener('mouseleave', cambiarColor);
    cabecera.innerText = "Colores desactivados"
});

function cambiarColor() {
    let R = Math.random() * 256
    let G = Math.random() * 256
    let B = Math.random() * 256

    contenedor.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
}