function validar(){

    // para hacer pruebas pnerconsole.log("el valor")

    let respuestas= document.getElementById("respuestas").value;
    let respuestas2= document.getElementById("respuestas2").value;
    let respuestas3= document.getElementById("respuestas3").value;

    if(respuestas == "no"){

        contesta.innerHTML = "Debe seleccionar una respuesta de la primera pregunta";

    }
    else {
        if(respuestas2 == "no2"){

        contesta.innerHTML = "Debe seleccionar una respuesta de la segunda pregunta";

        }
        else {
            if(respuestas3 == "no3"){

                contesta.innerHTML = "Debe seleccionar una respuesta de la tercera pregunta";

            }
            else{
            contesta.innerHTML = "Tus respuestas son: "+ respuestas + " " + respuestas2 + " " + respuestas3;
        }
    }
    }
}
