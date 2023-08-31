/*Desarrollar una app que tenga tres cajas de texto y un botón, el usuario
podrá introducir su peso en kg, su altura en cm y su edad. A partir de esos datos se
podrá calcular:
• El índice de masa corporal según la fórmula IMC = Peso (kg) / (altura ( en metros)
elevado al cuadrado).
• El peso ideal según la fórmula PIdeal = Altura en cm - 100 + ((edad/10) x 0,9)
Si el peso está por encima del peso ideal o bien el IMC es mayor que 25 se debe crear y
mostrar un párrafo en la página web que lo indique. Utilizar funciones auxiliares. */

function calcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let edad = document.getElementById("edad").value;

    let pesaje = indiceMasaCorporal(peso, altura)
    let pesaje_ideal = pesoIdeal(altura, edad)

    if ((peso > pesaje_ideal) || (pesaje > 25)) {
        let padreResultado = document.getElementById("resultado")
        let parrafo = document.createElement("p")
        let nodoTexto = document.createTextNode("tu peso que es de " + peso + " es mayor que " + pesaje_ideal + " que es tu peso ideal")
        parrafo.appendChild(nodoTexto)
        padreResultado.appendChild(parrafo)
    }
}

function indiceMasaCorporal(peso, altura) {
    let IMC = peso / Math.pow(altura / 100, 2);
    return IMC;
}

function pesoIdeal(altura, edad) {
    let Pideal = altura - 100 + ((edad / 10) * 0.9)
    return Pideal
}