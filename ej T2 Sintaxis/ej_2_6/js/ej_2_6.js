/*Realizar una calculadora online que pida al usuario dos números y el operador (+,-,*,/) y
muestre el resultado.*/

function calcular() {
    let n1 = parseInt(prompt("introduce el primer numero"));
    let n2 = parseInt(prompt("introduce el segundo numero"));
    let operacion = prompt("introduce el tipo de operacion");

    if (operacion.localeCompare("suma") == 0) {
        alert(n1 + n2);
    } else if (operacion.localeCompare("resta") == 0) {
        alert(n1 - n2);
    } else if (operacion.localeCompare("multiplicacion") == 0) {
        alert(n1 * n2);
    } else if (operacion.localeCompare("division") == 0) {
        alert(n1 / n2);
    } else {
        alert("error");
    }
}