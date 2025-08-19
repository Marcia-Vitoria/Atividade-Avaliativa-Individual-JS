/* 4) Escreva uma função que receba uma frase e uma palavra. Determine se a palavra está presente na frase. */

function palavraNaFrase(frase, palavra) {
    // converte tudo para minúsculas para evitar problemas de maiúsculas/minúsculas
    let texto = frase.toLowerCase();
    let termo = palavra.toLowerCase();

    if (texto.includes(termo)) { // verifica se a palavra está na frase
        return "A palavra '" + palavra + "' está presente na frase.";
    } else {
        return "A palavra '" + palavra + "' não está presente na frase.";
    }
}

console.log(palavraNaFrase("A varinha de sabugueiro pertenceu a vários bruxos.", "varinha"));
console.log(palavraNaFrase("É leviôsa, e não leviosá!", "não"));