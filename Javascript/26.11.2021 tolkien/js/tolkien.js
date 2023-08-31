window.onload = cargarAjax;

function cargarAjax() {

    var miAjax = new XMLHttpRequest();
    miAjax.onreadystatechange = cargarTexto;
    miAjax.open("GET", "tolkien.xml");
    miAjax.send();

    function cargarTexto() {
        if (miAjax.readyState == 4) {
            if (miAjax.status == 200) {

                let tolkien = miAjax.responseXML;

                document.querySelector("#FechaNacimiento").innerHTML = tolkien.getElementsByTagName("FechaNacimiento")[0].childNodes[0].nodeValue
                document.querySelector("#LugarNacimiento").innerHTML = tolkien.getElementsByTagName("LugarNacimiento")[0].childNodes[0].nodeValue
                document.querySelector("#FechaDefuncion").innerHTML = tolkien.getElementsByTagName("FechaDefuncion")[0].childNodes[0].nodeValue
                document.querySelector("#LugarDefuncion").innerHTML = tolkien.getElementsByTagName("LugarDefuncion")[0].childNodes[0].nodeValue
                document.querySelector("#Foto").setAttribute("src", tolkien.getElementsByTagName("Foto")[0].childNodes[0].nodeValue)

                let bio = document.createElement("section")

                let titulos = tolkien.querySelectorAll("Bibliografia Titulo")
                for (let i = 0; i < titulos.length; i++) {
                    let div = document.createElement("div")

                    let tituloh2 = document.createElement("h2")
                    tituloh2.innerHTML = "Titulo"
                    let titulo = document.createElement("h2")

                    let AnoEdicionh3 = document.createElement("h3")
                    AnoEdicionh3.innerHTML = "Ano Edicion"
                    let AnoEdicion = document.createElement("p")

                    let Editorialh3 = document.createElement("h2")
                    Editorialh3.innerHTML = "Editorial"
                    let Editorial = document.createElement("p")

                    let Descripcionh3 = document.createElement("h2")
                    Descripcionh3.innerHTML = "Descripcion"
                    let Descripcion = document.createElement("p")

                    div.appendChild(tituloh2)
                    div.appendChild(titulo)
                    div.appendChild(AnoEdicionh3)
                    div.appendChild(AnoEdicion)
                    div.appendChild(Editorialh3)
                    div.appendChild(Editorial)
                    div.appendChild(Descripcionh3)
                    div.appendChild(Descripcion)
                    bio.appendChild(div)

                    titulo.innerHTML = titulos[i].getAttribute("nombre")
                    AnoEdicion.innerHTML = titulos[i].getElementsByTagName("AnoEdicion")[0].textContent;
					//AnoEdicion.innerHTML = titulos[i].querySelector("AnoEdicion").textContent;
                    Editorial.innerHTML = titulos[i].getElementsByTagName("Editorial")[0].textContent;
                    Descripcion.innerHTML = titulos[i].getElementsByTagName("Descripcion")[0].textContent;

                }
                document.body.appendChild(bio)

            } else if (miAjax.status == 404) {
                console.log("Archivo no encontrado")
            }
        } else if (miAjax.readyState == 0 || miAjax.readyState == 1 || miAjax.readyState == 2 || miAjax.readyState == 3) {}
    }
}