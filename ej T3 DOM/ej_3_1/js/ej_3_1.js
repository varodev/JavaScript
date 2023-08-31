/*Realizar una aplicación web que al pulsar un botón genere y muestre una cabecera y un
párrafo. Por ejemplo:
La mejor serie
Gambito de dama*/
function aniadir_serie() {

    let cabecera = document.createElement("h1");
    let texto_cabecera = document.createTextNode("la mejor serie");
    cabecera.appendChild(texto_cabecera);
    document.body.appendChild(cabecera);

    let parrafo = document.createElement("p");
    let texto_parrafo = document.createTextNode("Gambito de Dama");
    parrafo.appendChild(texto_parrafo);
    document.body.appendChild(parrafo);



}