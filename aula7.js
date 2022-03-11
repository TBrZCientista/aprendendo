//criar duas listas diferentes e uní-las (lista com duas dimensões)

const alunos = ['João','Juliana','Caio','Ana']

const mediasDosAlunos = [10, 8, 7.5, 9]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(`${listaDeNotasEAlunos[0][0]}, a sua média é ${listaDeNotasEAlunos[1][0]}`)