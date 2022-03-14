//lista de objetos em objetos

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "19283928433",
    email: "andre@email.com",
    fones:["5512998765432","552136547656"],
    dependentes: [{
        nome: "Sara Silva",
        paretesco: "filha",
        dataNasc: "20/03/2011",
    }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente)

//agora a gente precisa entrat no objeto cliente, na chave dependente e filtar o valor necessário para saber qual é a filha mais nova. A chave dependentes é uma "array", então podemos utilizar o método "filter" que é um método de "array"

const filhaMaisNova = cliente.dependentes.filter(
    dependente => dependente.dataNasc==="04/01/2014"
)

//para exibirmos na tela a informação necessária, precisamos acessar o índice do valor da chave do objeto "dependentes", para conseguirmos printar na tela a informação

console.log(`A filha mais nova é: ${filhaMaisNova[0].nome}`)