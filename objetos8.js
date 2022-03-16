//exibindo dados básicos do cliente

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "19283928433",
    email: "andre@email.com",
    fones:["5512998765432","552136547656"],
    dependentes: [
        {
          nome: "Sara Silva",
          paretesco: "filha",
          dataNasc: "20/03/2011",
        },
        {
          nome:"Samia Maria",
          parentesco: "filha",
          dataNasc: "04/01/2014" 
        }],
    saldo: 100,
    //aqui temos uma função sendo passada como chave de um objeto. (This é uma palavra reservada do js, "isso")
    depositar: function(valor){
        this.saldo += valor;
    }
}

//lembrando que a declaração devvariável "let" pode ser aberta vazia, pois ela permite receber valor posterior. Diferentemente da "const".
let relatorio="";

for(let info in cliente){
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    }else {
        relatorio += `
        ${info} ==> ${cliente[info]} 
        `
    }
}


//a verificação "for in" queria nos retornar os dados básicos do cliente, então, nós pedimos para nossa função excluir da exibição os dados que fossem objetos e funções
console.log(relatorio)