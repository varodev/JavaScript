/*Realizad un programa que permita a una web de venta de productos para el automóvil,
se debe preguntar al usuario la edad y si tiene coche. Si es mayor de 18 años y tiene
coche le debe mostrar una oferta. La oferta consiste en un bono de compra cuyo valor
se obtiene multiplicando la edad por 0.4 y sumándole 50.
Si no cumple las dos condiciones debe indicarle que no hay ofertas disponibles.
Para comparar strings se debe utilizar la función localeCompare https://
www.w3schools.com/jsref/jsref_localecompare.asp*/

function calcular_oferta() {
    let edad = parseInt(prompt("introduce tu edad"));
    let pregunta_coche = prompt("introduce si tienes coche o no");

    if (edad >= 18 && pregunta_coche.localeCompare("si") == 0) {
        let bono = (edad * 0.4) + 50;
        alert("Tienes el bono disponeble por cumplir las condiciones, asciende a " + bono);
    } else {
        alert("No tienes el bono disponeble por no cumplir las condiciones, lo siento");
    }


}