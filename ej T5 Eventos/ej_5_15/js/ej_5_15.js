/*Realizar una app que cuando se pulse sobre div “principal”, 
al cabo de 3 segundos, se cambien los colores de todos los 
divs de la página con colores aleatorios*/
//Recordad que esta función se ejecuta antes de cargar el DOM

/*(function() {
    window.addEventListener('load', Inicializar);
})();*/

//function Inicializar() {
let div_principal = document.getElementById("principal")
div_principal.addEventListener('click', function() {
    setTimeout(cambiarColores, 3000);
});
//}

function cambiarColores() {
    let listaDivs = document.getElementsByTagName("div");
    for (let elementos of listaDivs) {
        let R = Math.random() * 256;
        let G = Math.random() * 256;
        let B = Math.random() * 256;

        elementos.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
    }
}

/*let divPpal = document.getElementById("principal")

divPpal.addEventListener("click", cambiarDiv);

function cambiarDiv(){
    let todosDiv = document.getElementsByTagName("div")
    for(let elementos of todosDiv){
        setTimeout(function(){
            let R=Math.random()*255;
            let G=Math.random()*255;
            let B=Math.random()*255;

            elementos.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')'; 
        }, 3000)
    }
}*/