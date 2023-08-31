window.onload = iniciar;

let texto = ["1/6", "2/6", "3/6", "4/6", "5/6", "6/6"]; /*Array para que sala el texto guardado en una posicion*/

function iniciar() {
    //document.querySelectorAll(".slider .col-4 img").setAttribute("class", "ocultar");
    let imagenes = document.querySelectorAll(".slider .col-8 img");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].setAttribute("class", "ocultar");

        if (i == 0) {

            imagenes[i].setAttribute("class", "mostrar");
        }
    }

}
let index = 0;

function pulsar() {

    let imagenes = document.querySelectorAll(".slider .col-8 img"); /*direccion para coger todas las imagenes*/
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].setAttribute("class", "ocultar");

    }
    if (index < imagenes.length - 1) {
        index++;
        imagenes[index].setAttribute("class", "mostrar");

    } else {
        index = 0;

    }
    document.getElementById('texto').innerHTML = texto[index]; /*para imprimirlo por el html los nuneros de las iamgenes*/

}

function cambiarPunto(event) {
    let imagenes = document.querySelectorAll(".slider .col-8 img");
    let


}