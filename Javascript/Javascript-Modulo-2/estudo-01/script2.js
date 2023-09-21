function exibirElemento(elemento, indice, array) {
    console.log({
        elemento, indice, array
    })
}

// const lista = ["maça", 'banana', 'laranja']
// // FOR EACH
// for (let i = 0; i < lista.length; i++) {
//     exibirElemento(lista[i], i, lista)
// }


// const lista = ["maça", "banana", "laranja"]
// lista.forEach(exibirElemento)


const lista = ["maça", "banana", "laranja"]
lista.forEach(function (elemento, indice, array) { console.log({elemento, indice, array})})