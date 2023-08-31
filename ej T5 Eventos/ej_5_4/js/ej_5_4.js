/*Realizad una app web que cada vez que el ratón 
salga del contorno de un div éste cambie de color. 
El color debe ser aleatorio. Utilizad style.backgroundcolor.rgb(R, G, B)
para definir el color, R,G,B son números entre 0 y 255. 
Revisar la función Math.random() */

let divResultado = document.getElementById("resultado")
divResultado.addEventListener("mouseleave", cambiarColor)

function cambiarColor() {
    let R = Math.random() * 256;
    let G = Math.random() * 256;
    let B = Math.random() * 256;
    
    divResultado.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
}