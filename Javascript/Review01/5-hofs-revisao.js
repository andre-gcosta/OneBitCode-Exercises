//Criando um objeto à partir de uma lista com Hof

lista = ['a', 'b', 'c', 'd', 'e']

for (let i = 0; i < lista.length; i++) { exibirElemento(lista[i], i, lista) }

function exibirElemento(elemento, indice, array) { console.log({ elemento, indice, array }) }

lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array) { console.log({elemento, indice, array}) })