/*Realiza un programa que tenga declarado internamente un array de números. Debe
componer un mensaje donde aparezcan todos los números concatenados y separados
por “_” y mostrarlo al usuario. A continuación debe pedir al usuario un número, sumar
dicho número a cada uno de los elementos del array y finalmente mostrar un mensaje
donde aparezcan los números del array, que se han actualizado, concatenados y
separados con “_”. Utiliza los dos tipos de bucles for que hemos visto.*/
let numeros = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
let texto_salida = "";

function sumar_numero() {
    let pedir_numero_sumar = 0;

    for (let elemento of numeros) {
        texto_salida = texto_salida.concat(elemento + "_");
    }
    alert(texto_salida);

    pedir_numero_sumar = parseInt(prompt("introduce un numero para sumar"));

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i] + pedir_numero_sumar;
    }
    texto_salida = " "; //resetar

    for (let elemento of numeros) {
        texto_salida = texto_salida.concat(elemento + "_");
    }
    alert("Despues de sumar " + texto_salida);
    /*function sumar_numero() {
    let concatenar = ""
    let pedir_numero = 0

    for (let i = 0; i < array.length; i++) {
        concatenar = concatenar.concat("--" + array[i])
    }
    alert(concatenar)

    pedir_numero = parseInt(prompt("introduce un numero"))

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + pedir_numero;
    }

    concatenar = " "

    for (i = 0; i < array.length; i++) {
        concatenar = concatenar.concat("--" + array[i])
    }
    alert("Despues" + concatenar)
}*/
}