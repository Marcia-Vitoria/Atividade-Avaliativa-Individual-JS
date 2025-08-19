/* 9) Escreva um programa que calcule a soma dos tamanhos de todas as palavras em uma frase. */

function somarTamanho(frase) {
  const palavras = frase.split(" ");
  let soma = 0;
  for (const palavra of palavras) {
    soma += palavra.length;
  }
  return soma;
}
const minhaFrase = "Numa toca no chão vivia um hobbit";
const total = somarTamanho(minhaFrase);
console.log(`A soma dos tamanhos das palavras na frase é: ${total}`);