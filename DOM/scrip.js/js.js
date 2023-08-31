/*https://wireframe.cc/mjCuoS*/

window.onload = iniciar;
let linksNav = ["Inicio", "Servicios", "Empresa", "Contacto"]; /*Estos son los li de la ul, y los metemos dentro del array*/


function iniciar() {

    //1 CREAMOS LA CABECERA, QUE CONTENDRA : LOGO - TEXTO - ICONOS REDES SOCIALES

    console.log("dentro");
    let cabecera = document.createElement("header"); //Creamos el Header, llamado cabecera
    document.body.appendChild(cabecera); /*Usamos la variable, por lo que va sin comillas y lo creamos en el body*/
    let logo = document.createElement("img");
    logo.src = "./img/logo.jpg";
    //logo.setAttribute("src","./img/logo.jpg");//estas son dos formas para darle la ruta a la imagen
    cabecera.appendChild(logo);

    let titulo = document.createElement("h1");
    let contenido_titulo = document.createTextNode("Llévate a tus mascostas a la nieve!")
    titulo.appendChild(contenido_titulo);
    cabecera.appendChild(titulo);

    let divRss = document.createElement("div");
    cabecera.appendChild(divRss);
    let icono1 = document.createElement("img");
    icono1.src = "./img/whatsapp.png";
    divRss.appendChild(icono1);
    let icono2 = document.createElement("img");
    icono2.src = "./img/whatsapp.png";
    divRss.appendChild(icono2);
    let icono3 = document.createElement("img");
    icono3.src = "./img/whatsapp.png";
    divRss.appendChild(icono3);

    //titulo.innerText = "Este es el titulo de la pagina" * Este es igual que la opción anterio, saltandonos el nodo de contenido
    //cabecera.setAttribute("class", "flex");.
    cabecera.className = "flex"; //a continuacuion se pueden poner varias clases

    //2 CREAMOS LA CABECERA : QUE CONTENDRA LA NAV:

    let navBar = document.createElement("nav");
    document.body.appendChild(navBar);
    let lista = document.createElement("ul");
    navBar.appendChild(lista);

    /*Le vamos a pasar un bucle para poder meter los li*/

    for (var i = 0; i < linksNav.length; i++) {
        console.log(i);
        /*Lo genera tantas veces como posiciones tenga el bucle*/
        let li = document.createElement("li");
        let enlace = document.createElement("a");
        enlace.innerText = linksNav[i].toUpperCase(); /*aqui colocamos la posicion del array*/
        enlace.href = "#";
        li.appendChild(enlace);
        lista.appendChild(li);

    }

    let slider = document.createElement("section");
    document.body.appendChild(slider);
    slider.appendChild(div1);
    slider.appendChild(div2);


    //2º CREAMOS UN SECTION CON 4 IMAGENES - TEXTO Y BOTON

    //IMPORTANTE METER ESTE ARRAY PARA COGER LAS IMAGENES QUE QUERAMOS

    var cromos = ["img/peq1.jpg", "img/peq3.jpg", "img/peq4.jpg", "img/peq1.jpg"];

    let sectionCromos = document.createElement("section");
    document.body.appendChild(sectionCromos);

    sectionCromos.className = "flex"; //IMPORTANTE ,si no las imagenes se colocaran como quieran

    for (var i = 0; i < cromos.length; i++) {

        let cromo = document.createElement("div");
        let foto_cromo = document.createElement("img");
        foto_cromo.src = cromos[i];
        let texto_cromo = document.createElement("h3");
        texto_cromo.innerHTML = "Titular de la Imagen";
        let enlace_cromo = document.createElement("a");
        //enlace_cromo.href = "#";
        enlace_cromo.innerText = "Mas info";
        enlace_cromo.className = "btn";
        // enlace_cromo.setAttribute("onclick", "saludar()"); /*meteremos una funcion que diga hola FUERA DE LA CLASE INICIAR, para que lo coja*/
        //enlace_cromo.onclick = function() { //si quieremos que pase parametros le tenemos que pasar una fucnion anónima, si no no hace falta
        //saludar("Nerea");}

        enlace_cromo.addEventListener("click", function() { saludar("Nerea") }); //ESTE ES EL QUE DEBEMOS USAR

        cromo.appendChild(foto_cromo);
        cromo.appendChild(texto_cromo);
        cromo.appendChild(enlace_cromo);
        sectionCromos.appendChild(cromo);

    }


    let txtH2 = document.createElement("h2");
    let contenidotxtH2 = document.createTextNode("Servicios");
    txtH2.appendChild(contenidotxtH2);
    document.body.appendChild(txtH2);


    // CREAMOS 3º SECTION QUE CONTENDRA :  DIV + PARRAFO + FOTO (MI CODIGO)

    let sectionServicios = document.createElement("section");
    document.body.appendChild(sectionServicios);
    //sectionServicios.className = "flex";

    let divP = document.createElement("div");
    sectionServicios.appendChild(divP);
    divP.className = "flex";
    let parrafo = document.createElement("p");
    divP.appendChild(parrafo);
    let contenidoParrafo = document.createTextNode("Toda la información sobre viajar con perros que encontrarás en este post está basada en una experiencia real. Nosotros, (los de la foto de arriba ) hemos viajado desde España a Tailandia con Meko, nuestro Golden Retriever. Al salir de casa no encontramos ninguna información sobre viajar con perros por el mundo, no sabíamos que problemas íbamos a tener al viajar con un perro tan grande, la documentación necesaria para viajar al extranjero con nuestro perro, las vacunas obligatorias y tan siquiera si el pasaporte de mascotas se podía utilizar fuera de la Unión Europea.");
    parrafo.append(contenidoParrafo);
    parrafo.className = "col-6";

    let imgDog = document.createElement("img");
    divP.appendChild(imgDog);
    imgDog.src = "./img/perrete.jpg";
    imgDog.className = "col-6";


    let divP1 = document.createElement("div");
    sectionServicios.appendChild(divP1);
    divP1.className = "flex";
    let imgDog1 = document.createElement("img");
    divP1.appendChild(imgDog1);
    imgDog1.src = "./img/perrete1.jpg";
    imgDog1.className = "col-6";

    let parrafo1 = document.createElement("p");
    divP1.appendChild(parrafo1);
    let contenidoParrafo1 = document.createTextNode("Toda la información sobre viajar con perros que encontrarás en este post está basada en una experiencia real. Nosotros, (los de la foto de arriba ) hemos viajado desde España a Tailandia con Meko, nuestro Golden Retriever. Al salir de casa no encontramos ninguna información sobre viajar con perros por el mundo, no sabíamos que problemas íbamos a tener al viajar con un perro tan grande, la documentación necesaria para viajar al extranjero con nuestro perro, las vacunas obligatorias y tan siquiera si el pasaporte de mascotas se podía utilizar fuera de la Unión Europea.");
    parrafo1.append(contenidoParrafo1);
    parrafo1.className = "col-6";



    let txtH2C = document.createElement("h2");
    let contenidotxtH2C = document.createTextNode("Contacto");
    txtH2C.appendChild(contenidotxtH2C);
    document.body.appendChild(txtH2C);

    //4º SECTION QUE CONTENDRA : DIV CON 2 IMGAGENES Y UN TEXTO: (MI CODIGO)

    let sectionContacto = document.createElement("section");
    document.body.appendChild(sectionContacto);


    let divP3 = document.createElement("div");
    sectionContacto.appendChild(divP3);
    divP3.className = "flex";

    let imgContact = document.createElement("img");
    divP3.appendChild(imgContact);
    imgContact.src = "./img/contacto.jpg";
    imgContact.className = "col-6";

    let imgContact1 = document.createElement("img");
    divP3.appendChild(imgContact1);
    imgContact1.src = "./img/contacto1.jpg";
    imgContact1.className = "col-7";



    let divP4 = document.createElement("div");
    sectionContacto.appendChild(divP4);
    divP4.className = "flex";

    let parrafoC = document.createElement("p");
    divP4.appendChild(parrafoC);
    let contenidoParrafoC = document.createTextNode("Toda la información sobre viajar con perros que encontrarás en este post está basada en una experiencia real. Nosotros, (los de la foto de arriba ) hemos viajado desde España a Tailandia con Meko, nuestro Golden Retriever. Al salir de casa no encontramos ninguna información sobre viajar con perros por el mundo, no sabíamos que problemas íbamos a tener al viajar con un perro tan grande, la documentación necesaria para viajar al extranjero con nuestro perro, las vacunas obligatorias y tan siquiera si el pasaporte de mascotas se podía utilizar fuera de la Unión Europea.");
    parrafoC.append(contenidoParrafoC);


    //3  SECTION CHARO SERVICIOS :

    let sectionServices = document.createElement("section");
    let h2_services = document.createElement("h2");
    h2_services.innerText = "Services";
    let div_1_services = document.createElement("div");
    div_1_services.className = "flex";
    let texto1_services = document.createElement("p");

    texto1_services.innerText = "Toda la información sobre viajar con perros que encontrarás en este post está basada en una experiencia real. Nosotros, (los de la foto de arriba ) hemos viajado desde España a Tailandia con Meko, nuestro Golden Retriever. Al salir de casa no encontramos ninguna información sobre viajar con perros por el mundo, no sabíamos que problemas íbamos a tener al viajar con un perro tan grande, la documentación necesaria para viajar al extranjero con nuestro perro, las vacunas obligatorias y tan siquiera si el pasaporte de mascotas se podía utilizar fuera de la Unión Europea."

    let imagenServices = document.createElement("img");
    imagenServices.src = "./img/perrete1.jpg";

    sectionServices.appendChild(div_1_services);
    div_1_services.appendChild(texto1_services);
    div_1_services.appendChild(imagenServices);
    document.body.appendChild(sectionServices);

    sectionServices.insertBefore(h2_services, div_1_services); /*Esto es como appenchild, y señalamos a quien y delante de quien*/
    imagenServices.className = "col-6";

    // clonar elementos :

    //var clon = documente.getElementById('padre').cloneNode(true);
    //var dupNode = node.cloneNode(true o false);

    let div_2_services = div_1_services.cloneNode(true); //no vale solo con clonarlo, luego tebnis que insertarlo
    sectionServices.appendChild(div_2_services);

    //reemplazar un nodo

    let h3_services = document.createElement("h3");
    h3_services.innerText = "Este es un titular h3";

    // ahora lo vamos a reemplazar

    div_1_services.replaceChild(h3_services, texto1_services); /*aqui hemos reemplezao el primer texto del div por el de h3*/



    // SECTION CONTACTO CHARO:

    let sectionCont = document.createElement("section");
    document.body.appendChild(sectionCont);
    let h2_cont = document.createElement("h2");
    h2_cont.innerText = "Contact";
    h2_cont.className = "centrar";

    let div_1_cont = document.createElement("div");
    div_1_cont.className = "flex wrap";
    div_1_cont.innerHTML = "<div class='col-6'><img src='img/peq1.jpg'></div><div class='col-6'><img src='img/peq1.jpg'></div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eaque minus nisi, dignissimos soluta, alias vitae eveniet ex sunt tenetur, aut accusamus suscipit. Dolorem perferendis dolorum voluptates eos labore animi! </p></div>"
    "<p id='parrafo_cont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus repudiandae tenetur deserunt accusantium voluptas possimus ipsa veniam! Cumque, possimus minima quibusdam quod aut dolor, voluptatum est, eum minus nam explicabo.</p>;"
    /*En el inner text podemos meter tanto imagenes como texto*/
    sectionCont.appendChild(h2_cont);
    sectionCont.appendChild(div_1_cont);

    //vamos a quitar un nodo:
    //elemento_padre.removeChild(nodo_a_elegir);

    //div_1_cont.remove(document.querySelector("div #parrafo_cont"));

    //PARTE DEL FOOTER

    let footer = document.createElement("footer");
    footer.className = "flex wrap";
    let div1_footer = document.createElement("div");
    div1_footer.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus repudiandae tenetur deserunt accusantium voluptas possimus ipsa veniam! Cumque, possimus minima quibusdam quod aut dolor, voluptatum est, eum minus nam explicabo.</p>;"

    let div2_footer = document.createElement("div");
    div2_footer.innerHTML = "<img src='img/logo.jpg'>";
    div2_footer.className = "col-4";
    let div3_footer = document.createElement("div");
    div3_footer.innerHTML = "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>;"
    div3_footer.className = "col-4";


    document.body.appendChild(footer);
    footer.appendChild(div1_footer);
    footer.appendChild(div2_footer);
    footer.appendChild(div3_footer);





















} //CIERE INICIAR FUNCION

