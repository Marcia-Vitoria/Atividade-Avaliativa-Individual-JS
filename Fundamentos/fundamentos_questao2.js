/* 2) Escreva um programa em Javascript que calcule a área de um triângulo. Você pode fornecer os valores de cada lado em variáveis separadas ou em uma lista de valores. */

const a = 5;
const b = 6;
const c = 7;

// fórmula de Heron
// semiperímetro: s = (a + b + c) / 2
const s = (a + b + c) / 2;

// área: area = √(s * (s - a) * (s - b) * (s - c))
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Os lados do triângulo são: " + a + ", " + b + ", " + c);
console.log("A área do triângulo é: " + area);