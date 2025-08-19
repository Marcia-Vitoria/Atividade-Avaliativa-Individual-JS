/* 13) Escreva um programa que leia uma lista de números. Eleve cada um dos números a 3 e
depois some o total de valores obtidos.
 */

function somaCubos(numeros) {
  let soma = 0; 

  for (let num of numeros) {
    soma += Math.pow(num, 3); // eleva o número ao cubo
  }

  return soma;
}

const lista = [1, 2, 3, 4];

console.log("---------------------");
console.log(`resultado: ${somaCubos(lista)}`);