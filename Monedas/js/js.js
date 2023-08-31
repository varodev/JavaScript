function convertidor(){
    //.value para coger el valor del texto 
    //innerHTML nos permite leer un dato o asignarlo al contenido de un div
    //getElementById permite seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado

    let dolar = [1, 0.840416, 0.751127, 104.479];
    
    let eur = [1.18989, 1, 0.892685, 124.213];
    
    let libra = [1.33133, 1.12022, 1, 139.176];
    
    let yen = [0.00957134, 0.00805066, 0.00718515, 1];
    
    let monedas = ["dolar", "eur", "libra", "yen"];
    
    let moneda = document.getElementById("moneda").value;
    
    let moneda2 = document.getElementById("moneda2").value;
    
    let cantidad = document.getElementById("cantidad").value
    
    let resultado = document.getElementById("resultado");
    
        if( moneda==monedas[0] & moneda2 == monedas[0]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*1)+" de " + moneda2
     
        }else if( moneda==monedas[0] & moneda2 == monedas[1]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*0.84)+" de " + moneda2
     
        }else if( moneda==monedas[0] & moneda2 == monedas[2]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*0.75)+" de " + moneda2
     
        }else if( moneda==monedas[0] & moneda2 == monedas[3]){
            
        resultado.innerHTML = "El resultado es: " + (cantidad*104.47)+" de " + moneda2
         
        }else if(moneda==monedas[1] & moneda2 == monedas[0]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*1.18)+" de " + moneda2
    
        }else if( moneda==monedas[1] & moneda2 == monedas[1]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*1)+" de " + moneda2
    
        }else if( moneda==monedas[1] & moneda2 == monedas[2]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*0.89)+" de " + moneda2
    
        }else if( moneda==monedas[1] & moneda2 == monedas[3]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*124.21)+" de " + moneda2
    
        }else if( moneda==monedas[2] & moneda2 == monedas[0]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*1.33)+" de " + moneda2
         
        }else if( moneda==monedas[2] & moneda2 == monedas[1]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*1.12)+" de " + moneda2
         
        }else if( moneda==monedas[2] & moneda2 == monedas[2]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*1)+" de " + moneda2
         
        }else if( moneda==monedas[2] & moneda2 == monedas[3]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*139.17)+" de " + moneda2
         
        }else if( moneda==monedas[3] & moneda2 == monedas[0]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*0.009)+" de " + moneda2
         
        }else if( moneda == monedas[3] & moneda2 == monedas[1]){
        
        resultado.innerHTML = "El resultado es: " + (cantidad*0.008)+" de " + moneda2
         
        }else if(moneda == monedas[3] & moneda2 == monedas[2]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*0.007)+" de " + moneda2
         
        }else if( moneda==monedas[3] & moneda2 == monedas[3]){
    
        resultado.innerHTML = "El resultado es: " + (cantidad*1) +" de " + moneda2
         
        }
    }