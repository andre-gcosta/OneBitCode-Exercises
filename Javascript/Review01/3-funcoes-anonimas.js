const somar = function(a, b){//não é carregada no começo
    return a + b
}

console.log(somar(4, 5))
console.log(diminuir(5, 4))

function diminuir(a, b) {// é carregada no começo
    return a - b
}