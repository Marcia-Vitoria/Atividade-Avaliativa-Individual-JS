/* 15) Escreva um programa que ordene todos os elementos numéricos de uma lista. */

function ordenarLista(lista) {
  return lista.sort((a, b) => a - b); // ordena em ordem crescente
}

const numeros = [10, 5, 3, 8, 2];
console.log(`resultado: ${ordenarLista(numeros)}`);