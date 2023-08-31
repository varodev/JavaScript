
function mandar(event){

    console.log("dentro")

    event.preventDefault();
    
    if(validar()){

     document.getElementById("formulario").submit();   

    }
}

    function validar(){

        let respuesta = false;

        let nombre = document.getElementById("nom").value;

        let apell = document.getElementById("apel").value;

        let email = document.getElementById("mail").value;


        let resultado = document.getElementById("resultado");
        
        
        if (nombre == ""){

            resultado.innerHTML= "debe rellenar el campo nombre";

            respuesta = false;

        } else if (apell == ""){

            resultado.innerHTML = "debe rellenar el campo apellido";

            respuesta = false;

        } else if (email == ""){

            resultado.innerHTML= "debe rellenar el campo email";

            respuesta = false;

        }else{

            respuesta= true;

        }

        return respuesta
    }


