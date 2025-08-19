/* 4) Escreva um programa que calcule as médias de 5 alunos. Siga as instruções abaixo:
◦ A lista de alunos será do tipo:
▪ alunos = [ [“Aluno1”, [10, 50, 100]], [“Aluno2”, [55, 78, 90]], ... ]
◦ Se a média do aluno for menor que 70, deverá ser exibido “Reprovado”.
◦ Se a média for maior que 70, exibir “Aprovado”.
◦ Deve ser exibido:
▪ Aluno1, média X, Aprovado/Reprovado.
▪ Aluno2, média X, Aprovado/Reprovado.
▪ etc. */

let alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [60, 60, 60]],
    ["Aluno4", [100, 95, 80]],
    ["Aluno5", [40, 50, 65]]
];

for (let i = 0; i < alunos.length; i++) {
    let nome = alunos[i][0];
    let notas = alunos[i][1];

    // calculando a média
    let soma = 0;
    for (let j = 0; j < notas.length; j++) {
        soma += notas[j];
    }
    let media = soma / notas.length;

    // verificando aprovação
    let status = (media >= 70) ? "Aprovado" : "Reprovado";

    console.log(nome + ", média " + media.toFixed(2) + ", " + status);
}