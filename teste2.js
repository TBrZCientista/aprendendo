//conhecendo o que acontece numa array vazia

//const arrayVazia = [];

//console.log(arrayVazia)
//console.log(arrayVazia.length)

//apresentou o resultado [] e 0. pois não tem nada no array

//const arrayVazia = [];
//console.log(arrayVazia[0])

// apresentou o resultado "undefined", pois não tem nada no array e no log tentou acessar algo que não foi definido

//const arrayVazia = [,,,];
//console.log(arrayVazia.length)
//console.log(arrayVazia[0])
//console.log(arrayVazia[1])
//console.log(arrayVazia[2])

// apresentou o resultado 3, que é o tamanho do array criado. E depois três "undefined" foi o array não tem nada definido, os índices estão sem nada.

const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)

//acima temos o array esparso, tem espaços vazios e um só item colocado no array. Ele começou sem nada igual aos outros, mas foi adicionado com o "push" o 50 ao final do array. No final o array aumentou para 4 o seu tamanho.