/* 11) Escreva um programa que receba uma lista de números e retorne os últimos n elementos da lista.
◦ Exemplo:
▪ numeros = [10, 58, 68, 88, 25, 45]
▪ n = 3
▪ Resultado: [88, 25, 45]
 */

function ultimosElementos(numeros, n) {
  return numeros.slice(-n); // pega os últimos n elementos do array
}

const numeros = [10, 58, 68, 88, 25, 45];
const n = 3;

console.log(`resultado: [${ultimosElementos(numeros, n)}]`);