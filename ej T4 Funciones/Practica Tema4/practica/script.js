//Se inicializa las casillas
function inicializar_casillas() {
  let containerJuego = document.getElementById("juego");
  let valorCasilla = document.getElementById("numCasillas").value;

  //Comprueba que haya casillas existentes
  let comprobacionCasilla = comprobarCasillaExistente();

  //Comprueba que el numero introducido cumpla unos requisitos
  let valido = comprobacionNumero();

  //Mientras sea un numero valido de entre 1 al 6 y no haya casillas entra
  if (valido && !comprobacionCasilla) {
    for (let index = 1; index <= valorCasilla; index++) {
      crearCasillas(containerJuego, index);
    }
  } else {
    containerJuego.remove();
    let nuevoContainerJuego = document.createElement("div");
    nuevoContainerJuego.setAttribute("id", "juego");
    let divPrincipal = document.getElementById("principal");
    divPrincipal.appendChild(nuevoContainerJuego);
  }
}

function comprobarCasillaExistente() {
  let containerCasilla = document.querySelector(".casilla");
  if (containerCasilla == null || containerCasilla == undefined) {
    return false;
  } else {
    return true;
  }
}

function comprobacionNumero() {
  let valorCasilla = document.getElementById("numCasillas").value;
  let numero = false;

  if (valorCasilla == undefined || isNaN(valorCasilla)) {
    alert("Introduzca un valor valido");
  } else if (valorCasilla == 0) {
    alert("Introduzca un numero mayor a 0");
  } else if (valorCasilla > 25) {
    alert("Introduzca un valor como máximo de 25");
  } else {
    numero = true;
  }

  return numero;
}

function crearCasillas(containerJuego, index) {
  let container = document.createElement("div");

  if (index % 2 == 0) {
    container.classList.add("clase_caja_par");
  } else {
    container.classList.add("clase_caja_impar");
  }
  container.classList.add("casilla");
  container.setAttribute("id", "casilla_" + index);
  containerJuego.appendChild(container);
}

//Se inicializa el juego, previamente inicializado las casillas
function inicializar_juego() {
  let containerCasilla = document.querySelector(".casilla");
  let comprobacionFigura = document.querySelector(".figura");

  if (containerCasilla == null) {
    alert("Inicialize primero las casillas");
  } else if (containerCasilla != null && comprobacionFigura != null) {
    alert("El juego ya esta iniciado, inicialize otra vez las casillas");
  } else {
    //Cojo todas las casillas creadas
    let arrayContainers = document.getElementsByClassName("casilla");

    let arrayNum = [];
    arrayNum = arrayAleatorio(arrayContainers.length);

    for (let index = 0; index < arrayContainers.length; index++) {
      comprobacionContenidoH1(arrayContainers, arrayNum, index);
    }
    let container_nombre_usuario = document.getElementById(
      "container_nombre_usuario"
    );
    container_nombre_usuario.style.display = "flex";
  }
}

function comprobacionContenidoH1(arrayContainers, arrayNum, index) {
  let container = arrayContainers[index];
  let textoH1 = container.querySelector(".figura");

  //Sino existe figuras creadas las crea
  if (textoH1 == null) {
    creacionDeContenido(container, arrayNum[index]);
  } else {
    //Si existe figuras las borra
    let arrayTitulos = document.querySelectorAll(".figura");
    for (let index = 0; index < arrayTitulos.length; index++) {
      arrayTitulos[index].remove;
    }

    inicializar_juego();
  }
}

function arrayAleatorio(numero_veces) {
  // Donde se guardaran los numero generados aleatoriamente
  let arrayNumeros = [];

  for (let i = 0; i < numero_veces; i++) {
    //Genera un num al azar desde el 0 hasta 5
    let numero = Math.floor(Math.random() * 6);
    //se coje el valor

    //Se mete el valor en el  array
    arrayNumeros.push(numero);
  }

  return arrayNumeros;
}

