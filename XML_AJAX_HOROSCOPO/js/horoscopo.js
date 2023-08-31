window.onload = cargarAjax;
/*funcion para cargar la pagina con la peticion ajax*/
function cargarAjax() {
    console.log("funcion");
    var peticion = new XMLHttpRequest(); /*instanciamos el xmlrequest dentro de una variable por ejemplo llamamos "peticion"*/
    peticion.onreadystatechange = cargarHoroscopo; /*llama a la funcion que nosotros queramos que contendra la logia del programa*/
    peticion.open("GET", "horoscopo.xml", true); /*tenemos dos metodos, el GET  recoger y el nombre + xml para indicar que es un documento xml*/
    peticion.send(); /*este metodo para enviar*/

    function cargarHoroscopo() { /*Cuando se llama a la funcion, se le dice que cuando el estado este en 4, cogemos el ajax, y cuando le tenemos, le decimos que este en 200, que es que lo ha encontrado, pues puede haber un 404, que es que no se ha encontrado el servidor*/
        if (peticion.readyState == 0 || peticion.readyState == 1 || peticion.readyState == 2 || peticion.readyState == 3) {} else if (peticion.readyState == 4) {
            if (peticion.status == 200) {

                //PARTE 1 DENTRO DEL IF
                console.log("Cargando");
                /*este if es para comprobar que se esta ejecutando todo y que no esta dando ningun error.*/
                /*peticion es el objeto*/

                /*Creamos la variable let horoscopo que es el elemento padre del xml
                Dentro de el tiene el resto de etiquetas hijas*/

                let horoscopo = peticion.responseXML;
                console.log(horoscopo);

                /*Creamos un section y lo metemos en el body para meter los elementos del for
                Estos elementos los meteremos luego dentro de un div y cada uno de ellos tendra un tipo de 
                etiqueta html , p ,h3, div...*/

                let section = document.createElement("section");
                document.body.appendChild(section);

                /*Creamos el array de horoscopos "horos" (que es la etiqueta padre)para meter todas los horoscopos que contenga en el xml la etiqueta signo , asi que hacemos un array de signos llamado horos, que coge de horocopo que es la etiqueta padre
                : que son nombre, imagen, limites etc...*/

                let horos = horoscopo.querySelectorAll("signo");
                console.log(horos.length);

                /*Esta array cogera el nº total gracias a .length que tiene la etiqueta horoscopo, en este caso cogera hasta 12 etiquetas signo que es la cantidad de etiquetas que contiene la etiqueta padre horoscopo*/

                for (let i = 0; i < horos.length; i++) {
                    /*cada vuelta de array tendra un div con su imagen y su titulo y que lo coloque dentro del section*/
                    /*El resto de la informacion del horoscopo seran los detalles e iran fuera del for*/

                    /*A continuación es solo la creacion de etiquetas y metetlas en el html*/

                    let div_horos = document.createElement("div");
                    let img_signo = document.createElement("img");
                    let titulo_signo = document.createElement("h3");
                    let limites_signo = document.createElement("p");

                    /*Estructuramos las etiquetas creadas en el html con appendChild*/
                    div_horos.appendChild(img_signo);
                    div_horos.appendChild(titulo_signo);
                    div_horos.appendChild(limites_signo);
                    section.appendChild(div_horos);
                    /*Damos estilos*/

                    section.className = "flex fondo";
                    div_horos.className = "col-4";

                    /*Una vez creado todo tenemos que rellenar las etiquetas html con las los datos del xml
                    Esto lo haremos a traves de innterText y usando el array que hemos creado + la etiqueta del xml y hildNodes o textConte ya que ambas hacen lo mismo.


     
                    /*hay que hablar con el xml y concatenamos la ruta para la imagen*/
                    img_signo.src = "./images/" + horos[i].querySelector("imagen").childNodes[0].nodeValue;
                    limites_signo.innerText = horos[i].querySelector("limites").childNodes[0].nodeValue;
                    titulo_signo.innerText = horos[i].querySelector("nombre").childNodes[0].nodeValue;
                    /*dentro del parentesis siempre irá el nombre de la etiqueta xml*/
                    /*La organizacion es : las etiquetas html a la izquierda y las xml a la derecha*/
                    //childnodes... y textContent es lo mismo


                    //PARTE 3 DENTRO DEL IF Y DEL BUCLE FOR
                    /*Usamos el div_horos que contiene la informacion que necesitamos y hacemos un  add listener que queremos que haga una funcion*/
                    /*a cada click cuando le demos queremos que nos cargue toda la informacion que tiene el contenido de las etiquetas, lo que seria los detalles*/

                    div_horos.addEventListener("click", function() {

                        /*Para ver los detalles cuando cliquemos debemos :*/
                        //Aqui usamos las variables creadas fuera del for para llamar al section del html y poder llenar los datos


                        img_signo_detalles.src = "./images/" + horos[i].querySelector("imagen").childNodes[0].nodeValue;;
                        titulo_signo_detalles.innerHTML = horos[i].querySelector("limites").childNodes[0].nodeValue;;
                        limites_signo_detalles.innerHTML = horos[i].querySelector("nombre").childNodes[0].nodeValue;
                        prediccion_detalles.innerHTML = horos[i].querySelector("prediccion").childNodes[0].nodeValue;
                        caracteristicas_detalles.innerHTML = horos[i].querySelector("caracteristicas").childNodes[0].nodeValue;

                    });

                } //fin de for


                //PRIMERO  HACEMOS LA CREACION DE ESTAS VARIABLES Y LUEGO LAS USAMOS DENTRO DE LA FUNCION

                //Fuera del For tenemos que vovler a crear las etiquetas para despues en el onlcik darle el contenido con el array y el chilnodes
                //hay que crear aqui los campos que queremos que tengan luego la funcion del click:

                /*let sectionDescripcion = document.createElement("section"); /*Creamos un section y lo metemos en el body para meter los elementos del for
                document.body.appendChild(sectionDescripcion);*/

                /*Esto es igual que dentro del for:
                1 Creamos las variables
                2 Hacemos el appendchild
                3 en la funcion le cargamos los datos que queremos que se muestren
                4 Lo organizamos dentro de un div (que es el ultimo), para luego poder hacerle flexy y que se ponga al lado de los horoscopos*/

                let div_horos_detalles = document.createElement("div");
                let img_signo_detalles = document.createElement("img");
                let titulo_signo_detalles = document.createElement("h3");
                let limites_signo_detalles = document.createElement("p");
                let prediccion_detalles = document.createElement("p");
                let caracteristicas_detalles = document.createElement("p");


                div_horos_detalles.appendChild(img_signo_detalles);
                div_horos_detalles.appendChild(titulo_signo_detalles);
                div_horos_detalles.appendChild(limites_signo_detalles);
                div_horos_detalles.appendChild(prediccion_detalles);
                div_horos_detalles.appendChild(caracteristicas_detalles);
                section.appendChild(div_horos_detalles);

                div_horos_detalles.className = "flex fondo_detalles";
                prediccion_detalles.className = "negrita"

                /*Lo hemos metido dentro del section del horoscopo*/





            } //CIERRE DEL IF
        } //CIERRE ELSE IF
    } //CIERRE FUNCION CARGAR PELICULA
} //CIERRE FUNCION CARGAR AJAX


/*querySelector: devuelve el primer elemento del documento que coincida con el grupo espeficicado de selectores*/
/*querySelectorALL: Obtener todos los elementos en el documento con class = "ejemplo" o id o lo que sea*/