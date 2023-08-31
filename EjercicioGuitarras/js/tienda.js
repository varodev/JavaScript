window.onload = cargar;
var instrumentos = [];
console.log("funcion de windows onload llamada Cargar")

function cargar() {
    console.log("funcion de cargar con la inicializacion del select")
    const select = document.querySelector('#categoria');
    select.addEventListener("change", filtrar)
}
fetch('productos.json')
    .then(response => response.json())
    .then(guitarras => {
        /*El fetch es igual que la llamada al ajax, solo que en este caso 
        se le pasa el nombre del json al fetch y a continuacion creamos 2 promesas con thebn*/
        instrumentos = guitarras;
        console.log("array de intrumentos " + instrumentos);
        let section = document.querySelector("#destacado");

        guitarras.forEach(guitarra => { // este signo se llama funcion flecha

            /*Div para que cada guitarra con sus datos salga en el html que pondremos*/
            if (guitarra.destacado == "si") {

                let div = document.createElement("div");
                let categoria = document.createElement("h3");
                categoria.innerText = guitarra.categoria;
                let nombre = document.createElement("h3");
                nombre.innerText = guitarra.nombre;
                let precio = document.createElement("h3");
                precio.innerText = guitarra.precio;
                let destacado = document.createElement("h3");
                destacado.innerText = guitarra.destacado;

                let foto = document.createElement("img");
                foto.src = "./images/" + guitarra.foto;

                div.appendChild(foto);
                div.appendChild(nombre);
                div.appendChild(categoria);
                div.appendChild(precio);
                div.appendChild(destacado);
                section.appendChild(div);
            }
        });

        let section2 = document.querySelector('#tienda');
        guitarras.forEach(guitarra2 => { // este signo se llama funcion flecha
            /*Div para que cada guitarra con sus datos salga en el html que pondremos*/

            let div = document.createElement("div");
            let categoria = document.createElement("h3");
            categoria.innerText = guitarra2.categoria;
            let nombre = document.createElement("h3");
            nombre.innerText = guitarra2.nombre;
            let precio = document.createElement("h3");
            precio.innerText = guitarra2.precio;
            let destacado = document.createElement("h3");
            destacado.innerText = guitarra2.destacado;
            let foto = document.createElement("img");
            foto.src = "./images/" + guitarra2.foto;

            div.appendChild(foto);
            div.appendChild(nombre);
            div.appendChild(categoria);
            div.appendChild(precio);
            div.appendChild(destacado);
            section2.appendChild(div);
        });
    });

function filtrar() {
    limpiar();

    const select = document.querySelector('#categoria');
    let section = document.querySelector('#tienda');


    instrumentos.forEach(guitarra => { // este signo se llama funcion flecha

        /*Div para que cada guitarra con sus datos salga en el html que pondremos*/
        if (select.value == "todo") {

            let div = document.createElement("div");
            let categoria = document.createElement("h3");
            categoria.innerText = guitarra.categoria;
            let nombre = document.createElement("h3");
            nombre.innerText = guitarra.nombre;
            let precio = document.createElement("h3");
            precio.innerText = guitarra.precio;
            let destacado = document.createElement("h3");
            destacado.innerText = guitarra.destacado;

            let foto = document.createElement("img");
            foto.src = "./images/" + guitarra.foto;

            div.appendChild(foto);
            div.appendChild(nombre);
            div.appendChild(categoria);
            div.appendChild(precio);
            div.appendChild(destacado);
            section.appendChild(div);
        } else if (guitarra.categoria == select.value) {

            let div = document.createElement("div");
            let categoria = document.createElement("h3");
            categoria.innerText = guitarra.categoria;
            let nombre = document.createElement("h3");
            nombre.innerText = guitarra.nombre;
            let precio = document.createElement("h3");
            precio.innerText = guitarra.precio;
            let destacado = document.createElement("h3");
            destacado.innerText = guitarra.destacado;

            let foto = document.createElement("img");
            foto.src = "./images/" + guitarra.foto;

            div.appendChild(foto);
            div.appendChild(nombre);
            div.appendChild(categoria);
            div.appendChild(precio);
            div.appendChild(destacado);
            section.appendChild(div);
        }
    });
}

function limpiar() {
    let section = document.querySelectorAll("#tienda div");
    for (let i = 0; i < section.length; i++) {
        document.getElementById("tienda").removeChild(section[i]);
    }
}

/*primero borrar todos los elementos de borrado dentro de la funcion filtrar y luego volver a pintar aquellos que hayamos seleccionado */
/*Esta estructura tambien se puede usar para xml*/