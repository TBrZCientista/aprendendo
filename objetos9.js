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
    
    depositar: function(valor){
        this.saldo += valor;
    }
}

function ofereceSeguro(obj){
  const propsClientes = Object.keys(obj);
  if (propsClientes.includes("dependentes")){
      console.log(`Oferecer seguro de vida para ${obj.nome}`)
  }
}

ofereceSeguro(cliente)

//console.log(Object.values(cliente)) é um correspondente do "Keys", vai retornar os valores das chaves do objeto.
//console.log(Object.entries(cliente)) é um outro correspondente do "Keys", nesse caso ele retorna as entradas, tanto as chaves como os valores;
//tanto o "value" quanto o "entries", retornam os resultados dentro de um Array.