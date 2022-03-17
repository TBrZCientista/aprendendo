//vamos percorrer uma lista de objetos para descobrir dados específicos

const clientes = [{
        nome: "André",
        idade: 36,
        cpf: "19283928433",
        email: "andre@email.com",
        fones:["5512998765432","552136547656"],
        dependentes: [
            {
                nome: "Sara Silva",
                parentesco: "filha",
                dataNasc: "20/03/2011",
            },
            {
                nome:"Samia Maria",
                parentesco: "filha",
                dataNasc: "04/01/2014", 
            }],
        },    
        {
            nome: "Juliana",
            idade: 40,
            cpf: "98628346283",
            email: "juliana@email.com",
            fones:["552744938785","5527998087655"],
            dependentes: [
            {
                nome: "Sophia",
                parentesco: "filha",
                dataNasc: "30/08/2020",
            }],
        }    
]

// essa notação de 3 pontinhos dentro do array abaixo é chamada de operador de espalhamento
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)
//o table utilizado acima é para mostrar o resultado dentro de uma tabela