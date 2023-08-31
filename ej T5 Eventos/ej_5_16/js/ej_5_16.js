/*Realiza una app que simule una barra de evolución: 
cuando se haga click sobre el fondo se va creando un 
div rojo a la derecha cada segundo hasta llegar a 6 divs, 
a la vez va actualizando un H1 que tiene un contador.*/
//Recordad que esta función se ejecuta antes de cargar el DOM

var intervalo = null;
var contador = 0;
/*(function() {
    window.addEventListener('load', Inicializar);
})();*/

//function Inicializar() {
let div_principal = document.getElementById("principal")
div_principal.addEventListener('click', function() {
    intervalo = setInterval(jugarDiv, 1000);
});
//}

function jugarDiv() {
    const NUM_MAX_DIV = 6;
    const CLASE_DIV = document.getElementById("juego"); //padre
    let juego_miDivRojo = document.createElement("div");//hijo
    juego_miDivRojo.classList.add("clase_caja");
    let cabecera = document.getElementById("cabecera")
    
    CLASE_DIV.appendChild(juego_miDivRojo);
    contador++;
    cabecera.innerHTML = "Tiempo: " + contador;

    if (contador >= NUM_MAX_DIV) {
        clearInterval(intervalo);
//Cancela una acción reiterativa que se inició mediante una llamada a setInterval 
    }
}