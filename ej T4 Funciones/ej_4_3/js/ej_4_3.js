function cambiar_estilos() {
    let palabra_a_buscar = document.getElementById("cajaTexto").value;
    let lista_parrafos_documento = document.getElementsByTagName("p");
    let array_palabras = [];
    let lista_items_a_insertar = [];
    let ppal = document.getElementById("principal")

    for (let elemento of lista_parrafos_documento) {
        if (elemento.innerHTML.indexOf(palabra_a_buscar) >= 0) {
            console.log("La palabra " + palabra_a_buscar + " está en el párrafo " + elemento.innerHTML);

            let lista_palabras_parrafo = elemento.innerHTML.split(' ');
            array_palabras.push(lista_palabras_parrafo[0]);
        }
    }
    lista_items_a_insertar = crear_lista(array_palabras); //llamado a la función

    ppal.appendChild(lista_items_a_insertar);
}

function crear_lista(array_textos) {
    let item, nodoTexto = null;
    let lista = document.createElement("ul");

    for (let elemento of array_textos) {
        item = document.createElement("li");
        nodoTexto = document.createTextNode(elemento);
        item.appendChild(nodoTexto);
        lista.appendChild(item);
    }
    return lista;
}