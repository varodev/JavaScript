//arrancar go live
function inicializar_casillas() {
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

function inicializar_juego() {
    let tablero_juego = document.getElementById("juego"); //div donde van las casillas
    let caja_div = tablero_juego.getElementsByTagName("div"); //guardar en variable las casillas del método anterior

    for (elemento of caja_div) { //recorrer los div caja
        elemento.innerText = "?"; //escribir en caja div
        elemento.classList.add("interrogacion"); //añadir el div caja con los atributos de elemento.
    }
}

var posicion = 0;
var puntuacion = 0;

function tiradado() {
    let tabla_puntuacion = document.getElementById("tabla_puntuacion");
    let div_ = document.getElementById("derecha");
    let imagen_dado = document.getElementById("imagen_dado");
    let numCasilla = document.getElementsByClassName("interrogacion").length;

    if (posicion <= numCasilla) {
        if (imagen_dado != null && imagen_dado != undefined) {
            imagen_dado.remove()
        }

        let numero_generado_aleatorio = generar_dado(div_); // recuperando el valor ale

        let muestra = mostrarCelda(numero_generado_aleatorio);
        puntuacion += muestra;

        if (tabla_puntuacion != null && tabla_puntuacion != undefined) {
            let casillaPuntuacion = document.getElementById("celda4");
            casillaPuntuacion.removeChild(casillaPuntuacion.firstChild);
            let nodo_texto = document.createTextNode(puntuacion); /******************** */
            casillaPuntuacion.appendChild(nodo_texto);

        } else {
            let name = document.getElementById("nombreUsuario").value;

            crear_tabla_puntuacion_jugador(name, div_);
        }
    } else {
        alert("has alcanzado el máximo de casillas");
    }
}

function crear_tabla_puntuacion_jugador(name, div_) {
    let tabla = document.createElement("table");
    tabla.id = "tabla_puntuacion";
    let fila1 = tabla.insertRow();
    let fila2 = tabla.insertRow();
    let celda1 = fila1.insertCell();
    let celda2 = fila1.insertCell();
    let celda3 = fila2.insertCell();
    let celda4 = fila2.insertCell();

    let nodo_nick = document.createTextNode("Usuario");
    let nodo_puntuacion = document.createTextNode("Puntuación");

    let nodo_valor_name = document.createTextNode(name);
    let nodo_texto_valor_puntuacion = document.createTextNode("0");

    celda1.appendChild(nodo_nick);
    celda2.appendChild(nodo_puntuacion);
    celda3.appendChild(nodo_valor_name);
    celda4.appendChild(nodo_texto_valor_puntuacion);
    celda4.id = "celda4";

    div_.appendChild(tabla);
}

function generar_dado(div_) {
    let numero_aleatorio_dado = Math.floor(Math.random() * 6) + 1;
    let dado = document.createElement("img");
    dado.id = "imagen_dado";
    dado.src = `../images/dado_${numero_aleatorio_dado}.jpg`;
    div_.appendChild(dado)
    return numero_aleatorio_dado;
}

function mostrarCelda(numero_generado_aleatorio) {
    let numero_aleatorio_dado = Math.floor(Math.random() * 6) + 1;
    let casilla_anterior = document.getElementsByClassName("interrogacion")[posicion - 1]
    if (posicion != 0) {
        casilla_anterior.classList.remove("casilla_activa")
    }
    posicion += numero_generado_aleatorio;
    let casilla = document.getElementsByClassName("interrogacion")[posicion - 1]
    casilla.innerText = numero_aleatorio_dado;
    casilla.classList.add("casilla_activa")
    return numero_aleatorio_dado;
}