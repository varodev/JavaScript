//Funciones: 
//Declaración:

function iniciar(){
    //alert("Hola");
    //console.log("Hola desde la consola")
    let nombre = "Paco";
    
    //Para concatenar se utiliza +
    //console.log("Hola " + nombre);
    
    //Para seleccionar un parrafo del html
    let parrafos = document.getElementsByTagName("h1");
    //console.log(parrafos)

    //Para coger la id del html. No tiene porque llamarse igual la variable.
    let titular = document.getElementById("titulo");
    //console.log(titular)

    //Las variables dentro de los bloques son diferentes a las de fuera
    /*if () {
        let nombre = "Maria";
    } else {
        
    }*/
}

//Las variables creadas dentro de la función solo sirve para ella, las que se declaran fuera sirve para todo
//Llamar a la función:

//iniciar(); pondriamos esto si no lo declaramos en el html

//Tipos de datos:
//Variables:
//Var poco uso porque es antiguo
//Let es el equivalente a var
//Conts

//Texto = String
//Números = number

/*var nombre = "Manuel";
var numero = 1;
apellido = "Martín";
const nombre_nuevo = "Miguel";
let numero_nuevo = 3;*/

//Operadores matemáticos:
let numero1 = 2;
let numero2 = 4;
let numero3 = 7;
let numero4 = 5;

//Suma. Se puede hacer de dos formas

console.log("El resultado de la suma es: " + (numero1 + numero2));

//Creando una variable
let suma = numero1 + numero2;
console.log("El resultado de la suma es: " + suma);

//Resta

console.log("El resultado de la resta es: " + (numero1 - numero2));

let resta = numero1 - numero2;
console.log("El resultado de la resta es: " + resta);


//Multiplicación

console.log("El resultado de la multiplicación es: " + (numero1 * numero2));

let multiplicacion = numero1 * numero2;
console.log("El resultado de la multiplicación es: " + multiplicacion);


//División

console.log("El resultado de la división es: " + (numero1 / numero2));

let division = numero1 / numero2;
console.log("El resultado de la división es: " + division);

//Concatenación con String

let nombre = "María";
let apellido = "Gómez";
let ciudad = "Madrid";
let edad = 16;

console.log("La alumna " + nombre + " " + apellido + " vive en " + ciudad + " y tiene " + edad + " años.");

//Arrays
const diasSemana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

//Para saber que tan largo es el Array
console.log("Días de la semana: " + diasSemana.length);

//Para especificar en cual dia estoy. Los arrays empiezan en el 0
console.log(diasSemana[0]);
console.log(nombre + " viene el " + diasSemana[4]);