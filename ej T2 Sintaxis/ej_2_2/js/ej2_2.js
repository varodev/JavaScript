/*Realizar una aplicación web que tenga dos botones, uno permite pedir al usuario dos
números y a continuación se muestra la suma, resta, multiplicación y división de los
números. El otro botón permite pedir dos textos al usuario y mostrar los textos
concatenados separados por “————”*/
function operar_numeros() {
    let n1 = parseInt(prompt("Dame un numero 1"));
    let n2 = parseInt(prompt("Dame un numero 2"));

    let suma = n1 + n2;
    let resta = n1 - n2;
    let multiplicacion = n1 * n2;
    let division = n1 / n2;

    alert("los resultados son: " + suma + ", " + resta + ", " + multiplicacion + ", " + division);
}

function concatenar_cadenas() {
    let texto1 = prompt("Dame una palabra");
    let texto2 = prompt("Dame otra palabra");

    let concatenar = texto1 + "----" + texto2;
    alert(concatenar);
}