//imprimindo indice e lista (conhecendo o "for"), laço de repetição

const numeros = [100, 200, 300, 400, 500, 600]

// no parâmetro do "for" o primeiro é a declaração da variável, o segundo é a condição de execução, e o terceiro foi a soma de +1 no valor original da variável declarada. Enquanto o valor da variável estiver dentro da condição imposta a função continuará sendo executada
for (let i = 0; i < numeros.length; i++){
    console.log(i, numeros[i])
}

//primeira exibição do console é o valor do let, no caso o "i", e o segundo é o indice do array "numeros"