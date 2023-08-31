let array_entrada = new Array()

function cambiar_estilos() {
    let entrada = prompt("Introduzca el tag(p, table, ol...) y el estilo(DISCRETO,NORMAL,LLAMATIVO) separado por coma");
    array_entrada = entrada.split(",")

    let tag_cambio = array_entrada[0] //recoje decision tag
    let estilo_cambio = array_entrada[1] //recoje decision estilo

    switch (estilo_cambio) {
        case "DISCRETO":
            eliminar_estilo(tag_cambio, "NORMAL")
            eliminar_estilo(tag_cambio, "LLAMATIVO")
            anadir_estilo(tag_cambio, "DISCRETO")
            break;

        case "NORMAL":
            eliminar_estilo(tag_cambio, "LLAMATIVO")
            eliminar_estilo(tag_cambio, "DISCRETO")
            anadir_estilo(tag_cambio, "NORMAL")
            break;
        case "LLAMATIVO":
            eliminar_estilo(tag_cambio, "NORMAL")
            eliminar_estilo(tag_cambio, "DISCRETO")
            anadir_estilo(tag_cambio, "LLAMATIVO")
            break;

        default:
            alert("error")
            break;
    }
}

function eliminar_estilo(tag_cambio, CSS) {
    let elementos_a_cambiar = document.getElementsByTagName(tag_cambio);

    for (let elemento of elementos_a_cambiar) {
        elemento.classList.remove(CSS)
    }
}

function anadir_estilo(tag_cambio, CSS) {
    let elementos_a_cambiar = document.getElementsByTagName(tag_cambio);

    for (let elemento of elementos_a_cambiar) {
        elemento.classList.add(CSS)
    }
}