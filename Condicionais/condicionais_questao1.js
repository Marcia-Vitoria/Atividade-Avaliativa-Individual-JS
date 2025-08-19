/* 1) Escreva um programa que compare dois números e diga qual o maior. */

let numero1 = 10;
let numero2 = 20;

if (numero1 > numero2) {
    console.log(numero1 + " é maior que " + numero2);
} else if (numero2 > numero1) {
    console.log(numero2 + " é maior que " + numero1);
} else {
    console.log("Os dois números são iguais.");
}