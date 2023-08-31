/*Realizar una aplicación web que tenga declarado internamente un array de series, al
pulsar un botón debe crear una lista como la de abajo. Utiliza las funciones
createElement(), createTextNode() y appendChild().
- Vikingos
- Gambito de dama
- La casa de Papel*/
let series = new Array("Vikingos", "Gambito de dama", "La casa de papel")

function mostrar_series() {
    let lista = document.createElement("ul")

    for (let i = 0; i < series.length; i++) {
        let elemento = document.createElement("li");
        let rellenar_elemento = document.createTextNode(series[i]);
        elemento.appendChild(rellenar_elemento);
        lista.appendChild(elemento);
        document.body.appendChild(lista);
    }





}