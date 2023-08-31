function calcular_long_y_area() {
    let input = document.getElementById("id_radio_circ").value; //captura el valor input
    let crear_div, crear_textarea, introducir_texto = null

    crear_div = document.createElement("div")
    crear_textarea = document.createElement("textarea")
    introducir_texto = document.createTextNode("el area es: " + calcular_area_circ(input) + ", la longitud es " + calcular_long_circ(input))
    crear_textarea.appendChild(introducir_texto)
    crear_div.appendChild(crear_textarea)
    document.body.appendChild(crear_div)
}

function calcular_area_circ(input) {
    return (Math.PI * input * input);
}

function calcular_long_circ(input) {
    return (2 * Math.PI * input);
}