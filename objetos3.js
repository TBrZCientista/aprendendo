//Acrescentando chaves que não exstem no objeto, e consultando-as

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "19283928433",
    email: "andre@email.com"
}
//Para acrescentar uma chae no objeto, a gente declara "objeto(ponto)chave" e em seguida declara o valor que a gente deseja que a chave tenha. Simples né? Caso a gente deseje alterar esssa chave, a gente declara novamente com um numero diferente que o Javascript faz a alteração

cliente.fone = "998765432"

console.log(cliente)