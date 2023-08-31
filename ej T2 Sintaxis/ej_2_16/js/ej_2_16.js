/*Realizar una aplicación web que tenga dos botones, uno de ellos permite insertar
elementos del array, después de insertarlo muestra el array. El otro permite borrar el
último elemento del array y mostrar el array.*/
var array = new Array();

function insertar_en_array() {
    let insertar_en_array = prompt("inserta algo en el array");
    array.push(insertar_en_array);
    alert(array);
}

function eliminar_de_array() {
    array.pop();
    alert(array);
}