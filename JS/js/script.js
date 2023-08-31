function tercerSaludo(){
    console.log("Hola por tercera vez")
}
var nombre = "Maria";
var apellido = "Lopez";

let cod_postal = "28860";
 let numero1 = 5;
 let numero2 = 10;

 console.log(nombre)
    console.log(apellido)
console.log(nombre + " " +apellido)
console.log (numero1 + numero2)
let suma = numero1 + numero2;
console.log(suma)
console.log(nombre + " " + apellido + " tiene " + suma + " años")

var dia = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
console.log(dia[0]);
let nombres = ["Manuel","Carmen","Carlos","Isabel"];
let apellidos = ["Domingo", "Garcia", "Lopez", "Muñoz"];
let ciudad = ["Sevilla", "Bilbao","Madrid","Barcelona"];
let edad = [23,45,67,15];
//console.log(nombres[0] + " " + apellidos [2]);

//Sacar por consola:
//Manuel e Isabel viven en Madrid
console.log(nombres[0] + " e " + nombres[3] + " viven en " + ciudad[2]);
//Carlos Garcia vive en Bilbao y tiene 67 años
console.log(nombres[2] + " " + apellidos[1] + " vive en " + ciudad[1] + " y tiene " + edad[2]);
//Carmen Lopez y Manuel Muñoz tienen 15 años y residen en Madrid y Sevilla respectivamente
console.log(nombres[1] + " " + apellidos[2] + " y " + nombres[0] + " " + apellidos[3] + " tienen " + edad[3] + " y residen en " + ciudad[2] + " y " + ciudad[0] + " rspectivamente")
//Isabel Domingo de 45 años es amiga de Carlos Garcia de Barcelona y de Manuel Lopez de Bilbao
console.log(nombres[3] + " " + apellidos[0] + " de " + edad[1] + " es amiga de " + nombres[2] + " " + apellidos[1] + " de " + ciudad[3] + " y de " + nombres[0] + " " + apellidos[2] + " de " + ciudad[1]);

console.log("longitud array: " + nombres.length)
nombres.push('Maria');

let contador = 0;
console.log("contador: " + contador);
contador++;
console.log("contador: " + contador);
contador++;
console.log("contador: " + contador);
contador--;
console.log("contador: " + contador);

let num1 = 4;
let num2 = 4;
let resultado = num1 + num2;
console.log("resultado: " + resultado);
let resultado2 = ++num1 + num2;
console.log("resultado: " + resultado2);
console.log("num1: " + num1)


var verdadero = true;
var falso = false;
console.log(!verdadero);


if(falso) {
    console.log("adelante")
}
else{
    console.log("no es la primera vez")
    falso = true;
}

