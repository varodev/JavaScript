// imc = peso / altura*altura

// <18,5	Peso insuficiente
// 18,5-24,9	Normopeso
// 25-26,9	Sobrepeso grado I
// 27-29,9	Sobrepeso grado II (preobesidad)
// 30-34,9	Obesidad de tipo I
// 35-39,9	Obesidad de tipo II
// 40-49,9	Obesidad de tipo III (mórbida)
// >50	Obesidad de tipo IV (extrema)

// pedimos datos por promt
//contestamos por consola

let peso = prompt("Introduce tu peso en kg");

//console.log("Peso " + peso);

let altura = prompt("Introduce tu altura en cm");

let imc = peso / (altura/100) * (altura/100);
let imc_final = imc.toFixed(2);

console.log("Tu IMC es: " + imc_final);

if (imc < 18.5) {
    console.log("Peso insuficiente");
}
else if (imc >= 18.5 && imc <= 24.9){
    console.log("Normopeso");
}
else if (imc >= 25 && imc <= 26.9){
    console.log("Sobrepeso grado I");
}
else if (imc >= 27 && imc <= 29.9){
    console.log("Sobrepeso grado II");
}
else if (imc >= 30 && imc <= 34.9){
    console.log("Obesidad tipo I");
}
else if (imc >= 35 && imc <= 39.9){
    console.log("Obesidad tipo II")
}
else if (imc >= 40 && imc <= 49.9){
    console.log("Obesidad tipo III")
}
else if (imc > 50){
    console.log("Obesidad tipo IV")
}