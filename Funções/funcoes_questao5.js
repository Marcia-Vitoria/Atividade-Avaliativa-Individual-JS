/* 5) Escreva uma função que receba uma frase e determine qual a maior palavra encontrada. */

function maiorPalavra(frase) {
    let palavras = frase.split(' '); // divide a frase em palavras usando o espaço como delimitador
    let maior = palavras[0];

    for (let palavra of palavras) {
        if (palavra.length > maior.length) { // verifica se a palavra atual é maior que a maior encontrada
            maior = palavra; // se for, atualiza a maior palavra
        }
    }

    console.log("A maior palavra é: " + maior);
}

maiorPalavra("Manhãs são para café e contemplação.");