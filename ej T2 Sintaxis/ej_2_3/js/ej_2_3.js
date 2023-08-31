/*Realizar una aplicación web que tenga una variable inicializada al comienzo del programa
al carácter “:”. Tendrá 3 botones, uno permitirá ir concatenando el carácter “)” a la
variable y mostrar la variable, el otro botón permitirá concatenar el carácter “-” y mostrar
la variable, el otro botón permitirá reiniciar la variable al valor “:”*/
let variable = ":";

function concatenar_1() {
    variable = variable + ")";
    alert(variable);
}

function concatenar_2() {
    variable = variable + "-";
    alert(variable);
}

function inicializar() {
    let variable = ":";
}