/*Realiza una app que tenga una caja de texto y un botón, en la caja de texto se puede
poner un número del uno al seis. En función del número elegido se mostrará la imagen
del dado correspondiente. La app admite que se ponga “6” o “seis”. Las imágenes
necesarias se almacenan en un subdirectorio imagen de la aplicación.*/
function mostrar_dado() {
    let div_padre = document.createElement("div"); //padre
    let imagen = document.createElement("img"); //hijo
    let caja_texto = document.getElementById("entrada_texto").value;
    let url_imagen = ""

    switch (caja_texto) {
        case "1":
        case "uno":
            url_imagen = "images/uno.png"
            break;
        case "2":
        case "dos":
            url_imagen = "images/dos.png"
            break;
        case "3":
        case "tres":
            url_imagen = "images/tres.png"
            break;
        case "4":
        case "cuatro":
            url_imagen = "images/cuatro.png"
            break;
        case "5":
        case "cinco":
            url_imagen = "images/cinco.png"
            break;
        case "6":
        case "seis":
            url_imagen = "images/seis.png"
            break;
        default:
            alert("error")
            break;
    }

    imagen.src = url_imagen;
    imagen.width = 150
    imagen.height = 150
    div_padre.appendChild(imagen)
    document.body.appendChild(div_padre)
}