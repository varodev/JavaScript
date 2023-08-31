fetch('tiendacoches.json')
    .then(response => response.json())
    .then(coches => {

            let section = document.querySelector("#tienda");
            console.log(coches);
            coches.forEach(coche => {

                /*Div para cada coche que pondremos en el html*/

                let div = document.createElement("div");
                let marca = document.createElement("h3");
                marca.innerText = coche.marca;
                let modelo = document.createElement("h3");
                modelo.innerText = coche.modelo;
                let kilometros = document.createElement("p");
                kilometros.innerText = coche.kilometros;
                let anyo = document.createElement("p");
                anyo.innerText = coche.anyo;
                let precio = document.createElement("p");
                precio.innerText = coche.precio;
                let motor = document.createElement("p");
                motor.innerText = coche.motor;
                let foto = document.createElement("img");
                foto.src = "./images/" + coche.foto;

                div.appendChild(foto);
                div.appendChild(marca);
                div.appendChild(modelo);
                div.appendChild(motor);
                div.appendChild(anyo);
                div.appendChild(kilometros);
                div.appendChild(precio);
                section.appendChild(div);



            });

        }


        /*AL TENER LA CLASE COCHE Y LA CLASE TIENDACOCHE MODIFCADA YA NO NECESITAMOS ESTE JS, SE QUEDA EJEMPLO*/






    );

/*Esta estructura tambien se puede usar para xml*/