window.onload = cargarAjax();

let resultado = "";
console.log("Creamos la variable global que guardará el resultado" + resultado);

function union_letras() {
    /*Cogemos el valor que tienen los ID del html.
     Su valor son las letras que lo forman*/

    let pareja1 = document.getElementById("pareja1").value;
    let pareja2 = document.getElementById("pareja2").value;
    let pareja3 = document.getElementById("pareja3").value;
    let pareja4 = document.getElementById("pareja4").value;

    console.log("Ejemplo de pareja1 " + pareja1);
    console.log("Ejemplo de pareja2 " + pareja2);
    console.log("Ejemplo de pareja3 " + pareja3);
    console.log("Ejemplo de pareja4 " + pareja4);


    let letras = pareja1 + pareja2 + pareja3 + pareja4;
    console.log("Este es el valor de las letras escogidas en el select es: " + letras);

    resultado += letras;
    console.log("Guardamos el valor de las letras en la variable resultado y es igual a  " +
        resultado);

}


/*Cogemos el id de nuestro boton
 Le ponemos un escuchador de la funcion union_letras y cargamos el resultado en cargarAjax
 Si no ponemos la funcion cargar ajax no se mostrará nada al clickar*/

document.getElementById("boton_finalizar").addEventListener("click", function() {
    union_letras();
    console.log("Muestra el resultado en el buscador al cliclar el boton finalizar" + resultado);
    cargarAjax(resultado);

});


function cargarAjax(resultado_test) {
    console.log("función cargar ajax");
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var xmltest = this.responseXML; //obtenemos el contenido del xml creando la variable
            var xmlcontenido = xmltest.getElementsByTagName("tipo_personalidad"); /*coge todo el contenido del xml,es la etiqueta padre*/
            console.log(xmlcontenido); //lo mostramos

            for (let index = 0; index < xmlcontenido.length; index++) {
                if (resultado_test == xmlcontenido[index].getElementsByTagName("tipo")[0].childNodes[0].nodeValue) {
                    document.getElementById("tipo").innerHTML = xmlcontenido[index].getElementsByTagName("personalidad")[0].childNodes[0].nodeValue;

                    document.getElementById("descripcion").innerHTML = xmlcontenido[index].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;

                    resultado = ""; //este resultado vacio es para cuando se vuelva a hacer el test no se concatenen las letras
                }


            }

        }

    }
    peticion.open("GET", "testA.xml", true);
    peticion.send();
}

/*Usaremos # solamente cuando queremos llamar a las elementos con los Selector
 Usaremos "" cuando usemos getElementByID
 Todas las funciones que creemos las tenemos que hacer fuera de la funcion principal que es la de peticion*/

/*el boton es el que llama a la funcion y guarda todos los resultados de las selecciones en el select.
Una vez que tengo una variable de 4 letras tenemos que cargar el ajax, cuando le llamamos le decimos en el bucle
que busque de todos los tipos cual es el que coincide con la variable*/