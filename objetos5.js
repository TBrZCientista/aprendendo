//Criando um objeto composto, objeto dentro de objeto

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "19283928433",
    email: "andre@email.com",
    fones:["5512998765432","552136547656"]
}

//Existe a possibilidade de se colocar vários tipos de dados no nosso objeto, já tinhamos "arrays", "number", "strings" e agora vem um outro objeto

cliente.dependentes = {
    nome: "Sara",
    paretesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

//para alterar algum valor de chave do objeto que está dentro do outro objeto, a gente faz igual já fez anteriormente, declara o objeto(ponto)nome e declara o novo valor dessa chave

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)