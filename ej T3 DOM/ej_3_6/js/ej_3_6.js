/*Realiza una aplicación web que tenga tres cajas (https://codepen.io/jluis_b/pen/
wvmLwqE). Cuando se pulse el botón se pregunta al usuario si quiere insertar una
cabecera en la caja de la izquierda, la central o la de la derecha. En función de lo que
responda el usuario se inserta en la caja correspondiente.*/
function aniadir_cabecera() {

    let opcion = prompt("elige un div para meter la cabecera? izquierda/central/derecha");

    if (opcion.localeCompare("izquierda") == 0) {
        let cabecera_izq = document.getElementById("caja_izquierda");
        let cabercera_izq_h2 = document.createElement("h2")
        let texto_cabeza_izq = document.createTextNode("cabecera izquierda");
        cabercera_izq_h2.appendChild(texto_cabeza_izq);
        cabecera_izq.appendChild(cabercera_izq_h2);

    } else if (opcion.localeCompare("central") == 0) {
        let cabecera_central = document.getElementById("caja_central");
        let cabercera_central_h2 = document.createElement("h2")
        let texto_cabeza_central = document.createTextNode("cabecera central");
        cabercera_central_h2.appendChild(texto_cabeza_central);
        cabecera_central.appendChild(cabercera_central_h2);

    } else if (opcion.localeCompare("derecha") == 0) {
        let cabecera_der = document.getElementById("caja_derecha");
        let cabercera_der_h2 = document.createElement("h2")
        let texto_cabeza_der = document.createTextNode("cabecera derecha");
        cabercera_der_h2.appendChild(texto_cabeza_der);
        cabecera_der.appendChild(cabercera_der_h2);
    } else {
        alert("error")
    }
}