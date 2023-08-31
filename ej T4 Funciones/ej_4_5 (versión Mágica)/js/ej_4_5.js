var num_casillas = 0;

/*Esta función crea un div para cada casilla del juego y le asigna
la clase CSS correspondiente
*/
function inicializar_juego() {
    //Tenemos dos clases, una para los pares y otra para los impares
    const CLASE_CAJA_PAR = "clase_caja_par"; //definidas en el CSS
    const CLASE_CAJA_IMPAR = "clase_caja_impar";
    const DIV_PADRE = "juego"
    let nombre_div = "";
    let div_casilla = null;

    num_casillas = document.getElementById("numCasillas").value;

    for (let i = 0; i < num_casillas; i++) {
        nombre_div = "casilla_" + i; //Creamos las casillas
        if (i % 2 == 0) {
            div_casilla = document.createElement("div");
            div_casilla.id = nombre_div; //el id de cada div 
            div_casilla.classList.add(CLASE_CAJA_PAR);
            document.getElementById(DIV_PADRE).appendChild(div_casilla);
        } else {
            div_casilla = document.createElement("div");
            div_casilla.id = nombre_div;
            div_casilla.classList.add(CLASE_CAJA_IMPAR);
            document.getElementById(DIV_PADRE).appendChild(div_casilla);
        }
    }
}
//Esta función crea en cada casilla una cabecera H1 con el símbolo ?
function inicializar_casillas() {
    let cabecera_h1 = null;
    let texto_cabecera = "";
    let casilla = null;

    for (let i = 0; i < num_casillas; i++) {
        cabecera_h1 = document.createElement("H1");
        texto_cabecera = document.createTextNode("?")
        cabecera_h1.appendChild(texto_cabecera);

        casilla = document.getElementById("casilla_" + i);
        casilla.appendChild(cabecera_h1);
    }
}

/*Esta función controla todo el juego, llama a las funciones 
correspondientes para crear un array de números que se corresponderán
con las casillas (el número en la posición 0 a la primera casill, 
    el del la posición 1 a la segunda casilla...)
Después crea la tabla donde estará la puntuación
Finalmente hace un bucle que se ejecutará tantas veces como casillas
tenga el juego. En cada iteración llama a gestionar_jugada enviando
el número de casilla y el array de números ocultos, gestionar_jugada se 
encarga de interaccionar con el jugador y devolver la puntuación 
obtenida. Con la puntuación obtenida para la casilla i se llama a 
la función  actualizar_tabla_puntos para que actualice la tabla.*/

function jugar() { //EL CORE, cuando pinchas boton comenzar a jugar
    let array_num_ocultos = []; //numero para cada casilla aleatorio
    let ident_jugador = document.getElementById("id_usuario").value;
    const ID_CELDA_PUNTOS = "id_puntuacion";
    crear_array_numeros_ocultos(array_num_ocultos); //1
    crear_tabla_punt_jugador(ident_jugador, "derecha", ID_CELDA_PUNTOS); //2
    for (let i = 0; i < num_casillas; i++) {
        puntuacion_obtenida = gestionar_jugada(i, array_num_ocultos); //3
        actualizar_tabla_puntos(ID_CELDA_PUNTOS, puntuacion_obtenida); //4
    }
}
//Crear la tabla con fondo verde de la derecha donde se va a mostrar el nombre del usuario junto a la puntuación que va obteniendo
function crear_array_numeros_ocultos(array_num_ocultos) {
    let num_aleatorio = 0;
    for (let i = 0; i < num_casillas; i++) {
        num_aleatorio = Math.floor(Math.random() * 5);
        array_num_ocultos.push(num_aleatorio);
    }
    console.log(array_num_ocultos);
}
//Crear la tabla con fondo verde de la derecha donde se va a mostrar el nombre del usuario junto a la puntuación que va obteniendo
function crear_tabla_punt_jugador(nick_jugador, div_destino, id_celda_puntos) {
    let tabla = document.createElement("table");
    let fila1 = tabla.insertRow(0);
    let fila2 = tabla.insertRow(-1);
    let celda1 = fila1.insertCell(0);
    let celda2 = fila1.insertCell(-1); //un intro
    let celda3 = fila2.insertCell(0);
    let celda4 = fila2.insertCell(-1);

    let nodo_texto_nick = document.createTextNode("Usuario");
    let nodo_texto_puntuacion = document.createTextNode("Puntuación");

    let nodo_texto_valor_nick = document.createTextNode(nick_jugador);
    let nodo_texto_valor_puntuacion = document.createTextNode("0");

    celda1.appendChild(nodo_texto_nick);
    celda2.appendChild(nodo_texto_puntuacion);
    celda3.appendChild(nodo_texto_valor_nick);
    celda4.appendChild(nodo_texto_valor_puntuacion);
    celda4.id = id_celda_puntos;

    document.getElementById(div_destino).appendChild(tabla);
}

/*Pide al usuario un número, si acierta, la puntuación se corresponde
con ese número, si falla*/
function gestionar_jugada(num_jugada, array_num_ocultos) {
    let puntuacion = 0;
    let num_intro_usuario = parseInt(prompt("A ver si aciertas el número!"));

    if (array_num_ocultos[num_jugada] == num_intro_usuario) {
        puntuacion = num_intro_usuario;
    }
    actualizar_casilla(num_jugada, array_num_ocultos[num_jugada]);

    return puntuacion; //0 si no ha acertado
}

/*Accede a la casilla correspondiente usando el formato definido internamente
para dar un id a cada casilla y así luego manipularla (casilla_X).*/
function actualizar_casilla(num_casilla, valor) { //valor linea 113
    let id_casilla = "casilla_" + num_casilla;
    let casilla = document.getElementById(id_casilla);
    let cabecera_h1 = document.createElement("h1");
    let nodo_texto_h1 = document.createTextNode(valor);

    cabecera_h1.appendChild(nodo_texto_h1);
    casilla.removeChild(casilla.firstChild);
    casilla.appendChild(cabecera_h1);
}

function actualizar_tabla_puntos(id_celda_puntos, puntos_a_sumar) {
    let puntos = parseInt(document.getElementById(id_celda_puntos).innerText);
    document.getElementById(id_celda_puntos).innerText = (puntos + puntos_a_sumar);
}