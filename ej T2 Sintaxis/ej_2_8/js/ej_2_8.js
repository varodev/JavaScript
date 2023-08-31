/*Realizar un programa que pida al usuario números hasta que el usuario introduzca un
múltiplo de 5, en ese caso termina indicando al usuario que ha introducido un múltiplo de
5.*/
function controlar_multiplo() {
    const MULTIPLO = 5
    let numero = parseInt(prompt("introduce un numero"));

    while ((numero % MULTIPLO == 0) == false) { //tambien vale !=0
        alert("no es multiplo de 5");
        numero = parseInt(prompt("introduce un numero"));
    }
    alert("Es multiplo de 5");
}