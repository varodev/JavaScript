fetch('tiendacoches.json')
    .then(response => response.json())
    .then(coches => {

        console.log(coches);
        coches.forEach(data => {

            console.log(data);
            let coche = new Coche(data.marca, data.modelo, data.kilometros, data.anyo, data.precio, data.motor, data.foto)
            console.log(coche);
            document.querySelector('#tienda').appendChild(coche.mostrarCoches());
        });
    });

/*Esta estructura tambien se puede usar para xml*/