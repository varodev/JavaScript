/*Realizar una variante del anterior que además recorra el array mostrando las notas hasta
que llegue a la primera menor que la media.*/
var notas = [8, 10, 4, 2, 9, 5, 0, 8, 7];

function calcular_notas() {
    let nota_mayor = notas[0];
    let nota_menor = notas[0];
    let nota_media = 0;
    let sumatorio = 0;

    for (let i = 0; i < notas.length; i++) {
        sumatorio = sumatorio + notas[i];
        if (notas[i] > nota_mayor) {
            nota_mayor = notas[i];
        }

        if (notas[i] < nota_menor) {
            nota_menor = notas[i];
        }
    }

    /*for(let elemento of notas){
        sumatorio = sumatorio + elemento
        if (elemento > nota_mayor){
            nota_mayor = elemento;
        }

        if (elemento < nota_menor){
            nota_menor = elemento;
        }*/

    nota_media = sumatorio / (notas.length);

    alert("la nota mayor " + nota_mayor + ", la nota menor " + nota_menor + ", la media es " + nota_media);
    let nota = 0;
    let posicion = 0;

    nota = notas[posicion];

    while ((nota > nota_media) && (posicion < notas.length)) {
        alert(nota);
        posicion++;
        nota = notas[posicion];
    }
}