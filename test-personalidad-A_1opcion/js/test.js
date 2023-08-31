window.onload = cargar;
/*funcion para cargar la pagina con la peticion ajax*/

function cargar() {
    document.querySelector('#enviar').addEventListener("click", comprobar);

    let respuesta_personalidad = document.createElement("h3");
    respuesta_personalidad.id = "respuesta_personalidad";

    let respuesta_descripcion = document.createElement("p");
    respuesta_descripcion.id = "respuesta_descripcion";

    document.querySelector("#respuesta").appendChild(respuesta_personalidad);
    document.querySelector("#respuesta").appendChild(respuesta_descripcion);
}

/*La funcion comprueba y verfica el formulario*/
function comprobar() {
    console.log("Estamos dentro");

    let pregunta1 = document.querySelector("#pregunta1").value;
    let pregunta2 = document.querySelector("#pregunta2").value;
    let pregunta3 = document.querySelector("#pregunta3").value;
    let pregunta4 = document.querySelector("#pregunta4").value;

    let respuesta;

    console.log(pregunta1, pregunta2, pregunta3, pregunta4);

    if (pregunta1 == 0 || pregunta2 == 0 || pregunta3 == 0 || pregunta4 == 0) {
        document.querySelector("#Respuesta_validacion").innerHTML = "Debe seleccionar todas las respuestas";
    } else {
        document.querySelector("#Respuesta_validacion").innerHTML = "";
        respuesta = pregunta1 + pregunta2 + pregunta3 + pregunta4;
        console.log("Estas son las letras seleccionadas :" + respuesta);
        cargarAjax(respuesta);

    }

}

/*El ajax solo lo necesitamos cuando tengamos las 4 letras unidas.
El ajax es en si la interfaz de usuario, si lo tenemos en el html no hace falta, 
solo los necesitaremos cuando 
mi ajax sirve para recuperar los datos del xml y poder mostrar las respuestas que nos proporicine 
el usario desde los select*/

function cargarAjax(respuesta) {
    console.log("función");
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = cargartestA;
    peticion.open("GET", "testA.xml", true);
    peticion.send();

    function cargartestA() {

        if (peticion.readyState == 4) {
            if (peticion.status == 200) {

                /*Cogemos el xml y lo recorremos con un bucle for*/

                let xml = peticion.responseXML;
                console.log(xml);
                console.log(xml.querySelectorAll("tipo_personalidad").length);

                let personalidades = xml.querySelectorAll("tipo_personalidad");

                for (let i = 0; i < personalidades.length; i++) {

                    if (respuesta == personalidades[i].querySelector("tipo").textContent) {
                        let personalidad = personalidades[i].querySelector("personalidad").textContent;
                        let descripcion = personalidades[i].querySelector("descripcion").textContent;

                        console.log(personalidad, descripcion);

                        /**/

                        respuesta_descripcion.innerHTML = descripcion;
                        respuesta_personalidad.innerHTML = personalidad;



                        /*Creamos dos etiquetas para los campos y los ponemos en pantalla para que los vea el usuario del html
                        Esas etiquetas las crearemos para que cada vez que cliquemos podamos ver una respuesta diferente*/
                    }
                }
            }
        }
    }

}



/*el boton es el que llama a la funcion y guarda todos los resultados de las selecciones en el select.
Una vez que tengo una variable de 4 letras tenemos que cargar el ajax, cuando le llamamos le decimos en el bucle
que busque de todos los tipos cual es el que coincide con la variable, Un evento que tenga una opcion que recorra todas las opciones y las guardamos en una variable*/