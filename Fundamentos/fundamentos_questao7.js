/* 7) Escreva um programa que receba uma frase, realize modificações em cada palavra e exiba a nova frase modificada seguindo os critérios:
◦ Se a palavra tiver um tamanho menor que 5 caracteres, transforme tudo em maiúsculo.
◦ Se a palavra tiver um tamanho maior que 5 caracteres, transforme tudo em minúsculo.
 */

function modificarFrase(frase) {
  const palavras = frase.split(' ');
  const palavrasModificadas = [];

  for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];

    if (palavra.length < 5) {
      palavrasModificadas.push(palavra.toUpperCase());
    } else if (palavra.length > 5) {
      palavrasModificadas.push(palavra.toLowerCase());
    } else {
      palavrasModificadas.push(palavra);
    }
  }

  return palavrasModificadas.join(' ');
}

const fraseOriginal = "Atividade de informática aplicada a web com JavaScript";
const fraseModificada = modificarFrase(fraseOriginal);

console.log(" Frase original:", fraseOriginal);
console.log("Frase modificada:", fraseModificada);