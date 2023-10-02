function normalSum(a, b) {
    return a + b
}
console.log(`Soma normal: ${normalSum(2, 2)}`)

const anonymousSum = function(a, b) {
    return a + b
}
console.log(`Soma anônima: ${anonymousSum(2, 2)}`)

const sum = (a, b) => {
    return a + b
}

console.log(`Soma arrow function: ${sum(2, 2)}`)

const multiply = (a, b) => {
    return a * b
}

console.log(`Multiplicação ${multiply(2, 2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21
console.log(`Dobro: ${double(number)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen']
const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)