class Cliente{
    constructor(nome,cpf,email,saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
//o depositar/exibirSaldo abaixo chamam-se método
//método é uma função que executa no contexto do objeto

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}    
//como o ClientePoupanca está herando características do Cliente, a gente precisa chamar a atribuição "Super", para que essa nova classe consiga ir na anterior e pegar as atribuições já existentes    

class ClientePoupanca extends Cliente{
    constructor(nome,cpf,email,saldo,saldoPoup){
        super(nome,cpf,email,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoupanca(valor){
        this.saldoPoup =+ valor
    }
}

const felipe = new ClientePoupanca("Felipe","10279941722","felipe@email.com",0, 50)

console.log(felipe)

felipe.depositar(50)
felipe.depositarPoupanca(100)

console.log(felipe)