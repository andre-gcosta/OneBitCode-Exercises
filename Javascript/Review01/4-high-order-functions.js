function calcular(a, b, operacao) {
    return operacao(a, b)
}
function somar (a, b) {
    return a + b
}

console.log(calcular(5, 5, somar))
console.log(calcular(4, 3, function (a, b) { return a - b }))