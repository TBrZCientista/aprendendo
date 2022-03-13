//adicionando valor nos itens do aray usando o método map(). 

const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)

//É importante usar a map() quando você quer o retorno de algum dado, a forEach() faria a mesma coisa, só que não retorna dados.

