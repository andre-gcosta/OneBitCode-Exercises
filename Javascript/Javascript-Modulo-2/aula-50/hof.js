function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma.")
    return x + y
}

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento, 
        indice, 
        array
    })
}

calcular()