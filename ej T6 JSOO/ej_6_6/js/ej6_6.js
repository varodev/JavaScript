/*Dado el array JSON que se detalla más abajo, o uno similar, que estará declarado
internamente, crear una app web que permita obtener información de 
isbn, author(nombre, apellido), editor(nombre, apellido), titulo, categorias
Se mostrará en una cabecera H1. Observa la interfaz de la app.
Para convertir un objeto en el texto para la cabecera H1 puedes usar JSON.Parse*/
var arrayLibrosJSON = [{ /////////////////////////////////////
        "isbn": "123-456-222",
        "author": {
            "lastname": "De Cervantes",
            "firstname": "Miguel"
        },
        "editor": {
            "lastname": "Orbegoza",
            "firstname": "Carla"
        },
        "title": "El Quijote",
        "category": ["Ficción", "Poesía"]
    },
    { /////////////////////////////////////
        "isbn": "456-444-222",
        "author": {
            "lastname": "Aligieri",
            "firstname": "Dante"
        },
        "editor": {
            "lastname": "Ridau",
            "firstname": "José"
        },
        "title": "La Divina Comedia",
        "category": ["Costumbrismo", "Historia"]
    },
    { /////////////////////////////////////
        "isbn": "666-786-222",
        "author": {
            "lastname": "Shakespeare",
            "firstname": "William"
        },
        "editor": {
            "lastname": "Timerman",
            "firstname": "Joseph"
        },
        "title": "Hamlet",
        "category": ["Ficción", "Novela"]
    }
];
//let objetoJS = JSON.parse(arrayLibrosJSON);
let selecion = document.getElementById("operacion"); //value en el switch
var padre = document.getElementById("resultado");

function seleccionar(){
    switch (selecion.value) {
        case "autor":
            padre.textContent = ""
            crearAutor(padre, arrayLibrosJSON)
            break;
        case "editor":
            padre.textContent = ""
            crearEditor(padre, arrayLibrosJSON)
            break;
        case "titulo":
            padre.textContent = ""
            crearTitulo(padre, arrayLibrosJSON)
            break;
        case "categoría":
            padre.textContent = ""
            crearCategoria(padre, arrayLibrosJSON)
            break;
        default:
            alert("you loose")
            break;
    }
}

function crearAutor(padre, arrayLibrosJSON) {
    for (let elemento of arrayLibrosJSON) {
        let cabecera1 = document.createElement("h1");
        let nodo1 = document.createTextNode(elemento.author.firstname + " " + elemento.author.lastname);
        cabecera1.appendChild(nodo1);
        padre.appendChild(cabecera1);
    }
}

function crearEditor(padre, arrayLibrosJSON) {
    for (let elemento of arrayLibrosJSON) {
        let cabecera1 = document.createElement("h1");
        let nodo1 = document.createTextNode(elemento.editor.firstname + " " + elemento.editor.lastname);
        cabecera1.appendChild(nodo1);
        padre.appendChild(cabecera1);
    }
}

function crearTitulo(padre, arrayLibrosJSON) {
    for (let elemento of arrayLibrosJSON) {
        let cabecera = document.createElement("h1");
        let nodo = document.createTextNode(elemento.title);
        cabecera.appendChild(nodo);
        padre.appendChild(cabecera);
    }
}

function crearCategoria(padre, arrayLibrosJSON) {
    for (let elemento of arrayLibrosJSON) {
        let cabecera = document.createElement("h1");
        let nodo = document.createTextNode(elemento.category);
        cabecera.appendChild(nodo);
        padre.appendChild(cabecera);
    }
}

/*let selecion = document.getElementById("operacion"); //value en el switch
var padre = document.getElementById("resultado");

function seleccionar(){///////////////////cambiar el <!--onchange="seleccionar()--> en el html
    switch (selecion.value) {
        case "autor":
            padre.textContent = ""
            crearAutor(padre, arrayLibrosJSON)
            break;
        case "editor":
            padre.textContent = ""
            crearEditor(padre, arrayLibrosJSON)
            break;
        case "titulo":
            padre.textContent = ""
            crearTitulo(padre, arrayLibrosJSON)
            break;
        case "categoría":
            padre.textContent = ""
            crearCategoria(padre, arrayLibrosJSON)
            break;
        default:
            alert("you loose")
            break;
    }
}

function crearAutor(padre, arrayLibrosJSON) {
    for (let elemento of arrayLibrosJSON) {
        let cabecera1 = document.createElement("h1");
        let nodo1 = document.createTextNode(elemento.author.firstname + " " + elemento.author.lastname);
        cabecera1.appendChild(nodo1);
        padre.appendChild(cabecera1);
    }
}

function crearEditor(padre, arrayLibrosJSON) {
    for (let elemento of arrayLibrosJSON) {
        let cabecera1 = document.createElement("h1");
        let nodo1 = document.createTextNode(elemento.editor.firstname + " " + elemento.editor.lastname);
        cabecera1.appendChild(nodo1);
        padre.appendChild(cabecera1);
    }
}

function crearTitulo(padre, arrayLibrosJSON) {
    for (let elemento of arrayLibrosJSON) {
        let cabecera = document.createElement("h1");
        let nodo = document.createTextNode(elemento.title);
        cabecera.appendChild(nodo);
        padre.appendChild(cabecera);
    }
}

function crearCategoria(padre, arrayLibrosJSON) {
    for (let elemento of arrayLibrosJSON) {
        let cabecera = document.createElement("h1");
        let nodo = document.createTextNode(elemento.category);
        cabecera.appendChild(nodo);
        padre.appendChild(cabecera);
    }
}*/