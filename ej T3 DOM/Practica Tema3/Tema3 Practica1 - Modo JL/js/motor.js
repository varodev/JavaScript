/**/



var num_casillas = 0;

/*Esta función crea un div para cada casilla del juego y le asigna
la clase CSS correspondiente
*/
function inicializar_juego() {
    //Tenemos dos clases, una para los pares y otra para los impares
    const CLASE_CAJA_PAR = "clase_caja_par";
    const CLASE_CAJA_IMPAR = "clase_caja_impar";
    const DIV_PADRE = "juego"
    let nombre_div = "";
    let div_casilla = null;

    num_casillas = document.getElementById("numCasillas").value;

    for (let i = 0; i < num_casillas; i++) {
        nombre_div = "casilla_" + i; //Creamos las casillas
        if (i % 2 == 0) {
            div_casilla = document.createElement("div");
            div_casilla.id = nombre_div;
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