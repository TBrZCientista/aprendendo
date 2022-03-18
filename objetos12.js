function Cliente (nome, cpf, email, saldo)
    {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
        this.depositar = function(valor){
            this.saldo += valor 
        }
    }
//nesse ponto vamos criar um cliente Poupança
function ClientePoupanca (nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("Ju","34576584911","ju@email.com",100,200)

console.log(ju)
//aqui a gente acessa o prototype e incrementa o parâmetro "depositarPoup",pois queremos depositar na conta poupança um determinado valor
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(30)

console.log(`O seu saldo da poupança agora é ${ju.saldoPoup}`)