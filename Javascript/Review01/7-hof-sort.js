const objectsArray = [{a: 1, b: 2, c: 3, d: 4, e: 5 , id: 5 }, {f: 1, g: 2, h: 3, i: 4, j: 5, id: 2 }, {k: 1, l: 2, m: 3, n: 4, o: 5, id: 2 , id: 3 }, {p: 1, q: 2, r: 3, s: 4, t: 5, a: 6, id: 4 }]

//altera o array original
objectsArray.sort(function(firstNumber, secondNumber) {return secondNumber.id - firstNumber.id})//Ordem decrescente
objectsArray.sort(function(firstNumber, secondNumber) {return firstNumber.id - secondNumber.id})//Ordem crescente
console.log(objectsArray)


const array = [0, 7, 3, 4, 5, 3 ,2]
array.sort(function(firstNumber, secondNumber) {return firstNumber - secondNumber})
console.log(array)

//sem alterar o array com slice:
const orderedArray = array.slice().sort(/*function(a, b) {return a - b}*/)
console.log(orderedArray)