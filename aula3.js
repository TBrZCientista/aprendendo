//deletando uma nota do array lançada errada 

const notas = [10, 6, 8, 5.5, 10]
notas.pop()
console.log(notas)


let media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length

console.log(`A sua média é ${media}`)