// Aluno --> Nome, Notas, Promovido
// Objetos são sempre chave: valor (nome: 'Edmilton')
let novoAluno = {
    nome: 'Edmilton',
    notas: [5, 7, 9],
    promovido: false
};
let todosAlunos = [
    {
        nome: 'Paloma',
        notas: [4, 3, 0],
        promovido: false
    }
]                
todosAlunos.push(novoAluno)
todosAlunos.push({
    nome: 'Fernando',
    notas: [7, 5, 9],
    promovido: false
})
// console.log(todosAlunos)
/*
    [
        { nome: 'Paloma', notas: [ 4, 3, 0 ], promovido: undefined },
        { nome: 'Edmilton', notas: [ 5, 7, 9 ], promovido: true },
        { nome: 'Fernando', notas: [ 7, 5, 9 ], promovido: undefined }
    ]
*/
/*
    • Percorrer todos os indices do array
    • Somar todas as notas e dividir por 3
    • Verificar se o resulta é maior ou menor que 5
    */
for(let aluno of todosAlunos) {
    // console.log(aluno.nome === 'Edmilton')
   let notaFinal = aluno.notas.reduce(function(valorAtual, valorAnterior) {
       return valorAtual + valorAnterior
   })
    //    + -> soma ( 5 + 5 = 10)
    //    / -> divisão ( 10 / 2 = 5)
    //    - -> subtração ( 10 - 2 = 8)
    //    * -> multiplicação ( 7 * 4 = 28 )
// se nota final divido por 3 for menor que 5
   if(notaFinal / 3 < 5) {
       aluno.promovido = false;
    } else {
        aluno.promovido = true
    }
    //    Aqui faz apenas a impressão no console se o foi reprovado ou não
    //    if(notaFinal / 3 < 5) {
    //         console.log('O aluno: ' + aluno.nome + ' foi reprovado, com nota final:' + notaFinal / 3)
    //    } else {
    //         console.log('O aluno: ' + aluno.nome + ' está aprovado, com nota fianal: ' + notaFinal / 3)
    //    }
}
console.log(todosAlunos)
