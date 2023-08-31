/*Crea un JSON con datos de libros. Crear una app web que permita obtener 
información de los autores, los editores… 
Se mostrará en una cabecera H1. Observa la interfaz de la app.*/

var seleccion = document.getElementById("opcion")//value en el switch
var padre = document.getElementById("resultado")

seleccion.addEventListener("change",cargarJSON)

function cargarJSON(){
    let objetoAjax = new XMLHttpRequest();
    let urlServidor = 'http://localhost:3000/arrayLibrosJSON';
    objetoAjax.open("GET", urlServidor, true);
    objetoAjax.send();
    objetoAjax.onreadystatechange = crearElementos;
}

function crearElementos(){
    if ((this.readyState == 4) && (this.status == 200)) {
        listaObjetos = JSON.parse(this.responseText);
                switch (seleccion.value) {
                        case "autor":
                            padre.textContent=""
                            crearAutor(padre, listaObjetos)
                        break;
                        case "editor":
                            padre.textContent=""
                            crearEditor(padre, listaObjetos)
                        break;
                        case "titulo":
                            padre.textContent=""
                            crearTitulo(padre, listaObjetos)
                        break;
                        case "categoria":
                            padre.textContent=""
                            crearCategoria(padre, listaObjetos)
                        break;
                }
    }
}

function crearAutor(padre, listaObjetos){
    for (let elemento of listaObjetos){
        let cabecera1 = document.createElement("h1");
        let nodo1 = document.createTextNode(elemento.author.firstname + " " + elemento.author.lastname);
        cabecera1.appendChild(nodo1);
        padre.appendChild(cabecera1);
    }
}

function crearEditor(padre, listaObjetos){
    for (let elemento of listaObjetos){
        let cabecera1 = document.createElement("h1");
        let nodo1 = document.createTextNode(elemento.editor.firstname + " " + elemento.editor.lastname);
        cabecera1.appendChild(nodo1);
        padre.appendChild(cabecera1);
    }
}

function crearTitulo(padre, listaObjetos){
    for (let elemento of listaObjetos){
        let cabecera1 = document.createElement("h1");
        let nodo1 = document.createTextNode(elemento.title);
        cabecera1.appendChild(nodo1);
        padre.appendChild(cabecera1);
    }
}

function crearCategoria(padre, listaObjetos){
    for (let elemento of listaObjetos){
        let cabecera = document.createElement("h1");
        let nodo = document.createTextNode(elemento.category);
        cabecera.appendChild(nodo);
        padre.appendChild(cabecera);
    }
}

