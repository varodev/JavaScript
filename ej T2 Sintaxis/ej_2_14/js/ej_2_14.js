/*Desarrollar un programa JavaScript que tenga declarado un array internos con las notas
de los alumnos. Debe mostrar la mayor nota, la menor y la media.*/
let notas = new Array(5, 6, 7, 9, 10, 4, 8, 7, 6, 4);

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
}