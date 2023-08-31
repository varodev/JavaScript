/*Realizar una app web que tenga 3 cajas de texto, en ellas se puede poner 
el color de la bici, el bastidor y la url de la imagen.
Uno de los botones nos permitirá insertar una bici en un array a partir 
de la información de las cajas de texto. Si pulsamos varias veces 
insertaremos varias arrayBicis. El otro botón nos permitirá mostrar 
 todas las arrayBicis del array en el navegador y su información asociada.*/

class Bici {
    constructor(color, bastidor, imagen) {
        this.color = color;
        this.bastidor = bastidor;
        this.imagen = imagen;
    }
    //getters//
    getColor() {
        return this.color;
    }
    getBastidor() {
        return this.bastidor;
    }
    getImagen() {
        return this.imagen;
    }
}
var arrayBicis = [];
function insertarBicicleta() {
    let color = document.getElementById("idColor").value;
    let bastidor = document.getElementById("idBastidor").value;
    let imagen = document.getElementById("idImagenBici").value;

    let bicicleta = new Bici(color, bastidor, imagen);

    arrayBicis.push(bicicleta);
    alert("elemento insertado")
}

function mostrarBicicletas() {
    for (let elemento of arrayBicis) {
        infoBici(elemento);
    }
}

function infoBici(bicicleta) {
    let padre = document.getElementById("resultado");
    
    let color = bicicleta.getColor();
    let bastidor = bicicleta.getBastidor();
    let urlImagen = bicicleta.getImagen();

    let imagen = document.createElement('img');
    imagen.src = urlImagen;
    imagen.height = 300;
    imagen.width = 400;
    padre.appendChild(imagen)

    let parrafo = document.createElement("p");
    parrafo.innerText = "Color: " + color + " Bastidor: " + bastidor;
    padre.appendChild(parrafo);
}

/*function mostrarBicicletas() {
    for (let elemento of arrayBicis) {
        let padre = document.getElementById("resultado");
        let color = elemento.getColor();
        let bastidor = elemento.getBastidor();
        let urlImagen = elemento.getImagen();

        let imagen = document.createElement('img');
        imagen.src = urlImagen;
        imagen.height = 300;
        imagen.width = 400;
        padre.appendChild(imagen)

        let parrafo = document.createElement("p");
        parrafo.innerText = "Color:" + color + " Bastidor: " + bastidor;
        padre.appendChild(parrafo);
    }
} */