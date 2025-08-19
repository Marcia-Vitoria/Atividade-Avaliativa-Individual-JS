/* 2) Escreva uma função que receba uma frase e retorna a quantidade de vogais e de consoantes presentes na frase. */

function contarVogaisConsoantes(frase) {
    let texto = frase.toLowerCase(); // converte a frase para minúsculas

    let vogais = 0;
    let consoantes = 0;

    for (let i = 0; i < texto.length; i++) { // itera por cada caractere da frase
        let char = texto[i];
        
        // verifica se é letra (a-z)
        if (/[a-z]/.test(char)) { // se for letra
            if ("aeiou".includes(char)) { // se for vogal
                vogais++; // contador de vogais
            } else {
                consoantes++; // contador de consoantes
            }
        }
    }

    return { vogais, consoantes };
}

// Exemplo de uso:
let resultado = contarVogaisConsoantes("A colher não existe");
console.log("Vogais: " + resultado.vogais);
console.log("Consoantes: " + resultado.consoantes);
