window.onload = cargarAjax;

function cargarAjax() {
    console.log("funcion");
    var peticion = new XMLHttpRequest(); /*instanciamos el xmlrequest dentro de una variable por ejemplo llamamos "mi ajax"*/
    peticion.onreadystatechange = cargarJson; /*llama a la funcion que nosotros queramos*/
    peticion.open("GET", "tienda.json", true); /*tenemos dos metodos, el GET  recoger y el nombre + xml para indicar que es un documento xml*/
    peticion.send(); /*este metodo para enviar*/

    function cargarJson() { /*Cuando se llama a la funcion, se le dice que cuando el estado este en 4, cogemos el ajax, y cuando le tenemos, le decimo que este en 200, que es que lo ha encontrado, pues puede haber un 404*/
        if (peticion.readyState == 0 || peticion.readyState == 1 || peticion.readyState == 2 || peticion.readyState == 3) {} else if (peticion.readyState == 4) {

            if (peticion.status == 200) {

                var textoJson = peticion.responseText;
                var frutas = JSON.parse(textoJson);
                console.log(frutas);

                let total = 0; /*Contador para sumar los totales de la cesta de la compra*/



                frutas.forEach(fruta => {
                    /*Recordar que es importante el orden en el que se crean las etiquetas*/

                    /*Vamos a ir metiendo las etiquetas el div con id 'productos'*/


                    let foto = document.createElement("img");
                    foto.src = fruta.foto;
                    document.querySelector('#productos').appendChild(foto);

                    let nombre = document.createElement("h3");
                    nombre.innerText = fruta.nombre;
                    document.querySelector('#productos').appendChild(nombre);

                    let procedencia = document.createElement("p");
                    procedencia.innerText = "Origen : " + fruta.procedencia;
                    document.querySelector('#productos').appendChild(procedencia);

                    let precio = document.createElement("p");
                    precio.innerText = "Precio : " + fruta.precio + " euros";
                    document.querySelector('#productos').appendChild(precio);

                    let div = document.createElement("div");
                    document.querySelector('#productos').appendChild(div);


                    let input = document.createElement("input");
                    input.type = "number";
                    input.value = 1;
                    input.min = 1;
                    div.appendChild(input);
                    input.className = "btnAgregar";

                    let añadir = document.createElement("button");
                    añadir.innerText = "Añadir";
                    div.appendChild(añadir);
                    añadir.className = "btnAgregar";

                    /*Para cada boton se tiene que poner un addEvenListener*/

                    añadir.addEventListener('click', function() {

                        let nombreFruta = document.createElement("p");
                        nombreFruta.innerText = fruta.nombre + " : " + fruta.precio * input.value + " x " + input.value;
                        document.querySelector('#carrito').appendChild(nombreFruta);

                        let quitar = document.createElement("button");
                        quitar.innerText = "Quitar";
                        document.querySelector('#carrito').appendChild(quitar);
                        quitar.className = "btnQuitar";


                        /*En su lisener le decimos que borre el p para sacar lo que no queramos del carrito*/
                        quitar.addEventListener('click', function() {

                            nombreFruta.remove(nombreFruta);
                            quitar.remove(quitar);


                            /*Para quitar la cantidades del carrito recuperamos la variable total creada arriba y
                            le ponemos que es igual a menos*/

                            total -= (fruta.precio * input.value);
                            document.querySelector('#total').innerHTML = "Total Compra : " + total.toFixed(2);

                            /*To fixed es para que solo nos salgan 2 decimales*/


                        });

                        /*para añadir las cantidades totales al carrito recuperamos la variable total y le ponemos igual a más,
                        para que en este caso nos lo vaya sumando*/

                        total += (fruta.precio * input.value);
                        document.querySelector('#total').innerHTML = "Total Compra : " + total.toFixed(2) + " euros ";


                    });

                });

                let carrito = document.createElement("h3");
                carrito.innerText = "Cesta de la Compra";
                document.querySelector("#carrito").appendChild(carrito);
                carrito.className = "carrito";

                let productos = document.createElement("h3");
                productos.innerText = "Productos Seleccionados: ";
                document.querySelector('#carrito').appendChild(productos);
                productos.className = "productos";




                /*1º selecionamos la cantidad de x frutas que queramos
                2ª al dar al boton agregar, se suman esas cantidades al carrito y se hace  la suma de todo*/

            }

        }

    }
}