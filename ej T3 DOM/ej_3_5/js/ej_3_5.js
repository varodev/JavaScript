/*Realizad una aplicación web que tenga un botón, al pulsarlo debe pedir al usuario una url
de una imagen y la incruste en la página.*/
function aniadir_imagen() {
    let pedir = prompt("introduce una url");
    let crear_imagen = document.createElement("img");

    crear_imagen.src = pedir;
    document.body.append(crear_imagen);
}