/*Realizar un programa que pregunte al usuario si quiere concatenar un texto, en caso
afirmativo le pide el texto, lo concatena con los textos introducidos anteriormente y lo
muestra, asi sucesivamente mientras el usuario diga "--palabra--palabra--palabra"*/
function concatenar() {
    let texto_entrada = "";
    let texto_salida = "";
    let pregunta = prompt("quiere concatenar un texto? si o no");
    const SI = "si"

    while (pregunta.localeCompare(SI) == 0) {
        texto_entrada = prompt("introduce palabra a concatenar");
        texto_salida = texto_salida.concat("--" + texto_entrada);
        alert(texto_salida);
        pregunta = prompt("quiere concatenar un texto? si o no");
    }

}