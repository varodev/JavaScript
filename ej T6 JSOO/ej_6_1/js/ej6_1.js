/*Realizar una app gestione nuestras 2 mascotas, un perro y un gato, 
debe tener un desplegable en el que se puede elegir entre Perro y Gato.
Depende de la elección se mostrará la imagen de nuestro perro o nuestro 
gato. Cuando se selecciona un elemento del desplegable el navegador 
lanza el evento onchange. Internamente tendremos definida la 
clase Mascota y dos objetos, cada uno que represente a cada una de 
nuestras mascotas.*/
class Mascota {
    constructor(imagen) {
        this.imagen = imagen;
    }
    //getters//
    getImagen() {
        return this.imagen;
    }
}
var padre = document.getElementById("resultado");

function cambiarMascota() {
    let mascota1 = new Mascota("https://upload.wikimedia.org/wikipedia/commons/8/8c/Poligraf_Poligrafovich.JPG");
    let mascota2 = new Mascota("https://upload.wikimedia.org/wikipedia/commons/4/4c/Cat_on_its_back.jpg");

    let mascotaSeleccionada = document.getElementById("mascota").value;

    if (mascotaSeleccionada.localeCompare("perro") == 0) {
        padre.textContent = "";
        mostrarMascota(mascota1);
    } else {
        padre.textContent = "";
        mostrarMascota(mascota2);
    }
}

function mostrarMascota(mascota) {
    let imagen = document.createElement('img');
    imagen.src = mascota.getImagen();
    imagen.width = "400";

    padre.appendChild(imagen)
}