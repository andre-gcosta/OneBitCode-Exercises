function calcular(a, b, operacao) {
    return operacao(a, b)
}

function somar(x, y) {
    return x + y
}

function diminuir (x, y) {
    return x - y
}

function multiplicar(x, y) {
    return x * y
}

function dividir(x, y) {
    return x / y
}

console.log(calcular(9, 4, diminuir))

console.log(calcular(9, 4, function (x, y) {
    return x - y
}))