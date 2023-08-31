function ponerEstilo() {
  let container = document.getElementById("container");
  let lista_p = container.getElementsByTagName("p");

  for (let parrafo = 0; parrafo < lista_p.length; parrafo++) {
    let tag_parrafo = lista_p[parrafo];

    if (parrafo < 3) {
      tag_parrafo.classList.add("normal");
    } else {
      tag_parrafo.classList.add("resaltado");
    }
  }
}
