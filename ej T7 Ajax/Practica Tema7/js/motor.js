/*Queremos hacer una app basada en Ajax que convierta moneda, fíjate en la interfaz:
Podemos escoger entre 4 monedas origen y las mismas como destino. El resultado se
muestra en un párrafo debajo de los desplegables.*/
function cargarDatos() {
    let capturaOrigen = document.getElementById("moneda_origen").value;
    let objetoAjax = new XMLHttpRequest();
    let urlServidor = "https://v6.exchangerate-api.com/v6/cf3d99d22e4a5f37263f75a6/latest/" + capturaOrigen; //por defecto USD
    objetoAjax.open("GET", urlServidor, true);
    objetoAjax.send();
    objetoAjax.onreadystatechange = gestionarCambio;
}

function gestionarCambio() {
    if (this.readyState == 4 && this.status == 200) {
        let lista = JSON.parse(this.responseText);
        let padre = document.getElementById("resultado");
        let parrafo = document.getElementById("parrafo-resultado");
        let capturaOrigen = document.getElementById("moneda_origen").value;
        let capturaDestino = document.getElementById("moneda_destino").value;
        let cajaNumero = document.getElementById("cajaCantidad").value;
        let mensaje = "";
        let cambioDivisa = 0;
        let lista_temporal = lista.conversion_rates;

        if (cajaNumero <= 0) {
            alert("El valor introducido no debe ser cero ni negativo.");
        } else if (capturaOrigen.localeCompare(capturaDestino) == 0) {
            mensaje = "Misma divisa seleccionada " + capturaOrigen + " - " + capturaDestino;
        } else {
            cambioDivisa = calcularConversion(capturaDestino, lista_temporal);
            mensaje = cajaNumero + " " + capturaOrigen + " = " + (cajaNumero * cambioDivisa) + " " + capturaDestino;
        }

        parrafo.innerText = mensaje;
        padre.appendChild(parrafo);
    }
}

function calcularConversion(capturaDestino, lista_temporal) {
    let conversion = 0;
    switch (capturaDestino) {
        case "USD":
            conversion = lista_temporal.USD;
            break;
        case "EUR":
            conversion = lista_temporal.EUR;
            break;
        case "JPY":
            conversion = lista_temporal.JPY;
            break;
        case "GBP":
            conversion = lista_temporal.GBP;
            break;
    }
    return conversion;
}