/*Crea un fichero JSON que represente una película. Debe almacenar título, año,
director (nombre, apellido, edad, nacionalidad, año de nacimiento), los géneros en los
que se puede encuadrar la película, los actores que aparecen (nombre, apellido, edad…)
Crea un botón que carge el título, el nombre y edad del director
y el primer guionista de las películas anteriores a 2020*/

function cargarPeliculasJSON() {
  let objetoAjax = new XMLHttpRequest();
  let urlServidor = "http://localhost:3000/arrayPeliculasOscarJSON";
  objetoAjax.open("GET", urlServidor, true);
  objetoAjax.send();
  objetoAjax.onreadystatechange = cargarInfo;
}

function cargarInfo() {
  if (this.readyState == 4 && this.status == 200) {
    let listaObjetos = JSON.parse(this.responseText);

    for (let i = 0; i < listaObjetos.length; i++) {
      if (listaObjetos[i].año < 2020) {
        console.log(
          listaObjetos[i].titulo,
          listaObjetos[i].director.nombre,
          listaObjetos[i].director.edad,
          listaObjetos[i].actores[0]
        );
      }
    }
  }
}
