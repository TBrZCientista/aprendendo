// media com for

const notas = [10, 6.5, 8, 7.5]

// o somaDasNotas = 0 é pra não interferir no valor final da soma

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

//para tirar a media se soma tudo e divide pela quantidade de itens somados

let media = somaDasNotas/notas.length
//          template String 
console.log(`A média das notas é: ${media}`)