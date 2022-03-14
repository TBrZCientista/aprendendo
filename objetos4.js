//Vamos acessar a lista de telefones cadastrados no sistema e exibir os valores dos dados da chave

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "19283928433",
    email: "andre@email.com",
    fones:["5512998765432","552136547656"]
}

//lembrando que a "forEach" não realiza nenhum tipo de ação, só realiza um loop

cliente.fones.forEach(fone => console.log(fone))