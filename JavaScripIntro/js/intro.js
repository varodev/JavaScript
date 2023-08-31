window.onload = iniciar; /*Nombre de la funcion*/
function iniciar() {
    console.log("dentro"); /*Esto solo se ve en la zona de consola en inspeccionar*/
}


//console.log("Hola desde la consola"); /*Esto es una llamada a un metodo que tiene la funcion de JS.Console log es la salida por consola*/

/*SINTAXIS*/
/*Variables*/
//let para variables tipicas
//const para variables constantes. Con estas dos variables es suficiente, y no hace falta declarar el tipo

let nombre = "Maria";
const apellido = "López";
console.log(nombre + " " + apellido);

const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]; /*Array*/
console.log(dias[2]);
dias.length;

function visualizar() {
    /*Esta funcioon tiene coger el nombre y apellido. Para ello usaremos los id
      /* console.log(document.getElementById("nombre").value);
       console.log(document.getElementById("apellido").value); OPCIONES :*/

    let nombre = document.getElementById("nombre").value;
    console.log(nombre);
    let apellido = document.querySelector("#apellido").value; /*Es el sustituto del uso del id con byIde*/
    let respuesta = document.querySelector("#respuesta");
    //console.log(nombre, apellido);


    //CONDICIONALES : para que los values no se puedan ver si estan vacios. Si lo estan sale una alerta:
    if (nombre == " ") {
        respuesta.innerText = "Debe completar el campo nombre."

    } else if (apellido == " ") {
        respuesta.innerText = "Debe completar el campo apellido."

    } else {
        respuesta.innerText = nombre + " " + apellido;

    }

}

/*document.querySelector("#respuesta").innerText = nombre + " " + apellido; Este es el "p",Innertext coloca dentro del p los campos que escribimos. Cuando le damos a visualizar tenemos que ver algo, para ello tenemos que asegurarnos de que los campos estan rellenos, es decir que lo values no esten  vacios, para ello si le da a ver y el value este vacio , debe salir una alerta*/