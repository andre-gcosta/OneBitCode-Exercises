const numbers = [0, 1, 2, 3, 4, 5]

function soma(...numbers) {
    return numbers.reduce((accum, element) => accum + element, 0)
}

console.log(soma(1,1,2,3))


function soma2(param, ...numbers) {
    return numbers.reduce((accum, element) => accum + element, 0)
}

console.log(soma2(1,1,2,3))