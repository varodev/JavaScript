window.onload = CargarAjax;

function CargarAjax() {

    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = cargarHoroscopo;
    peticion.open("GET", "horos.xml");
    peticion.send();

    function cargarHoroscopo() {
        if (peticion.readyState == 0 || peticion.readyState == 1 || peticion.readyState == 2 || peticion.readyState == 3) {

        } else if (peticion.readyState == 4) {
            if (peticion.status = 200) {
                let signoZ = peticion.responseXML;

                let seccion = document.querySelector("#horoscopo");

                let sign = signoZ.querySelectorAll("signo");

                for (let i = 0; i < sign.length; i++) {
                    const element = sign[i];

                    let div = document.createElement("div");
                    div.className = "col-4"
                    let img_sig = document.createElement("img");

                    img_sig.src = "hor_12/" + sign[i].querySelector("image").childNodes[0].nodeValue;

                    let titulo = document.createElement("h3");
                    titulo.innerText = sign[i].querySelector("titulo").childNodes[0].nodeValue;

                    let fecha = document.createElement("p")
                    fecha.innerHTML = sign[i].querySelector("fecha").childNodes[0].nodeValue;

                    div.appendChild(img_sig);
                    div.appendChild(titulo);
                    div.appendChild(fecha);
                    seccion.appendChild(div);
                    div.addEventListener("click", function() {
                        console.log("hola")


                    });
                }
                let div = document.createElement("div");
                div.className = "col-4"
                let img_sig = document.createElement("img");

                img_sig.src = "hor_12/" + sign[0].querySelector("image").childNodes[0].nodeValue;

                let titulo = document.createElement("h3");
                titulo.innerText = sign[0].querySelector("titulo").childNodes[0].nodeValue;

                let fecha = document.createElement("p")
                fecha.innerHTML = sign[0].querySelector("fecha").childNodes[0].nodeValue;
            }

        }
    }
}