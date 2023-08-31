/*Realizar una aplicación web que tenga declarado internamente un array de series, al
pulsar un botón muestra una cabecera y cada serie en un párrafo diferente. Por ejemplo:
Mi series favoritas
Vikingos
Gambito de Dama
La casa de Papel*/
function aniadir_series() {

    let cabecera = document.createElement("h1");
    let texto_cabecera = document.createTextNode("Mi serie favoria");
    cabecera.appendChild(texto_cabecera);
    document.body.appendChild(cabecera);

    let parrafo1 = document.createElement("p");
    let texto_parrafo1 = document.createTextNode("Vikingos");
    parrafo1.appendChild(texto_parrafo1);
    document.body.appendChild(parrafo1);

    let parrafo2 = document.createElement("p");
    let texto_parrafo2 = document.createTextNode("Gambito de Dama");
    parrafo2.appendChild(texto_parrafo2);
    document.body.appendChild(parrafo2);

    let parrafo3 = document.createElement("p");
    let texto_parrafo3 = document.createTextNode("La casa de papel");
    parrafo3.appendChild(texto_parrafo3);
    document.body.appendChild(parrafo3);
}
/*let array_series = new Array("Vikingos", "Gambito de Dama", "La casa de papel")

function aniadir_series() {
    let cabecera = document.createElement("h1")
    let texto_cabecera = document.createTextNode("Mi series favoritas")
    cabecera.appendChild(texto_cabecera)
    document.body.appendChild(cabecera)

    for (let i = 0; i < array_series.length; i++) {
        let parrafo = document.createElement("p")
        let texto_parrafo = document.createTextNode(array_series[i])
        parrafo.appendChild(texto_parrafo)
        document.body.appendChild(parrafo)

    }

}*/