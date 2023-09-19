function soma(a, b) {
    return a + b
}

let operacao = soma
console.log(operacao(4, 5))

operacao = function (a, b) {
    return a - b
}

console.log(operacao(36, 13))



olaMundo()
oiMundo()

function olaMundo() {
    console.log("Olá, mundo!")
}

const oiMundo = function () {
    console.log("Oi, mundo")
}