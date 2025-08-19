/* 3) Escreva uma função que receba uma lista de 10 números e retorne o maior e o menor valor encontrado na lista. */

function maiorMenor(lista) {
    if (lista.length === 0) { // verifica se a lista está vazia
        return "A lista está vazia!";
    }

    let maior = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) { // começa do segundo elemento
        // compara cada elemento com o maior e menor encontrados até agora
        if (lista[i] > maior) {
            maior = lista[i];
        } 
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }

    return { maior, menor };
}

let numeros = [25, 8, 99, 45, 12, 67, 3, 77, 56, 18];
let resultado = maiorMenor(numeros);

console.log("Maior número: " + resultado.maior);
console.log("Menor número: " + resultado.menor);