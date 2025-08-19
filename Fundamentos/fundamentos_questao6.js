/* 6) Escreva um programa que encontre o número com maior quantidade de ocorrência em  um arraynumay de números. */

function numMaisFrequente(arraynum) {
    const contagem = {};
    let maxNum = null;
    let maxCount = 0;

    for (const num of arraynum) {
        if (contagem[num]) {
            contagem[num]++;
        } else {
            contagem[num] = 1;
        }

        if (contagem[num] > maxCount) {
            maxCount = contagem[num];
            maxNum = num;
        }
    }

    return { numero: maxNum, ocorrencias: maxCount };
}

let numeros = [3, 7, 3, 2, 7, 7, 5, 3, 7, 2, 3];
let resultado = numMaisFrequente(numeros);

console.log(`O número mais frequente é ${resultado.numero} e aparece ${resultado.ocorrencias} vezes.`);