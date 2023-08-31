window.onload = cargarAjax;

function cargarAjax() {

    var miAjax = new XMLHttpRequest();
    miAjax.onreadystatechange = cargarXML;
    miAjax.open("GET", "horoscopo.xml");
    miAjax.send();

    function cargarXML() {
        if (miAjax.readyState == 4) {
            if (miAjax.status == 200) {

                let horoscopos = miAjax.responseXML;
                let seccion = document.querySelector("section");
                let horos = horoscopos.querySelectorAll("horoscopo");
                for (let i = 0; i < horos.length; i++) {
                    let div_horos = document.createElement("div");
                    let cartel = document.createElement("img");
                    cartel.src = "./images/" + horos[i].querySelector("cartel").childNodes[0].nodeValue;
                    let titulo = document.createElement("h3");
                    titulo.innerText = horos[i].querySelector("titulo").childNodes[0].nodeValue;
                    let fecha = document.createElement("p")
                    fecha.innerHTML = horos[i].querySelector("fecha").childNodes[0].nodeValue;

                    div_horos.appendChild(cartel);
                    div_horos.appendChild(titulo);
                    div_horos.appendChild(fecha);
                    seccion.appendChild(div_horos);
                    div_horos.addEventListener("click", function() {
                        console.log(horos[i].querySelector("titulo").childNodes[0].nodeValue);

                        let titulo = document.querySelector("#tituloDetalle");
                        titulo.innerHTML = "<strong>Signo: </strong>" + horos[i].querySelector("titulo").childNodes[0].nodeValue;

                        let cartelx = document.querySelector("#img");
                        cartelx.src = "./images/" + horos[i].querySelector("cartel").childNodes[0].nodeValue;

                        let fechax = document.querySelector("#fecha");
                        fechax.innerHTML = "<strong>Fecha: </strong>" + horos[i].querySelector("fecha").childNodes[0].nodeValue;

                        let prediccionx = document.querySelector("#prediccion");
                        prediccionx.innerHTML = "<strong>Prediccion: </strong>" + horos[i].querySelector("prediccion").childNodes[0].nodeValue;

                        let descripcionx = document.querySelector("#descripcion");
                        descripcionx.innerHTML = "<strong>Descripcion: </strong>" + horos[i].querySelector("descripcion").childNodes[0].nodeValue;
                    }); //div_horos.addEventListener
                } //for--> esto de abajo es la primera ver que entramos 
                let titulo = document.querySelector("#tituloDetalle");
                titulo.innerHTML = "<strong>Signo: </strong>" + horos[0].querySelector("titulo").childNodes[0].nodeValue;

                let cartelx = document.querySelector("#img");
                cartelx.src = "./images/" + horos[0].querySelector("cartel").childNodes[0].nodeValue;

                let fechax = document.querySelector("#fecha");
                fechax.innerHTML = "<strong>Fecha: </strong>" + horos[0].querySelector("fecha").childNodes[0].nodeValue;

                let prediccionx = document.querySelector("#prediccion");
                prediccionx.innerHTML = "<strong>Prediccion: </strong>" + horos[0].querySelector("prediccion").childNodes[0].nodeValue;

                let descripcionx = document.querySelector("#descripcion");
                descripcionx.innerHTML = "<strong>Descripcion: </strong>" + horos[0].querySelector("descripcion").childNodes[0].nodeValue;

            } else if (miAjax.status == 404) {
                console.log("Archivo no encontrado");
            }
        } else if (miAjax.readyState == 0 || miAjax.readyState == 1 || miAjax.readyState == 2 || miAjax.readyState == 3) {
            console.log("Cargando");
        }
    }


}