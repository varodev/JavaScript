function inicializar_juego() {
    let div_padre = document.getElementById("juego")
    let entrada_input = document.getElementById("numCasillas").value;
    let div_hijo = null;

    if (entrada_input >= 1 && entrada_input <= 25) {
        for (let i = 0; i < entrada_input; i++) {
            div_hijo = document.createElement("div")
            if (i % 2 == 0) {
                div_hijo.classList.add("clase_caja_par")
            } else {
                div_hijo.classList.add("clase_caja_impar")
            }
            div_padre.appendChild(div_hijo)
        }
    } else {
        alert("error")
    }
}

function inicializar_casillas() {
    let div_padre = document.getElementById("juego")
    let div_abuelo = div_padre.getElementsByTagName("div") //guardar en variable las casillas del método anterior

    /*for (elemento of div_abuelo) {
        elemento.innerHTML = "?"
        elemento.classList.add("interrogacion")
    }*/
    for (let i = 0; i < div_abuelo.length; i++) {
        div_abuelo[i].innerHTML = "?"
        div_abuelo[i].classList.add("interrogacion")
    }

}