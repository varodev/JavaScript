window.onload = cargarAjax;

function cargarAjax() {
    console.log("funcion");
    var peticion = new XMLHttpRequest(); /*instanciamos el xmlrequest dentro de una variable por ejemplo llamamos "mi ajax"*/
    peticion.onreadystatechange = cargarPelicula; /*llama a la funcion que nosotros queramos*/
    peticion.open("GET", "cartelera.xml", true); /*tenemos dos metodos, el GET  recoger y el nombre + xml para indicar que es un documento xml*/
    peticion.send(); /*este metodo para enviar*/

    function cargarPelicula() { /*Cuando se llama a la funcion, se le dice que cuando el estado este en 4, cogemos el ajax, y cuando le tenemos, le decimo que este en 200, que es que lo ha encontrado, pues puede haber un 404*/
        if (peticion.readyState == 0 || peticion.readyState == 1 || peticion.readyState == 2 || peticion.readyState == 3) {


        } else if (peticion.readyState == 4) {

            if (peticion.status == 200) {

                //PARTE 1 DENTRO DEL IF

                console.log("Cargando");
                /*este if es para comprobar que se esta ejecutando todo y que no esta dando ningun error.*/
                /*peticion es el objeto*/

                /*Creamos la variable let peliculas que es el elemento padre del xml*/
                let peliculas = peticion.responseXML;
                console.log(peliculas);

                let section = document.querySelector("section");
                section.className = "flex col-6";

                /*Creamos el array pelis par meter todas las peliculas que contengan en el xml la etiqueta pelicula*/
                let pelis = peliculas.querySelectorAll("pelicula");
                console.log(pelis.length);

                for (let i = 0; i < pelis.length; i++) {
                    /*cada vuelta de array tendra un div con su imagen y su titulo y que lo coloque dentro del section*/
                    /*El resto de la informacion de la peliculas seran los detalles e iran fuera del for*/
                    let div_peli = document.createElement("div");
                    let cartel = document.createElement("img");
                    let titulo = document.createElement("h3");
                    /*hay que hablar con el xml y concatenamos la ruta*/
                    cartel.src = "./images/" + pelis[i].querySelector("cartel").childNodes[0].nodeValue;
                    titulo.innerText = pelis[i].querySelector("titulo").childNodes[0].nodeValue;

                    div_peli.appendChild(cartel);
                    div_peli.appendChild(titulo);
                    section.appendChild(div_peli);


                    //PARTE 3 DENTRO DEL IF Y DEL BUCLE FOR
                    /*creamos el div_peli add listener que queremos que haga una funcion*/
                    /*a cada click cuando le demso queremos que nos cargue toda la informacion que tiene el contenido de las etiquetas, lo que seria los detalles*/

                    div_peli.addEventListener("click", function() {
                        console.log(pelis[i].querySelector("titulo").childNodes[0].nodeValue)

                        titulo_detalle.innerHTML = "<strong>Titulo: </strong>" + pelis[i].querySelector('titulo').childNodes[0].nodeValue;
                        video = document.querySelector("#video")
                            //ahora con el video---->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>xml
                        video.src = "https://www.youtube.com/embed/" + pelis[i].querySelector("video").childNodes[0].nodeValue;

                        duracion = document.querySelector("#duracion");
                        duracion.innerHTML = "<strong>Duracion: </strong>" + pelis[i].querySelector("duracion").childNodes[0].nodeValue;

                        direccion = document.querySelector("#direccion")
                        direccion.innerHTML = "<strong>Direccion:   </strong>" + pelis[i].querySelector("direccion").childNodes[0].nodeValue;

                        nacionalidad = document.querySelector("#nacionalidad");
                        nacionalidad.innerHTML = "<strong>Nacionalidad: </strong>" + pelis[i].querySelector("nacionalidad").childNodes[0].nodeValue;

                        genero = document.querySelector("#genero");
                        genero.innerHTML = "<strong>Genero: </strong>" + pelis[i].querySelector("genero").childNodes[0].nodeValue;

                        sinopsis = document.querySelector("#sinopsis");
                        sinopsis.innerHTML = "<strong>Sinapsis</strong>" + pelis[i].querySelector("sinopsis").childNodes[0].nodeValue;
                    })

                } //FIN bucle for



                //PARTE 2 SEGUIMOS DENTRO DEL IF

                let titulo_detalle = document.querySelector("#titulo_detalle");
                titulo_detalle.innerHTML = "<strong>Titulo: </strong>" + pelis[0].querySelector('titulo').childNodes[0].nodeValue;

                let video = document.querySelector("#video")
                    //ahora con el video---->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>xml
                video.src = "https://www.youtube.com/embed/" + pelis[0].querySelector("video").childNodes[0].nodeValue;

                let duracion = document.querySelector("#duracion")
                duracion.innerHTML = "<strong>Duracion: </strong>" + pelis[0].querySelector("duracion").childNodes[0].nodeValue;

                let direccion = document.querySelector("#direccion")
                direccion.innerHTML = "<strong>Direccion:   </strong>" + pelis[0].querySelector("direccion").childNodes[0].nodeValue;

                let nacionalidad = document.querySelector("#nacionalidad")
                nacionalidad.innerHTML = "<strong>Nacionalidad: </strong>" + pelis[0].querySelector("nacionalidad").childNodes[0].nodeValue;

                let genero = document.querySelector("#genero")
                genero.innerHTML = "<strong>Genero: </strong>" + pelis[0].querySelector("genero").childNodes[0].nodeValue;

                let sinopsis = document.querySelector("#sinopsis")
                sinopsis.innerHTML = "<strong>Sinapsis</strong>" + pelis[0].querySelector("sinopsis").childNodes[0].nodeValue;



            } //CIERRE DEL IF
        } //CIERRE ELSE IF
    } //CIERRE FUNCION CARGAR PELICULA
} //CIERRE FUNCION CARGAR AJAX


/*querySelector: devuelve el primer elemento del documento que coincida con el grupo espeficicado de selectores*/
/*querySelectorALL: Obtener todos los elementos en el documento con class = "ejemplo" o id o lo que sea*/