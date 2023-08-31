/*Crea un fichero JSON (bicicletas.json) del tipo que se indica abajo y 
cárgalo en el servidor JSON, crea una app que tenga un botón que cuando 
se pulse acceda mediante Ajax al servidor JSON, consulte los datos y 
muestre cada uno de ellos en un div (en un párrafo y en una foto).*/
function cargarBicis() {
    let objetoAjax = new XMLHttpRequest();
    let urlServidor = 'http://localhost:3000/listaBicis';
    objetoAjax.open("GET", urlServidor, true);
    objetoAjax.send();
    objetoAjax.onreadystatechange = crearBicis;
}

function crearBicis() {
    if ((this.readyState == 4) && (this.status == 200)) {
        let lista = JSON.parse(this.responseText);

        for (let i = 0; i < lista.length; i++) {
            let padre = document.getElementById("resultado");
            let imagen = document.createElement('img');
            let parrafo = document.createElement("p");

            imagen.src = lista[i].imagen;
            imagen.width = 500;
            imagen.height = 500;

            parrafo.innerText = lista[i].bastidor + "--" + lista[i].marca;

            padre.appendChild(imagen);
            padre.appendChild(parrafo);
        }
    }
}

/*function insertarBici(lista){
    let padre = document.getElementById("resultado");
    let imagen = document.createElement('img');
    let parrafo = document.createElement("p");

    imagen.src = lista.imagen;
    imagen.width = 500;
    imagen.height = 500;

    parrafo.innerText = lista.bastidor + "--" + lista.marca;

    padre.appendChild(imagen);
    padre.appendChild(parrafo);
}*/