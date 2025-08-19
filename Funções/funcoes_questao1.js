/* 1) Escreva uma função que receba um número e retorne o número invertido. Exemplo: 12356 retornará 65321. */

function inverterNumero(num) {
    // transforma em string, separa, inverte e junta de volta
    let invertido = num.toString().split("").reverse().join("");
    return parseInt(invertido); // converte de volta para número
}

// teste
console.log(inverterNumero(12356)); // saída: 65321
console.log(inverterNumero(987654)); // saída: 456789