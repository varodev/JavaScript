window.onload = cargarAjax;

function cargarAjax() {

    var miAjax = new XMLHttpRequest(); /*instanciamos el xmlrequest dentro de una variable por ejemplo llamamos "mi ajax"*/
    miAjax.onreadystatechange = cargarTexto; /*llama a la funcion que nosotros queramos*/
    miAjax.open("GET", "agenda.xml", true); /*tenemos dos metodos, este para recoger*/
    miAjax.send(); /*este metodo para enviar*/
    function cargarTexto() { /*Cuando se llama a la funcion, se le dice que cuando el estado este en 4, cogemos el ajax, y cuando le tenemos, le decimo que este en 200, que es que lo ha encontrado, pues puede haber un 404*/
        if (miAjax.readyState == 4) {
            if (miAjax.status == 200) {


                let agenda = miAjax.responseXML; /*vamos a manipular desde aqui todos los datos, porque tenemos "agenda" en esta zona del codigo*/
                //console.log(agenda);

                document.querySelector("#nombre").innerHTML = agenda.getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
                /*aqui ya tenemos seleccionada la etiqueta xml, hablamos con la etiqueta nombre del html pra poder coger la inforamcion.
                 Dentro de las etiquetas de contenido hay nodo de texto, desde aqui no deberiamos no poder el nodeValue, lo que esto mostrará en el xml es MARIA*/

                document.querySelector("#apellido").innerHTML = agenda.getElementsByTagName("apellido")[0].textContent;

                document.querySelector("#direccion").innerHTML = agenda.querySelectorAll("direccion")[0].textContent;

                /*Si no se pone el array a posición 0, cuando ejecutamos el html en el localhost, sale "indefinido", poniendo el [0]
                nos carga todos los campos. Hemos usando diferentes opciones para localizar las etiquetas */

                document.querySelector("#provincia").innerHTML = agenda.querySelector("provincia").textContent;

                /*Esta ultima opcion nos permite coger la informacion sin tener que usar el array*/






            } else if (miAjax.status == 404) {
                document.getElementById("respuesta").innerHTML = "Archivo no encontrado"
            }
        } else if (miAjax.readyState == 0 || miAjax.readyState == 1 || miAjax.readyState == 2 || miAjax.readyState == 3) {
            document.getElementById("respuesta").innerHTML = "Cargando"
            console.log("Cargando");
            /*este if es para comprobar que se esta ejecutando todo y que no esta dando ningun error.*/
            /*mi ajax es el objeto*/
        }
    }

}