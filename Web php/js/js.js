function enviar() {

    if (validar()) {
        document.getElementById("formulario").submit();
    }
    else{
        console.log("Formulario no validado")
    }
    //campos validados

}

function validar() {

let validado = flase;
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let email = document.getElementById("email").value;
let telefono = document.getElementById("telefono").value;
let mensaje = document.getElementById("mensaje").value;
let check = document.getElementById("politica");

if(nombre == " "){
    document.getElementById("respuesta").innerText = "Debe rellenar el campo nombre"
}
else if(apellido == " "){
    document.getElementById("respuesta").innerText = "Debe rellenar el campo apellido"
}
else if(email == " "){
    document.getElementById("respuesta").innerText = "Debe rellenar el campo email"
}
else if(telefono == " "){
    document.getElementById("respuesta").innerText = "Debe rellenar el campo telefono"
}
else if(mensaje == " "){
    document.getElementById("respuesta").innerText = "Debe rellenar el campo mensaje"
}
else if(!check.checked){//tambien se puede poner true o false
    document.getElementById("respuesta").innerText = "Debe aceptar politica"
}
else {}
validado = true;

return validado 

}