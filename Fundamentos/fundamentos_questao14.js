/* 14) Escreva um programa que determine se uma palavra está presente ou não em uma frase.  */

function palavraEstaNaFrase(frase, palavra) {
  const fraseMinuscula = frase.toLowerCase();
  const palavraMinuscula = palavra.toLowerCase();

  return fraseMinuscula.includes(palavraMinuscula);
}

const frase = "O medo de um nome só faz aumentar o medo da própria coisa";
const palavra = "medo";

if (palavraEstaNaFrase(frase, palavra)) {
  console.log(`A palavra "${palavra}" está presente na frase.`);
} else {
  console.log(`A palavra "${palavra}" NÃO está presente na frase.`);
}