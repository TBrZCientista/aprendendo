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

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
