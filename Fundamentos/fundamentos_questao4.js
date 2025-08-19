/* 4) Faça um programa que verifique dois números. O retorno deverá ser true se um dos números é 30 ou se a soma dos dois é 30.  */

function verificaNumeros(num1, num2) {
    return num1 === 30 || num2 === 30 || (num1 + num2) === 30;
}

console.log(`validação:  ${verificaNumeros(30, 4)}`);
console.log(`validação:  ${verificaNumeros(10, 20)}`);
console.log(`validação:  ${verificaNumeros(15, 15)}`);
console.log(`validação:  ${verificaNumeros(13, 5)}`); 