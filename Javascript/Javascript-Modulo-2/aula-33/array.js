const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar elementos

let tamanho = arr.push("Boromir")
arr.push("Boromir")
arr.push("Boromir")
console.log(tamanho)

tamanho = arr.unshift("Boromir")
console.log(tamanho)

//Remover elementos

let ultimoElemento = arr.pop()

console.log(arr)
console.log(ultimoElemento)

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Pesquisar por um Elemento

const inclui = arr.includes("Gandalf")
console.log(inclui)

const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar e concatenar
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-6)
console.log(arr)
console.log(hobbits)
console.log(outros)

const sociedade = hobbits.concat(outros, "Frodo")
console.log(sociedade)

//Substituição dos elementos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os elementos do Array
for (let indice = 0; indice < sociedade.length; indice ++) {
    const elemento = sociedade[indice]
    console.log(elemento + ' se encontra na posição ' + indice)
}