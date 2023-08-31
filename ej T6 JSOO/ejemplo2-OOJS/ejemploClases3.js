class Bici {
  constructor(color, año, bastidor, imagen) {
    this.color = color;
    this.año = año;
    this.bastidor = bastidor;
    this.imagen = imagen;
  }
  getImagen() {
    return this.imagen;
  }
  mostrarInfo() {
    return (
      "Color: " +
      this.color +
      " Año: " +
      this.año +
      " Bastidor: " +
      this.bastidor
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let arrayBicis = new Array();
  let biciAux = null;

  let bicicleta = new Bici(
    "rojo",
    2020,
    "sldjflsdgjsag",
    "https://www.clootbike.com/images/products/bicicleta-montana-mujer-xrtrail-7.0-2.jpg"
  );
  let bicicleta2 = new Bici(
    "verde",
    2004,
    "asldjglsj",
    "https://www.clootbike.com/images/products/bicicleta-montana-mujer-xrtrail-7.0-2.jpg"
  );

  arrayBicis.push(bicicleta);
  arrayBicis.push(bicicleta2);

  biciAux = arrayBicis.pop();
  mostrarBicicletaLog(biciAux);

  biciAux = arrayBicis.pop();
  mostrarBicicletaLog(biciAux);
});

function mostrarBicicletaLog(bici) {
  console.log(bici.mostrarInfo());
}
