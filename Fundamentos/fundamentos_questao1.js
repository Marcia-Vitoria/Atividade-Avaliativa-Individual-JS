/* 1) Escreva um programa em Javascript que exiba propriedades de data e hora no seguinte formato:
- Hoje é: [dia da semana].
- A hora atual é: [hora atual no formato de HH:MM:SS]. */

let agora = new Date();

let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

let dia = diasSemana[agora.getDay()];

let horas = agora.getHours();
let minutos = agora.getMinutes();
let segundos = agora.getSeconds();

if (horas < 10) horas = "0" + horas;
if (minutos < 10) minutos = "0" + minutos;
if (segundos < 10) segundos = "0" + segundos;

console.log("Hoje é: " + dia + ".");
console.log("A hora atual é: " + horas + ":" + minutos + ":" + segundos + ".");