/*Crearemos un objeto de tipo this que sera el que tenga el for eacht
y sera al que llamaremos cada vez que queramos ejcutarlo en la tiendaCoches
propuiedades de la clase con metodos de mostrar y pintar y coches
Em tienda coches seguimos cargando el json*/


function Coche(marca, modelo, kilometros, anyo, precio, motor, foto) {
    this.marca = marca;
    this.modelo = modelo;
    this.kilometros = kilometros;
    this.anyo = anyo;
    this.precio = precio;
    this.motor = motor;
    this.foto = foto;

    /*JavaScrip detecta automaticamente que kilometros corresponde a un atributo de coches */


    this.mostrarCoches = function() {

        let div = document.createElement("div");
        let marca = document.createElement("h3");
        marca.innerText = this.marca;
        let modelo = document.createElement("h3");
        modelo.innerText = this.modelo;
        let kilometros = document.createElement("p");
        kilometros.innerText = this.kilometros;
        let anyo = document.createElement("p");
        anyo.innerText = this.anyo;
        let precio = document.createElement("p");
        precio.innerText = this.precio;
        let motor = document.createElement("p");
        motor.innerText = this.motor;
        let foto = document.createElement("img");
        foto.src = "./images/" + this.foto;

        div.appendChild(foto);
        div.appendChild(marca);
        div.appendChild(modelo);
        div.appendChild(motor);
        div.appendChild(anyo);
        div.appendChild(kilometros);
        div.appendChild(precio);


        /*This es la propiedades que le pasemos
        lo recibe por parametro lo iguala a la variable de clase*/
        return div;

    }

}