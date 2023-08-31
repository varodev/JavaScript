/*Realizad un programa javascript que pida un texto al usuario y al pulsar un botón lo
convierta en dos cadenas del mismo tamaño separadas por “- - - -“. Utiliza los métodos
adecuados de la clase String.
Por ejemplo si introducimos el texto HOLA mostrará HO- - - -LA*/

function partir_texto() {
    let texto = prompt("introduce un texto");
    let tamano_texto = texto.length;
    let parte1 = texto.substring(0, (tamano_texto / 2));
    let parte2 = texto.substring((tamano_texto / 2), tamano_texto);

    alert(parte1 + "----" + parte2);
}