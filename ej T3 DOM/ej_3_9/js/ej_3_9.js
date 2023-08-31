/*Usando la misma base html y css del ejercicio anterior realizar un programa js que al
pulsar un botón vaya preguntando al usuario si quiere añadir un nuevo item a la lista, en
caso afirmativo le pide el texto del item y lo añade a la lista de ciudades. Se repite el
proceso hasta que el usuario diga “NO” (Sólo se pulsa una vez el botón).*/
function insertar_items() {
    let lista_ciudades = document.getElementById("listaCiudades"); //padre
    let obj_lista = null; //hijo
    let elemento_anadir = "";
    let nodotexto = "";
    const SI = "SI"

    let pregunta = prompt("Desea añadir un elemento de la lista? SI/NO");

    while (pregunta.localeCompare(SI) == 0) {
        elemento_anadir = prompt("Introduce una ciudad para añadir en la lista");
        obj_lista = document.createElement("li");
        nodotexto = document.createTextNode(elemento_anadir);
        obj_lista.appendChild(nodotexto);
        lista_ciudades.appendChild(obj_lista);

        pregunta = prompt("Desea añadir un elemento de la lista? SI/NO");
    }
}