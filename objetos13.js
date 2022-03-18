//criando uma nova classe
//a gente utiliza o constructor dentro da classe e dis o que a gente quer que ele receba dentro do parênteses

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

const felipe = new Cliente("Felipe","10279941722","felipefreitasdaschagas@hotmail.com", 0)

console.log(felipe)
felipe.exibirSaldo()