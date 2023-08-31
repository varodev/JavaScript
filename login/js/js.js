function enviar(){

    let nombre = document.getElementById("nombre").value;

    let apellido = document.getElementById("apellido").value;

    let contraseña = document.getElementById("contraseña").value;

    let contraseña2 = document.getElementById("contraseña2").value;

    let respuesta = document.getElementById("respuesta");

    if(nombre ==""){
        respuesta.innerHTML = "Nombre esta vacio";
        document.getElementById("nombre").focus();
    }else if(apellido ==""){
        respuesta.innerHTML = "Apellido esta vacio";
        document.getElementById("apellido").focus();
    }else if(contraseña ==""){
        respuesta.innerHTML = "Contraseña esta vacio";
        document.getElementById("contraseña").focus();
    }else if(contraseña2 ==""){
        respuesta.innerHTML = "Repita contraseña esta vacio";
        document.getElementById("contraseña2").focus();
    }else if (contraseña2 != contraseña) {
        respuesta.innerHTML = "Las contraseñas no coinciden";
    }else{
        respuesta.innerHTML = nombre +" "+apellido + " su registro a sido completado";
        document.getElementById("login").disabled = false;
    }

    let contador = 0;
    contador++
    if (contador== 1){

        if(){

        }else{

        }

    }else if (contador==2){

        if(){

        }else{
            
        }

    }else if(contador==3){

        if(){

        }else{
            
        }
    }



}