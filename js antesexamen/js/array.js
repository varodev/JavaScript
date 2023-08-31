function validar(){

    console.log("hola")
    // para hacer pruebas pnerconsole.log("el valor")

    let respuestas= document.getElementById("respuestas").value;
    let respuestas2= document.getElementById("respuestas2").value;
    let respuestas3= document.getElementById("respuestas3").value;
    let contesta = document.getElementById("contesta");

    let pregunta1 = [0,"gato","elefante","kiwi","pez"];
    let pregunta2 = [0,"gato","elefante","kiwi","pez"];
    let pregunta3 = [0,"gato","elefante","kiwi","pez"];

    let respuesta = ["pregunta1", "pregunta2", "pregunta3"];


    if(pregunta1 == respuesta[0]){

        contesta.innerHTML="Debe seleccionar una respuesta de la primera pregunta";

    }
    else if(pregunta2 == respuesta[0]){

        contesta.innerHTML="Debe seleccionar una respuesta de la segunda pregunta";

    }
    else if(pregunta3 == respuesta[0]){

        contesta.innerHTML="Debe seleccionar una respuesta de la tercera pregunta";

    }else if (pregunta1 == respuesta[1]){
        contesta.innerHTML="Tus respuesta son: "+ respuesta[1];
    }
}