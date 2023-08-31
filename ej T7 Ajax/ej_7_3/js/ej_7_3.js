////////////////////////////parte del contador//////////////////////////
/*Para comprobar que la aplicación funciona en paralelo a la carga de 
datos pon en la parte superior un contador de tiempo que marque los 
segundos transcurridos desde que se cargó la aplicación.*/
document.addEventListener("DOMContentLoaded", function() {
    setInterval(contadorActivo, 1000);
});

var contador = 0;

function contadorActivo() {
    let counter = document.getElementById("contador")
    counter.innerText = contador++;
}

////////////////////////////parte de JSON///////////////////////////////
/*En la plataforma tienes un fichero JSON con películas(moviedata.json). 
Crea con él un API REST en el servidor JSON que hemos visto en clase. 
Realiza una app js que permita mostrar los datos de las primeras 
20 películas. Se debe mostrar para cada película una imagen y 
un párrafo que contenga el título y el argumento(plot). */
function cargarDatos() {
    let objetoAjax = new XMLHttpRequest();
    let urlServidor = "http://localhost:3000/lista_peliculas";
    objetoAjax.open("GET", urlServidor, true);
    objetoAjax.send();
    objetoAjax.onreadystatechange = gestionarPelis;
}
const PELIS = 20;
var paginacion = 0;
var lista = null;

function gestionarPelis() {

    if (this.readyState == 4 && this.status == 200) {
        lista = JSON.parse(this.responseText);
        for (let i = 0; i < lista.length && i < PELIS; i++) {
            let contenedor = document.getElementById("central");
            let ficha = document.createElement("div");
            ficha.classList.add("div_info_peli");
            let imagen = document.createElement("img");
            imagen.classList.add("img_peli");
            let parrafo = document.createElement("p");

            parrafo.innerText = lista[i].title + "--" + lista[i].info.plot;

            imagen.src = lista[i].info.image_url;

            ficha.appendChild(imagen);
            ficha.appendChild(parrafo);
            contenedor.appendChild(ficha);
        }
        paginacion++;
    }
}

/*Añade una nueva funcionalidad al ejercicio anterior. 
La aplicación debe tener un botón que permita paginar, es decir, 
borrar las 20 películas que se están mostrando y mostrar las 
20 siguientes.*/
function cargarPaginaSiguiente() {
    let divInfoPeli = document.getElementsByClassName("div_info_peli");

    while (divInfoPeli.length > 0) {
        divInfoPeli[0].parentNode.removeChild(divInfoPeli[0]);
    }

    for (let i = 0;
        ((i + (paginacion * PELIS)) < lista.length) && (i < PELIS); i++) {
        let contenedor = document.getElementById("central");
        let ficha = document.createElement("div");
        ficha.classList.add("div_info_peli");
        let imagen = document.createElement("img");
        imagen.classList.add("img_peli");
        let parrafo = document.createElement("p");

        parrafo.innerText = lista[i + (paginacion * PELIS)].title + "--" + lista[i + (paginacion * PELIS)].info.plot;

        imagen.src = lista[i + (paginacion * PELIS)].info.image_url;

        ficha.appendChild(imagen);
        ficha.appendChild(parrafo);
        contenedor.appendChild(ficha);
    }
    paginacion++;
}