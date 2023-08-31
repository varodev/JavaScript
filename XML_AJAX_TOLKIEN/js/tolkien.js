window.onload = cargarAjax;

function cargarAjax() {

    var miAjax = new XMLHttpRequest(); /*instanciamos el xmlrequest dentro de una variable por ejemplo llamamos "mi ajax"*/
    miAjax.onreadystatechange = cargarTexto; /*llama a la funcion que nosotros queramos*/
    miAjax.open("GET", "Tolkien.xml", true); /*tenemos dos metodos, este para recoger*/
    miAjax.send(); /*este metodo para enviar*/
    function cargarTexto() { /*Cuando se llama a la funcion, se le dice que cuando el estado este en 4, cogemos el ajax, y cuando le tenemos, le decimo que este en 200, que es que lo ha encontrado, pues puede haber un 404*/
        if (miAjax.readyState == 4) {
            if (miAjax.status == 200) {

                let Biografia = miAjax.responseXML;
                console.log(Biografia);
                /*Para poder coger la informacion del documento xml tenemos que crear un objeto, en este caso se llama Biografia e igualarlo a miAjax.respondeXML para poder coger la info*/

                document.querySelector("#FechaNacimiento").innerHTML = Biografia.getElementsByTagName("FechaNacimiento")[0].childNodes[0].nodeValue;
                //Aqui ya tenemos seleccionada la id del html con el #,que la hemos llamado igual que la etiqueta xml.
                //Con el inner igualaremos a Biografia que recogera con tagName le etiqueta FechaNacimiento que pertenece al xml.
                //Tanto la etiqueta del html como la del xml deberian coincidir para no dar luegar a errores.
                //Dentro de las etiquetas de contenido hay nodo de texto,aqui debemos poner el nodeValue, lo que  mostrará la informaicon contenida en esa etiqueta del xml* /

                /*Si no se pone el array a posición 0, cuando ejecutamos el html en el localhost, sale "indefinido", poniendo el [0] nos carga todos los campos. */
                //A continuacion vemos difeterentes formas de seleccionar las etiquetas:

                document.querySelector("#LugarNacimiento").innerHTML = Biografia.getElementsByTagName("LugarNacimiento")[0].textContent;

                document.querySelector("#FechaDefuncion").innerHTML = Biografia.querySelectorAll("FechaDefuncion")[0].textContent;

                document.querySelector("#LugarDefuncion").innerHTML = Biografia.querySelector("LugarDefuncion").textContent;

                /*Esta ultima opcion nos permite coger la informacion sin tener que usar el array, por ello no tenemos el [0]*/

                document.querySelector("#Foto").setAttribute("src", Biografia.querySelector("Foto").textContent);

                //VAMOS A CREAR UN BUCLE PARA METER EN CADA VUELTA : año de edicion, editorial, descipcion

                //1 Creamos el array:

                let biblio = Biografia.querySelectorAll("Bibliografia Titulo");
                console.log(biblio.length);

                let sectionBiblio = document.createElement("section");
                document.body.appendChild(sectionBiblio);

                for (let i = 0; i < biblio.length; i++) {
                    /*lo de la izquierda siempre sera nuestros elementos y lo de la derecha
                    que corresponde al xml*/

                    let div_detalles = document.createElement("div");
                    let p_titulo = document.createElement("p");
                    p_titulo.innerHTML = biblio[i].getAttribute("nombre");
                    let p_anio = document.createElement("p");
                    p_anio.innerHTML = biblio[i].querySelector("AnoEdicion").textContent;
                    let p_editorial = document.createElement("p");
                    p_editorial.innerHTML = biblio[i].querySelector("Editorial").textContent;
                    let p_descripcion = document.createElement("p");
                    p_descripcion.innerHTML = biblio[i].querySelector("Descripcion").textContent;


                    sectionBiblio.appendChild(div_detalles);
                    div_detalles.appendChild(p_titulo);
                    div_detalles.appendChild(p_anio);
                    div_detalles.appendChild(p_editorial);
                    div_detalles.appendChild(p_descripcion);


                } //FIN FOR

                /*2 PARTE DENTRO DEL IF AÑADIMOS los elementos que contiene el html con # y el xml con el nombre
                que le hayamos dado a la etiqueta*/

                /* let titulo = document.querySelector("#Titulo");
                 titulo.innerHTML = "<strong>Titulo :</strong>" + biblio[1].getAttribute("Titulo").childNodes[0].nodeValue;

                 let edicion = document.querySelector("#AnoEdicion");
                 edicion.innerHTML = "<strong>Edicion :</strong>" + biblio[1].querySelector("AnoEdicion").childNodes[0].nodeValue;

                 let editorial = document.querySelector("#Editorial");
                 editorial.innerHTML = "<strong>Editorial :</strong>" + biblio[1].querySelector("Editorial").childNodes[0].nodeValue;

                 let Descripcion = document.querySelector("#Descripcion");*/




            } else if (miAjax.status == 404) {
                //document.getElementById("respuesta").innerHTML = "Archivo no encontrado"
            }
        } else if (miAjax.readyState == 0 || miAjax.readyState == 1 || miAjax.readyState == 2 || miAjax.readyState == 3) {
            //document.getElementById("respuesta").innerHTML = "Cargando"
            // console.log("Cargando");
            /*este if es para comprobar que se esta ejecutando todo y que no esta dando ningun error.*/
            /*mi ajax es el objeto*/
        }
    }

}