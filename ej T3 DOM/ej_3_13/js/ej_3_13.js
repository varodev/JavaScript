/*Realizar un programa que tenga una tabla como la de la figura y dos botones, uno de
ellos permitirá resaltar la primera fila y el otro resaltar la segunda fila. La tabla podría estar
declarada en el html de la siguiente forma:*/
function resaltar_primero() {
    let vallecano = document.getElementById("id_primero")
    let betis = document.getElementById("id_segundo")

    vallecano.classList.add("resaltado")
    vallecano.classList.remove("gris")

    betis.classList.add("gris")
    betis.classList.remove("resaltado")
}

function resaltar_segundo() {
    let vallecano = document.getElementById("id_primero")
    let betis = document.getElementById("id_segundo")

    vallecano.classList.add("gris")
    vallecano.classList.remove("resaltado")

    betis.classList.add("resaltado")
    betis.classList.remove("gris")
	
	
	/*function resaltar_primero() {
    let vallecano = document.getElementById("id_primero")
    vallecano.classList.remove("gris")
    vallecano.classList.add("resaltado")
    let betis = document.getElementById("id_segundo")
    betis.classList.remove("resaltado")
    betis.classList.add("gris")
}

function resaltar_segundo() {
    let vallecano = document.getElementById("id_primero")
    vallecano.classList.remove("resaltado")
    vallecano.classList.add("gris")
    let betis = document.getElementById("id_segundo")
    betis.classList.remove("gris")
    betis.classList.add("resaltado")
}*/
}