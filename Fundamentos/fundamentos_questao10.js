/* 10) Escreva um programa Javascript que converta o nome e sobrenome de uma pessoa no
formato:
◦ Exemplo: “Alan Mathison Turing”.
◦ Resultado: “T. M. Alan”.
 */

function formatarNome(nomeCompleto) {

  const partes = nomeCompleto.split(' ');
  const primeiroNome = partes[0];
  const sobrenomes = partes.slice(1); // pega todos os sobrenomes após o primeiro

  let iniciais = '';
  for (let i = 0; i < sobrenomes.length; i++) {
    iniciais += sobrenomes[i][0].toUpperCase() + '. ';
  }

  return iniciais + primeiroNome;
}

const nome = "Alan Mathison Turing";
console.log(`resultado: "${formatarNome(nome)}"`);