// Se cre e introduce los numeros dentro de las casillas existentes
// Parametros =
function creacionDeContenido(container, index) {
  // Cre un elemento h1 donde se guarda el signo de interrogacion
  // Nose porque puse h1
  let h1_figura = document.createElement("h1");
  // Le añado la clase figura
  h1_figura.classList.add("figura");
  // Creo un TextNode con el signo de interrogacion
  let nodeTextSimbolo = document.createTextNode("?");
  // Le añado ese TextNode al h1_figura
  h1_figura.appendChild(nodeTextSimbolo);

  //Cre otro h1 donde almacenare el numero
  let h1_numero = document.createElement("h1");
  // Le añado la clase numero
  h1_numero.classList.add("numero");
  // Cre un TextNode con el numero recibido
  let nodeTextCasilla = document.createTextNode(index);
  // Añado el TextNode al h1_numero
  h1_numero.appendChild(nodeTextCasilla);

  container.appendChild(h1_figura);
  container.appendChild(h1_numero);
}

function comenzarJuego() {
  // Selecciono el valor del input ID
  let nombre_usuario = document.getElementById("username").value;
  // Selecciono la tabla de puntuacion
  let tabla_puntuacion = document.getElementById("tabla_puntuacion");

  // Compruebo que el ID no sea undefined ni null
  if (nombre_usuario != undefined && nombre_usuario != null) {
    // Compruebo si esta creada la tabla
    // solo entrara una vez ya que la primera vez no estara creada
    if (tabla_puntuacion == null) {
      // Creo la tabla mediante una funcion
      crearTabla(nombre_usuario);
    }
    // Creo y muestro el dado mediante la funcion
    mostrarDado();
    // Compruebo la casilla y muestro el resaltado
    mostrarCasilla();
  } else {
    // Solo entra si no se puso nada en el ID
    alert("Introduzca un nombre.");
  }
}

function crearTabla(nombre_usuario) {
  let container = document.getElementById("container_puntuacion");
  let tabla = document.createElement("table");
  let arrayElementosAñadir = ["Usuario", "Puntuacion", nombre_usuario, 0];

  let num_filas = 2;
  let num_col = 2;
  // Creo filas hasta num_filas
  for (let i = 0; i < num_filas; i++) {
    // Creo una fila
    let fila = tabla.insertRow();
    // Creo columnas hasta num_col
    for (let j = 0; j < num_col; j++) {
      // Creo una celda / columna
      let celda = fila.insertCell();
      // Guardo en un textNode el valor del array[posicion]
      let nodo_nombre_usuario = document.createTextNode(
        arrayElementosAñadir[j]
      );
      if (arrayElementosAñadir[j] == 0) {
        celda.setAttribute("id", "celdaPuntuacion");
      }
      // Le añado el TextNode a la celda / columna
      celda.appendChild(nodo_nombre_usuario);
    }
    // Elimino "Usuario"
    arrayElementosAñadir.shift();
    //Elimino "Puntuacion"
    arrayElementosAñadir.shift();
  }

  // Añado un id a la tabla
  tabla.setAttribute("id", "tabla_puntuacion");
  // Añado la tabla al container donde se colocara
  container.appendChild(tabla);
}

function mostrarDado() {
  let numero;

  // Se genera un numero aleatorio del 0 al 5
  numero = Math.floor(Math.random() * 6);
  // Compruebo si hay alguna imagen creada
  let img_dado_creada = document.getElementsByTagName("img")[0];

  // Sino esta se crea la img del dado
  if (img_dado_creada == null) {
    // Se suma uno porque los nombres de las imgs
    // van del 1 al 6 no del 0 al 5
    numero++;
    // Selecciono el contenedor donde se pondra la foto
    let container = document.getElementById("container_puntuacion");
    // Creo un elemento img
    let img = document.createElement("img");
    // Pongo la src de la foto
    img.src = "images/dado_" + numero + ".jpg";
    // Le agrego un id con el numero del dado
    img.setAttribute("id", numero);
    // Lo añado al contenedor
    container.appendChild(img);
  }
  // En caso contrario se elimina y se vuelve a llamar a la funcion
  // Para que las imgs no se acumulen
  else {
    img_dado_creada.remove();
    mostrarDado();
  }
}

