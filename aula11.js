// calculando media com forEach

const notas = [10, 6.5, 8 , 7.5]

let somaDasNotas = 0

// o forEach é uma função callback, é uma função que chama de volta outra função. o forEach faz a busca no índice do array sem ter a declaração solicitada na função

notas.forEach(nota =>{
    somaDasNotas += nota;
})

let media = somaDasNotas/notas.length

console.log(`A media das notas é ${media}`)