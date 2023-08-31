var casillas = 0

function inicializar_casillas() {
    let tablero = document.getElementById("juego")
    casillas = document.getElementById("numCasillas").value


    for (let index = 0; index < casillas; index++) {
        let cas = document.createElement("div")
        if (index % 2 == 0) {
            cas.id = "casilla_" + index;
            cas.classList.add("clase_caja_par")
        } else {
            cas.id = "casilla_" + index;
            cas.classList.add("clase_caja_impar")
        }
        tablero.appendChild(cas)
    }
}

function inicializar_juego() {
    /*let tablero = document.getElementById("juego")
    let divs = tablero.getElementsByTagName("div")

    for (let index = 0; index < divs.length; index++) {
        divs[index].innerText = "?"
        divs[index].classList.add("interrogacion")
    }*/
    for (let i = 0; i < casillas; i++) {
        let casillaTablero = document.getElementById("casilla_" + i);
        let cabecera_h1 = document.createElement("H1");
        let nodo = document.createTextNode("?")
        cabecera_h1.appendChild(nodo);
        casillaTablero.appendChild(cabecera_h1);
    }




}