function mostrarCasilla() {
  // Cojo los elementos img, el primero, que sera la img
  let numero = document.getElementsByTagName("img")[0];
  // Selecciono el id, que sera un numero pero tipo string
  let id_dado = numero.id;
  // Se convierte a Int
  numero = parseInt(id_dado);

  // Compruebo la longuitud de las casillas que hay
  let lista_casillas = document.getElementsByClassName("casilla");
  // Cojo la casilla con la clase seleccionada, la primera vez no exitira
  let casilla_seleccionada = document.querySelector(".seleccionada");

  // Se usara para saber la ultima casilla donde esta el resaltado
  let casillaInicial;
  // Se usara para selecionar una casilla segun su id
  let casilla;
  // Se usara para coger el id de una casilla
  let id_casilla;

  // Compruebo si existe (Solo no existira en el primer caso)
  if (casilla_seleccionada == null) {
    // Pongo el valor del numero del dado
    casillaInicial = numero;
  } else {
    id_casilla = casilla_seleccionada.id;

    // Compruebo la lobguitud del id
    if (id_casilla.length == 9) {
      // Ej: casilla_1
      // Se obtiene el numero pero sale somo string
      casillaInicial = parseInt(id_casilla.substring(id_casilla.length - 1));
    } else {
      // Ej: casilla_10
      // Se obtiene el numero pero sale somo string
      casillaInicial = parseInt(id_casilla.substring(id_casilla.length - 2));
    }

    // Sumo al valor, el numero del dado
    casillaInicial += numero;

    // Compruebo si es menor a las casillas existentes
    if (casillaInicial <= lista_casillas.length) {
      // Elimino la clase seleccionada de la casilla
      casilla_seleccionada.classList.remove("seleccionada");
    }
  }

  if (casillaInicial <= lista_casillas.length) {
    seleccionarCasillaNueva(casilla, casillaInicial);
  } else {
    alert("Has llegado a la capacidad maxima del tablero");
  }
}

function seleccionarCasillaNueva(casilla, casillaInicial) {
  // Selecciono la casilla segun su id
  casilla = document.getElementById("casilla_" + casillaInicial);
  // Una vez se selecciona, se le añade la clase seleccionada
  casilla.classList.add("seleccionada");

  // Le quito su primer hijo para quitarle el signo de interrogacion
  casilla.removeChild(casilla.firstChild);
  // Selecciono la clase numero y le cambio el estilo a bloque par que se muestre
  let casillaNumero = casilla.querySelector(".numero");
  casillaNumero.style.display = "block";
  // Obtengo el numero que hay dentro de la casilla
  let valorCasilla = casillaNumero.innerHTML;

  // Selecciono la celda de puntuacion
  let celdaPuntuacion = document.getElementById("celdaPuntuacion");
  // Cojo su valor
  let valorPuntuacion = celdaPuntuacion.innerHTML;
  // Lo paso a numero (int)
  let numero_puntuacion = parseInt(valorPuntuacion);
  // Lo sumo y paso el numero usuario a numero (int)
  numero_puntuacion += parseInt(valorCasilla);
  // Quito el nodo exitente que inidica el valor
  celdaPuntuacion.removeChild(celdaPuntuacion.firstChild);
  // Cre un nodo nuevo con el valor total de la puntuacion
  let nodoNumero = document.createTextNode(numero_puntuacion);
  //Lo añado a la celda
  celdaPuntuacion.appendChild(nodoNumero);
}
////////////////////////////////////
/////¿¿¿¿Sigo mostrando dado???/////
////////////////////////////////////
