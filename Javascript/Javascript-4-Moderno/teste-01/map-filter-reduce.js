const media = (...valores) => {
    let somar = valores.reduce((accum, valor) => accum + valor, 0)
    return (somar/valores.length)
}

const mediaPonderada = (...valores) => {
    let somas = valores.reduce((accum, {valor, peso}) => accum + (valor * (peso??1)), 0)
    let pesos = valores.reduce((accum, {peso}) => accum + (peso??1), 0)
    return somas/pesos
}

const mediana = (...valores) => {
    const valoresOrdenados = [...valores].sort((a, b) => b - a)
    if ((valoresOrdenados.length-1)%2 == 0) {
        let indexMediana = [(valoresOrdenados.length-1)/2]
        return valoresOrdenados[indexMediana]
    } else {
        let indexMedianaMaior = [((valoresOrdenados.length-1)/2) + 0.5]
        let indexMedianaMenor = [((valoresOrdenados.length-1)/2) - 0.5]
        return media(valoresOrdenados[indexMedianaMaior], valoresOrdenados[indexMedianaMenor])
    }
}

const moda = (...valores) => {
    const quantidades = valores.map(valorAtual => [
        valorAtual,
        valores.filter(valorFiltrado => valorFiltrado === valorAtual).length
    ])
    quantidades.sort((a, b) => b[1] - a[1])
    return quantidades[0][0]
}

let resultadoMedia = media(1, 2, 3, 4)
let resultadoMediaPonderada = mediaPonderada({valor: 2}, {valor: 3}, {valor: 4, peso: 3})
let resultadoMediana = mediana(2, 5, 99, 4, 42, 7)
let resultadoModa = moda(1, 2, 3, 4, 4, 5, 6, 3, 3)