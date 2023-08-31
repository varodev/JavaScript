function pasarParametros(){

    let kg_usuario = document.getElementById("peso").value;
    let altura_usuario = document.getElementById("altura").value;
    let edad_usuario = document.getElementById("edad").value;

    let resultado = comprobarDatosUsuario(kg_usuario,altura_usuario,edad_usuario);

    if(resultado){
        calcularIMC(kg_usuario,altura_usuario,edad_usuario);
    }
}

function comprobarDatosUsuario(kg_usuario,altura_usuario,edad_usuario){

    let resultado = false;

    if(kg_usuario.length == 0)
    {
        alert("Introduzca su peso en kg");
    } else if (altura_usuario.length == 0)
    {
        alert("Introduzca su altura en cm");
    } else if(edad_usuario.length == 0)
    {
        alert("Introduzca su edad");
    } else 
    {
        resultado = true;
    }


    return resultado;
}

function calcularIMC(kg_usuario,altura_usuario,edad_usuario){
    let cm_a_metros = Math.round(altura_usuario / 60);

    let IMC =  kg_usuario / Math.pow(cm_a_metros,2);

    let peso_ideal = altura_usuario - 100 + ((edad_usuario / 10) * 0.9);

    comprobarIMC(kg_usuario,IMC,peso_ideal);
}

function comprobarIMC(kg_usuario,IMC,peso_ideal){

    let container_mensaje = document.getElementById("resultado");
    let mensaje_colocado = comprobarMensaje();

    if(!mensaje_colocado){
        let parrafo = document.createElement("p");
        parrafo.setAttribute("id","mensaje");
        let nodo_texto = "";
    
        if(kg_usuario > peso_ideal){
            nodo_texto = document.createTextNode("Su peso esta por encima de su peso ideal que es: " + peso_ideal);
        } else if (IMC > 25){
            nodo_texto = document.createTextNode("Su IMC de " + IMC + " es superior a 25");
        } else {
            nodo_texto = document.createTextNode("Todo esta bien");
        }
    
        parrafo.appendChild(nodo_texto);
        container_mensaje.appendChild(parrafo);
    } else {
        document.getElementById("mensaje").remove();
        comprobarIMC(kg_usuario,IMC,peso_ideal);
    }
}

function comprobarMensaje(){
    let mensaje = document.getElementById("mensaje");
    let resultado = true;

    if(mensaje == null && mensaje == undefined){
        resultado = false;
    }

    return resultado;
}
    