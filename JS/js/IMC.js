function calcular(){
    //console.log("Hola");

    let altura = document.getElementById("altura").value;
    //console.log("Cúal es tú altura? " + altura);

    let peso = document.getElementById("peso").value;
    //console.log("Cúal es tú peso? " + peso);

    let resultado = document.getElementById("resultado");

    if (altura == ""){
        resultado.innerHTML = "Debe rellenar el campo altura"
    }
    else {
        if (peso == ""){
            resultado.innerHTML = "Debe rellenar el campo peso"
        }
        else {
            let imc = peso / ((altura / 100) * (altura / 100));
            //resultado.innerHTML = "Su IMC es: " + imc;
            
            let imc_final = imc.toFixed(2);
            
            if (imc_final < 18.5) {
                resultado.innerHTML = "Su IMC es: " + imc_final + ". Tienes delgadez extrema";
            }
            else if (imc_final >= 18.5 && imc <= 24.9){
                resultado.innerHTML = "Su IMC es: " + imc_final + ". Tienes normopeso";
            }
            else if (imc_final >= 25 && imc <= 26.9){
                resultado.innerHTML = "Su IMC es: " + imc_final + ". Tienes sobrepeso grado I";
            }
            else if (imc_final >= 27 && imc <= 29.9){
                resultado.innerHTML = "Su IMC es: " + imc_final + ". Tienes sobrepeso grado II";
            }
            else if (imc_final >= 30 && imc <= 34.9){
                resultado.innerHTML = "Su IMC es: " + imc_final + ". Tienes obesidad tipo I";
            }
            else if (imc_final >= 35 && imc <= 39.9){
                resultado.innerHTML = "Su IMC es: " + imc_final + ". Tienes obesidad tipo II";
            }
            else if (imc_final >= 40 && imc <= 49.9){
                resultado.innerHTML = "Su IMC es: " + imc_final + ". Tienes obesidad tipo III";
            }
            else if (imc_final > 50){
                resultado.innerHTML = "Su IMC es: " + imc_final + ". Tienes obesidad tipo IV";
            }
        }
    }
}