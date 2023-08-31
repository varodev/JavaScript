function inicializar_juego() {
    let tablero_juego = document.getElementById("juego"); //div donde van las casillas PADRE
    let caja = null //se crea el div "tipo" HIJO
    let numero = document.getElementById("numCasillas").value; //acceder al valor del input
    let valor = numero.value;
    const CASILLAS_MAXIMAS = 25

    if (numero >= 1 && numero <= CASILLAS_MAXIMAS) { //requisito entre 1 y 25
        for (let i = 0; i < numero; i++) { //se crean elementos
            caja = document.createElement("div");

            if (i % 2 == 0) { //condición para diferencias entre div par e impar
                caja.classList.add("clase_caja_par"); //añadir el div caja con los atributos de par
            } else {
                caja.classList.add("clase_caja_impar"); //añadir el div caja con los atributos de impar
            }
            tablero_juego.appendChild(caja); //a cada vuelta, ir añadiendo div tablero_juego los div caja
        }
    } else {
        alert(valor + "es valor erroneo, máximo es " + CASILLAS_MAXIMAS);
    }
}

function inicializar_casillas() {
    let tablero_juego = document.getElementById("juego"); //div donde van las casillas
    let caja_div = tablero_juego.getElementsByTagName("div"); //guardar en variable las casillas del método anterior

    for (elemento of caja_div) { //recorrer los div caja
        elemento.innerText = "?"; //escribir en caja div
        elemento.classList.add("interrogacion"); //añadir el div caja con los atributos de elemento.
    }
}