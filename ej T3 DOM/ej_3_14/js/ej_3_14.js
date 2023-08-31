/*Coge el código compartido en codepen: https://codepen.io/jluis_b/pen/VwawoOx
incluye dos botones, al pulsar uno de ellos se debe cambiar el fondo y el color del font de
todos los párrafos, al pulsar el otro botón se debe dejar como estaba.*/
function cambiar_parrafos() {
    let parrafos = document.getElementsByTagName("p")

    for (let elemento of parrafos) {
        elemento.classList.add("resaltado")
    }
}

function restaurar_parrafos() {
    let parrafos = document.getElementsByTagName("p")

    for (let elemento of parrafos) {
        elemento.classList.remove("resaltado")
    }
}