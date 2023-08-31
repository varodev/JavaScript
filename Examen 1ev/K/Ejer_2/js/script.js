function añadirCiudad(){
    let ciudad_añadir = document.getElementById("ciudad").value;
    let resultado = comprobarCiudad(ciudad_añadir);

    if(!resultado) {
        crearLi(ciudad_añadir);
    } else {
        alert("Introduzca un texto");
    }

}

function comprobarCiudad(ciudad_añadir){

    return ciudad_añadir == null || ciudad_añadir == undefined || ciudad_añadir.length == 0;
}

function crearLi(ciudad_añadir){
    let ul = document.getElementById("lista_ciudades");
    let li = document.createElement("li");
    let nodo_texto = document.createTextNode(ciudad_añadir);
    li.appendChild(nodo_texto);
    ul.appendChild(li);
}
