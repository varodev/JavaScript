/*Realiza un programa que tenga declarado internamente un array de equipos de fútbol, le
pide al usuario un equipo a ver si acierta y está entre los equipos del array. El programa
busca el equipo entre los elementos del array y le indica al usuario si está o no. Cuando
lo encuentra deja de recorrer el array. El array podría ser vacío.*/
let equipos = new Array('Madrid', 'Barsa', 'Atleti', 'Sevilla', 'Betis');

function buscar_elemento() {
    let acierta = false;
    let posicion = 0;
    let pregunta = prompt("Introduce un equipo de futbol para compararlo con el array");

    while (!acierta && (posicion < equipos.length)) {
        if (equipos[posicion].localeCompare(pregunta) == 0) {
            acierta = true;
            alert("Has acertado");
        }
        posicion++;
    }

    if (!acierta) {
        alert("No has acertado");
    }
}