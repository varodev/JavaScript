//Tipos de funciones:

//Función que no admite ni reotrna parámetros

function saludar(){
    console.log("Hola");
}

saludar();

//Función que admite pero no retorna parámetros

function sumar(nuemro1, numero2){
    console.log(numero1 + nuemro2);
}

sumar(3,4);

//Función que no admite pero si retorna parámetros

let primeraVez = true;
function validar(){
    if(primeraVez){
        primeraVez = false;
    }
    else {
        primeraVez = true;
    }
    return primeraVez
}

validar();

//Funcion que admite y retorna parámetros

function restar(nuemro1, numero2){
    let resta = numero1 - nuemro2;
    return resta
}

let resta = restar(3,4);
console.log(resta);