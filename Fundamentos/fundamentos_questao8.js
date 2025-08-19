/* 8) Escreva um programa que exiba uma frase ao inverso. */

function inverterFrase(frase) {
  let invertida = '';

  for (let i = frase.length - 1; i >= 0; i--) {
    invertida += frase[i];
  }

  return invertida;
}

const fraseOriginal = "Teste de frase ao inverso!";
const fraseInvertida = inverterFrase(fraseOriginal);

console.log(fraseInvertida);