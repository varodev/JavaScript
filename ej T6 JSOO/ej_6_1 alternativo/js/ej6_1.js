/*Realizar una app gestione nuestras 2 mascotas, un perro y un gato, 
debe tener un desplegable en el que se puede elegir entre Perro y Gato.
Depende de la elección se mostrará la imagen de nuestro perro o nuestro 
gato. Cuando se selecciona un elemento del desplegable el navegador 
lanza el evento onchange. Internamente tendremos definida la 
clase Mascota y dos objetos, cada uno que represente a cada una de 
nuestras mascotas.*/

class Mascota {
  constructor(nombre) {
    this.nombre = nombre;
  }
  //getter
  getNombre() {
    return this.nombre;
  }
}

var padre = document.getElementById("resultado");

function cambiarMascota() {
  let mascota1 = new Mascota("Perro");
  let mascota2 = new Mascota("Gato");

  let mascotaSeleccionada = document.getElementById("mascota").value;

  if (mascotaSeleccionada.localeCompare("perro") == 0) {
    padre.textContent = "";
    mostrarMascota(mascota2);
  } else {
    padre.textContent = "";
    mostrarMascota(mascota1);
  }
}

function mostrarMascota(pet){
    let parrafo = document.createElement("p")
    parrafo.innerText = pet.getNombre();
    padre.appendChild(parrafo)
}













/*class Mascota {
    constructor(nombre) {
        this.nombre = nombre;
    }
    //getters//
    getNombre() {
        return this.nombre;
    }
}
var padre = document.getElementById("resultado");

function cambiarMascota() {
    let mascota1 = new Mascota("Perro");
    let mascota2 = new Mascota("Gato");

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
    let parrafo = document.createElement("p")
    parrafo.innerText=mascota.getNombre()

    padre.appendChild( parrafo)
}*/
