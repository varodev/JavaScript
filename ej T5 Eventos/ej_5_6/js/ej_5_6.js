/*Realizad una app web que tenga un desplegable 
y cuando se seleccione un elemento del mismo (evento change)
se muestre la foto asociada.*/

var selecionar = document.getElementById("foto");//ojo el value
selecionar.addEventListener("change", seleccionarPaisaje)

function seleccionarPaisaje() {
    let ruta = "";
    switch (selecionar.value) {
        case "Montaña":
            ruta = "imagenes/montaña.jpg";
            break;
        case "Playa":
            ruta = "imagenes/playa.jpeg";
            break;
        case "Ciudad":
            ruta = "imagenes/ciudad.jpg";
            break;
        default:
            alert("error");
    }

    let padre = document.getElementById("resultado")
    let hijo = document.getElementById("imagenSeleccionada");

    if (hijo != null) { //si hay foto, es decir, a la primera no entra
        hijo.parentNode.removeChild(hijo)
    }

    hijo = document.createElement("img");
    hijo.src = ruta;
    hijo.id = "imagenSeleccionada"
    padre.appendChild(hijo);
}