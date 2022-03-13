//Observar a media de 3 salas, e tirar a media geral das salas(somando com reduce)

const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPyton = [7, 3.5, 8, 9.5]

function mediaDaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum,atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`A média da sala de Java Script é ${mediaDaSala(salaJs)}`)
console.log(`A média da sala de Java  é ${mediaDaSala(salaJava)}`)
console.log(`A média da sala de Pyton é ${mediaDaSala(salaPyton)}`)