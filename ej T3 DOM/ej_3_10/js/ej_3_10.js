/*A partir del html y el css dados realizar un programa js que al pulsar un botón cree una
tabla como la de la figura. En las filas pares se almacenan números impares correlativos y
en las impares números pares correlativos. La tabla tendrá 8 filas y 10 columnas*/
function crear_tabla() {
    let div_tabla = document.getElementById("asideArriba") //padre
    let tabla = document.createElement("table"); //hijo
    const NUM_FILAS = 8;
    const NUM_COLUMNAS = 10;
    let fila, celda = null;
    let par = 0;
    let impar = 1;

    for (let i = 0; i < NUM_FILAS; i++) {
        fila = tabla.insertRow(-1);
        for (let j = 0; j < NUM_COLUMNAS; j++) {
            celda = fila.insertCell(-1);
            if ((i % 2 == 0)) {
                celda.innerText = par;
                par = par + 2;
            } else {
                celda.innerText = impar;
                impar = impar + 2;
            }
        }
        div_tabla.textContent = ""; //vaciado
        div_tabla.appendChild(tabla);
    }







}