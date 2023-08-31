/*Realiza un programa javascript que pida al usuario un número. A continuación muestra la
tabla de multiplicar de ese número. Por ejemplo, para el 4:
--0--4--8--12--18--20--24--28--32--26--40*/
function calcular_tabla_mult() {
    let texto_salida = "";
    let resultado = 0;
    let numero_a_multiplicar = parseInt(prompt("introduce el numero que deseas ver la tabla de multiplicar"));
    const DIEZ = 10

    for (let i = 0; i <= DIEZ; i++) {
        resultado = numero_a_multiplicar * i;
        texto_salida = texto_salida.concat("--" + resultado);
        //se almacena los 10 numeros, si fuera numero a numero, clicando boton a boton para el resultado, sera aqui alert(texto_salida);
    }
    alert(texto_salida);
}