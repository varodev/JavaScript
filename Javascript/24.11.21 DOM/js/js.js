 window.onload = iniciar;
 let linksNav = ["Inicio", "Servicios", "Empresa", "Contacto"];
 let cromos = ["collie01.jpg", "collie02.jpg", "collie03.jpg", "collie04.jpg"];
 let slider;

 function iniciar() {
     console.log("dentro");
     let cabecera = document.createElement("header"); //pintar cabecera en el html
     document.body.appendChild(cabecera);
     let logo = document.createElement("img");
     logo.src = "./img/logo.png"
         //logo.setAttribute("src", "./img/logo.jpg") alternativa de lo de arriba
     cabecera.appendChild(logo)
     let titulo = document.createElement("h1")
     let contenidoTitulo = document.createTextNode("Est@ es el titulo de la pagina")
     titulo.appendChild(contenidoTitulo)
         //titulo.innerText="Este es el titulo de la pagina"
     cabecera.appendChild(titulo)
     cabecera.className = "flex";
     //cabecera.setAttribute("class", "flex")

     let navBar = document.createElement("nav");
     document.body.appendChild(navBar)

     let lista = document.createElement("ul")
     navBar.appendChild(lista)

     for (let i = 0; i < linksNav.length; i++) {
         //console.log(i)
         let li = document.createElement("li")
         let enlace = document.createElement("a")
         enlace.innerText = linksNav[i].toUpperCase()
         enlace.href = "#"
         li.appendChild(enlace)
         lista.appendChild(li)
     }

     slider = document.createElement("section")
     document.body.appendChild(slider)
     slider.id = "slider";
     init();

     //creamos el section con los 4 divs

     let seccionCromos = document.createElement("section")
     seccionCromos.className = "flex"

     for (let i = 0; i < cromos.length; i++) {
         let cromo = document.createElement("div")
         let foto_cromo = document.createElement("img")
         foto_cromo.src = "img/" + cromos[i]
         let texto_cromo = document.createElement("h3")
         texto_cromo.innerHTML = "Esta es el titular del cromo"
         let enlace_cromo = document.createElement("button")
         enlace_cromo.innerHTML = "Mas info"
         enlace_cromo.className = "btn"
             //enlace_cromo.setAttribute("onclick", "saludar()")
             //enlace_cromo.onclick = saludar
             //enlace_cromo.onclick = function() { saludar("alvaro") }
         enlace_cromo.addEventListener("click", function() { saludar("alvaro") })

         let btn = document.createElement("a")
         cromo.appendChild(foto_cromo)
         cromo.appendChild(texto_cromo)
         cromo.appendChild(enlace_cromo)
         cromo.appendChild(btn)
         seccionCromos.appendChild(cromo)
     }
     document.body.appendChild(seccionCromos)

     //seccion servicios
     let seccion_servicios = document.createElement("section")
     seccion_servicios.className = "contendor"
     let div_1_servicios = document.createElement("div")
     div_1_servicios.className = "flex"
     let h2_servicios = document.createElement("h2")
     h2_servicios.innerHTML = "SERVICIOS"
     let texto1_servicios = document.createElement("p")
     texto1_servicios.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
     let imagen1_servicio = document.createElement("img")
     imagen1_servicio.src = "./img/collie01.jpg"
     seccion_servicios.appendChild(div_1_servicios)
     div_1_servicios.appendChild(texto1_servicios)
     div_1_servicios.appendChild(imagen1_servicio)
     document.body.appendChild(seccion_servicios)
         //insertar un nodo delante de otro
         //var insertedNode = parentNode.insertBefore(newNode, ReferenceNode)
     seccion_servicios.insertBefore(h2_servicios, div_1_servicios)

     //clonar un nodo
     //var clon = document.getElementById('padre).cloneNode(true)

     let div_2_servicios = div_1_servicios.cloneNode(true)
     seccion_servicios.appendChild(div_2_servicios)

     //reemplazar un nodo
     //elemto_padre.replaceChild(nuevo_nodo_,nodo_a_remplazar)
     let h3_servicios = document.createElement("h3")
     h3_servicios.innerText = "Este es el titular h3"
     div_1_servicios.replaceChild(h3_servicios, texto1_servicios)

     //seccion contacto
     let seccion_contacto = document.createElement("section")
     let div_1_contacto = document.createElement("div")
     div_1_contacto.className = "flex wrap"
     div_1_contacto.innerHTML = "<div class='col-6'><img src='img/collie01.jpg' alt=''></div><div class='col-6'><img src = 'img/collie01.jpg' alt = ''></div><p> There are many variations of passages of Lorem Ipsum available to generate Lorem Ipsum which looks reasonable.The generated </p> <p id = 'parrafo2'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don '</p>"
     let h2_contacto = document.createElement("h2")
     h2_contacto.innerHTML = "CONTACTO"
     h2_contacto.className = "centrar"
     seccion_contacto.appendChild(h2_contacto)
     seccion_contacto.appendChild(div_1_contacto)
     document.body.appendChild(seccion_contacto)

     //quitar un nodo (parrafo2)
     div_1_contacto.removeChild(document.querySelector("#parrafo2"))

     //footer
     let footer = document.createElement("footer")
     footer.className = "flex wrap footer"
     let div_1_footer = document.createElement("div")
     div_1_footer.className = "col-4"
     div_1_footer.innerHTML = "<p> There are many variations of passages of Lorem Ipsum available to generate Lorem Ipsum which looks reasonable.The generated </p>"
     let div_2_footer = document.createElement("div")
     div_2_footer.innerHTML = "<img src='img/collie01.jpg' alt=''>"
     div_2_footer.className = "col-4"
     let div_3_footer = document.createElement("div")
     div_3_footer.innerHTML = "<ul><li>Item</li><li>Item</li><li>Item</li><li>Item</li></ul>"
     div_3_footer.className = "col-4"

     footer.append(div_1_footer)
     footer.append(div_2_footer)
     footer.append(div_3_footer)
     document.body.appendChild(footer)

























 }

 function saludar(nombre) {
     console.log("hola " + nombre)

 }