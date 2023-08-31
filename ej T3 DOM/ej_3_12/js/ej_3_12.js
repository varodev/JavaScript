/*Realizar una aplicación web que contenga tres botones, uno de ellos, al pulsarlo debe
crear un div verde que contenga una imagen, el otro permitirá agrandar la imagen, el div
que lo contiene y cambiar el color de fondo del div. El tercer botón permite borrar todo.
Para eliminar una clase usamos elemento.classlist.remove().
Ver ejemplo:*/

function crearImagen() {
    let imagen = document.createElement("img")
    imagen.src = "imagenes/border-collie.jpg"
    imagen.id = "foto"

    let contenedor = document.createElement("div")
    contenedor.id = "container"
    contenedor.classList.add("verde")
    contenedor.appendChild(imagen)
    document.body.appendChild(contenedor)

}

function cambiarImagen() {
    let contenedor = document.getElementById("container")
    contenedor.classList.remove("verde")
    contenedor.classList.add("rojo")
    let imagen = document.getElementById("foto")
    imagen.width = "700"
    imagen.height = "700"
}

function borrarContenedor() {
    let contenedor = document.getElementById("container")
    contenedor.remove()
}