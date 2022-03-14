//Consultar um objeto usando chaves

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "19283928433",
    email: "andre@email.com"
}

const chaves = ['nome','idade','cpf','email']

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))