function realizarOperacion() {
  let container = document.getElementById("contenido");
  let select_operacion = document.getElementById("selec-operacion");
  let valor_select =
    select_operacion.options[select_operacion.selectedIndex].value;
  let elemento = null;

  if (valor_select.localeCompare("imagen") == 0) {
    elemento = crearImagen();
  } else if (valor_select.localeCompare("tabla") == 0) {
    elemento = crearTabla();
  } else if (valor_select.localeCompare("cabecera") == 0) {
    elemento = crearCabecera();
  }
  console.log(elemento);
  container.appendChild(elemento);
}

function crearImagen() {
  let img = document.createElement("img");
  img.src = "mario-quieto-der.png";
  return img;
}

function crearTabla() {
  let arraySeries = [
    "Series",
    "Vikingos",
    "Gambito de dama",
    "La casa de papel",
  ];

  let numero_temporadas = ["temporadas", 2, 3, 5];

  let tabla = document.createElement("table");
  tabla.style = "border: 1px solid black";
  for (let index = 0; index < arraySeries.length; index++) {
    let fila = tabla.insertRow();
    let celda1 = fila.insertCell();
    let nodo_series = document.createTextNode(arraySeries[index]);
    celda1.appendChild(nodo_series);

    let celda2 = fila.insertCell();
    let nodo_temporadas = document.createTextNode(numero_temporadas[index]);
    celda2.appendChild(nodo_temporadas);
  }

  return tabla;
}

function crearCabecera() {
  let cabecera = document.createElement("h1");
  let nodo_texto = document.createTextNode("Esta es la cabecera");
  cabecera.appendChild(nodo_texto);
  return cabecera;
}
