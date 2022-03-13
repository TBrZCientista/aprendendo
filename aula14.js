// Vamos olhar dois arrays diferentes para olhar a nota dos alunos e dizer se eles foram aprovados ou não

const nomes = ['Ana', 'Marcos', 'Maria','Mauro']

const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter( (aluno,indice) => notas [indice] < 5)

console.log(`Reprovados: ${reprovados}`)
