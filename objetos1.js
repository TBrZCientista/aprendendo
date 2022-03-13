// acessando os dados do cliente e mostrando ele no terminal 

//os itens que estão declarados no objeto cliente nesse caso são chamados de chaves, que tem seus respectivos valores. A constante é um objeto pois está sendo aberta com uma chave

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "19283928433",
    email: "andre@email.com"
}

// a gente diz que acessa o valor da chave do objeto

// subtring é um método de chave do JS
console.log(`Meu nome é ${cliente.nome}, tenho ${cliente.idade} anos de idade, meu cpf inicia com: ${cliente.cpf.substring(0,3)}, e meu e-mail é ${cliente.email}.`)