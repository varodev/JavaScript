/*Desarrollad una app que tiene varios párrafos. Todos con el mismo estilo. Al
pulsar un botón los primeros 3 párrafos tendrán un determinado estilo y el resto tendrán
un estilo diferente. Se deben utilizar clases css para asignar los estilos. Se utilizarán las
siguientes propiedades:
font-size: 30px;
color:red;
font-style: italic;
———————————
font-size: 10px;
color:black;
font-style: normal; */

function modificarCSS() {
    let parrafo = ppal.getElementsByTagName("p");

    for (let i = 0; i < parrafo.length; i++) {
        if (i < 3) {
            parrafo[i].classList.add("rojo");
        } else {
            parrafo[i].classList.add("negro");
        }
    }


    /*for (elemento in parrafo) {
          if (elemento < 3) {
              parrafo[elemento].classList.add("rojo")
          } else {
              parrafo[elemento].classList.add("negro")
          }
      }*/
}