/*Esta funcion la creamos fuera de la funcion iniciar para que podamos ver algo por consola.*/

function saludar(nombre) {
    console.log("hola " + nombre);
}



/*JS es como si estuvieramos en el html en el que estamos enlazado, vamos a poder maquetar igual desde ahí
Hay que enlazar los estilos css no los estilos scss*/



// ESTA ES LA FORMA LARGA DE HACER EL SECTION 2ª
/*let divImg1 = document.createElement("div");
sectionImgPeq.appendChild(divImg1);
let tituloPeq1 = document.createElement("h3");
let image1 = document.createElement("img");
divImg1.appendChild(tituloPeq1).innerHTML = "IMAGEN UNO";
divImg1.appendChild(image1);
image1.setAttribute("src", "img/peq1.jpg");

let divImg2 = document.createElement("div");
let titulopeq2 = document.createElement("h3");
let image2 = document.createElement("img");
sectionImgPeq.appendChild(divImg2);
divImg2.appendChild(titulopeq2).innerHTML = "IMAGEN DOS";
divImg2.appendChild(image2);
image2.setAttribute("src", "img/peq3.jpg");

let divImg3 = document.createElement("div");
let titulopeq3 = document.createElement("h3");
let image3 = document.createElement("img");
sectionImgPeq.appendChild(divImg3);
divImg3.appendChild(titulopeq3).innerHTML = "IMAGEN TRES";
divImg3.appendChild(image3);
image3.setAttribute("src", "img/peq4.jpg");

let divImg4 = document.createElement("div");
let titulopeq4 = document.createElement("h3");
let image4 = document.createElement("img");
sectionImgPeq.appendChild(divImg4);
divImg4.appendChild(titulopeq4).innerHTML = "IMAGEN CUATRO";
divImg4.appendChild(image4);
image4.setAttribute("src", "img/peq1.jpg");*/