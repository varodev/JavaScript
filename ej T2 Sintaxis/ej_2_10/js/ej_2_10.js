/*Realiza un programa javascript que pida al usuario varios números y muestre el mayor de
todos ellos. Al comienzo del programa se le pregunta cuántos números va a introducir*/
function calcular_num_mayor() {
    let pedir_numero = parseInt(prompt("introduce cuantos numeros quieres meter"));
    let numero = 0;
    let numero_mayor = 0;

    for (let i = 0; i < pedir_numero; i++) {
        numero = parseInt(prompt("introduce un numero"));

        if (numero > numero_mayor) {
            numero_mayor = numero;
        }
    }
    alert("el numero mayor es " + numero_mayor);
}