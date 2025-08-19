/* 12) Escreva um programa que faça a união de todos os elementos de uma lista. O resultado
deverá ser uma String única com todos os elementos separados pelo sinal de #.
 */

function unirElementos(lista) {
  return lista.join('#');
}

const lista = ['Python', 'Java', 'PHP', 'JavaScript'];
console.log(`resultado: ${unirElementos(lista)}`);