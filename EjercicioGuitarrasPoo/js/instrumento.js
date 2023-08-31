function Instrumento(categoria, nombre, precio, destacado, foto) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.destacado = destacado;
    this.foto = foto;

    this.mostrarInstrumentos = function() {

        /*if (categoria == "guitarra") {
            document.querySelector(categoria.guitarra);

        } else if (categoria == "bajo") {
            document.querySelector(categoria.bajo);

        } else {
            document.querySelector(categoria.ukelele);*/

        let div = document.createElement("div");
        div.className = "col-4";
        let categoria = document.createElement("h3");
        categoria.innerText = this.categoria;
        let nombre = document.createElement("h3");
        nombre.innerText = this.nombre;
        let precio = document.createElement("p");
        precio.innerText = this.precio;
        let destacado = document.createElement("p");
        destacado.innerText = this.destacado;
        let foto = document.createElement("img");
        foto.src = "./images/" + this.foto;

        div.appendChild(foto);
        div.appendChild(categoria);
        div.appendChild(nombre);
        div.appendChild(destacado);
        div.appendChild(precio);


        /*This es la propiedades que le pasemos
        lo recibe por parametro lo iguala a la variable de clase*/


        return div;

    }
}