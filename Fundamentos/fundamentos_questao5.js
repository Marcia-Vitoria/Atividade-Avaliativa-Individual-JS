/* 5) Escreva um programa para checar três números inteiros. Se os números estiverem entre 50 e 99 então imprima uma mensagem de sucesso. Caso contrário, se um dos números não estiver dentro do intervalo, imprima uma mensagem de erro. */

function validarNumeros(num){
    return num >= 50 && num <= 99;
}

function checarNumeros(a, b, c) {
    if (validarNumeros(a) && validarNumeros(b) && validarNumeros(c)) {
        console.log("Sucesso: todos os números estão entre 50 e 99.");
    } else {
        console.log("Erro: pelo menos um número está fora do intervalo 50-99.");
    }
}

checarNumeros(55, 60, 99);
checarNumeros(50, 75, 80);
checarNumeros(45, 60, 70);
checarNumeros(55, 100, 90);