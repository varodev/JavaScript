window.onload = cargar();

var instrumentosArray = [];

function cargar() {
    const select = document.querySelector('#categoria');
    const select1 = document.querySelector('#precio');
    select.addEventListener("change", filtrar);
    select1.addEventListener("change", filtrar1);

}
fetch('productos.json')
    .then(response => response.json())
    .then(instrumentos => {

        instrumentosArray = instrumentos;

        console.log(instrumentos);
        instrumentos.forEach(data => {

            console.log(data);
            let guitarra = new Instrumento(data.categoria, data.nombre, data.precio, data.destacado, data.foto)
            console.log(guitarra);

            if (data.destacado == "si") {
                document.querySelector('#destacado').appendChild(guitarra.mostrarInstrumentos());
            }
            document.querySelector('#tienda').appendChild(guitarra.mostrarInstrumentos());
        });
    });

function filtrar() {

    limpiar();


    let select = document.querySelector('#categoria');

    instrumentosArray.forEach(instrumentos => { // este signo se llama funcion flecha

        let guitarra = new Instrumento(instrumentos.categoria, instrumentos.nombre, instrumentos.precio, instrumentos.destacado, instrumentos.foto);


        if (select.value == "todo") {
            document.querySelector('#tienda').appendChild(guitarra.mostrarInstrumentos());
        } else if (instrumentos.categoria == select.value) {
            document.querySelector('#tienda').appendChild(guitarra.mostrarInstrumentos());
        }

    });
}

function filtrar1() {

    limpiar();

    let select1 = document.querySelector('#precio');

    instrumentosArray.forEach(instrumentos => { // este signo se llama funcion flecha

        let guitarra = new Instrumento(instrumentos.categoria, instrumentos.nombre, instrumentos.precio, instrumentos.destacado, instrumentos.foto);

        if (select1.value == "") {
            document.querySelector('#tienda').appendChild(guitarra.mostrarInstrumentos());
        } else if (select1.value == "1" && instrumentos.precio <= 99) {
            document.querySelector('#tienda').appendChild(guitarra.mostrarInstrumentos());

        } else if (select1.value == "2" && instrumentos.precio >= 100 && instrumentos.precio <= 199) {
            document.querySelector('#tienda').appendChild(guitarra.mostrarInstrumentos());

        } else if (select1.value == "3" && instrumentos.precio >= 200 && instrumentos.precio <= 299) {
            document.querySelector('#tienda').appendChild(guitarra.mostrarInstrumentos());

        } else if (select1.value == "4" && instrumentos.precio >= 300) {
            document.querySelector('#tienda').appendChild(guitarra.mostrarInstrumentos());

        }



    });
}


function limpiar() {
    let section = document.querySelectorAll("#tienda div");
    console.log(section.length);
    for (let i = 0; i < section.length; i++) {
        document.getElementById("tienda").removeChild(section[i]);

        console.log("desde segundo select");

    }


}




/*Esta estructura tambien se puede usar para xml*/
/*Esta estructura tambien se puede usar para xml*/