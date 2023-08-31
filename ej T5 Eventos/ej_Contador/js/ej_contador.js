/*Crear app que cuando cargue el index 
ponga en marcha en contador */
document.addEventListener("DOMContentLoaded", function() {
    setInterval(activarContador, 1000);
});     
    
    var contador=0

function activarContador(){
   let counter = document.getElementById("contador")
       counter.innerText=contador++;
}


    
    
     