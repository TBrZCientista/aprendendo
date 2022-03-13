//padronizando os itens da lista com o Map(), colocando todos os nomes com todas as letras maiúsculas

let listaDeNomes = ['ana Julia', 'Caio vinicius','BIA silva']

const nomesAtualizados = listaDeNomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)