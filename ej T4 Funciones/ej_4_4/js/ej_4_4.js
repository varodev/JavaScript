function realizar_operacion() {
    let padre_div_contenedor = document.getElementById("contenido")
    let seleccion = document.getElementById("selec-operacion").value


    switch (seleccion) {
        case "imagen":
            console.log("dentro")
            let url = prompt("introduce la url de la imagen")
            crear_imagen(url, padre_div_contenedor)
            break;
        case "tabla":
            let num_filas = parseInt(prompt("introduce el numero de filas"))
            let num_columnas = parseInt(prompt("introduce el numero de columnas"))
            crear_tabla(num_filas, num_columnas, padre_div_contenedor)
            break;
        case "cabecera":
            let texto_cabecera = prompt("introduce el texto de la cabecera")
            crear_cabecera(texto_cabecera, padre_div_contenedor)
            break;
        default:
            alert("error")
            break;
    }

    function crear_imagen(url, padre_div_contenedor) {
        let imagen = document.createElement("img")
        imagen.src = url;
        padre_div_contenedor.appendChild(imagen)
        return imagen
    }

    function crear_cabecera(texto_cabecera, padre_div_contenedor) {
        let cabecera = document.createElement("h1")
        cabecera.innerText = texto_cabecera
        padre_div_contenedor.appendChild(cabecera)
        return cabecera
    }

    function crear_tabla(num_filas, num_columnas, padre_div_contenedor) {
        let tabla = document.createElement("table")
        for (let i = 0; i <= num_filas; i++) {
            let filas = tabla.insertRow(-1)
            for (let j = 0; j <= num_columnas; i++) {
                let celdas = filas.insertCell(-1)
                celdas.innerText = j
            }

        }
        padre_div_contenedor.appendChild(tabla)

    }




}