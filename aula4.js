// Vamos dividir os nomes declarados na array em outros dois arrays com a mesma quantidade de itens

const nomes = ['João', 'Juliana', 'Ana','Caio','Lara','Marjorie','Guilherme','Aline','Fabiana','André','Paulo','Carlos','Bia','Vivian','Isabela','Vinicius','Renata','Renan','Daisy','Camilo']

console.log("Tamanho da array: ", nomes.length)
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Os alunos da sala um são: ${sala1}`)
console.log(`Os alunos da sala dois são: ${sala2}`)