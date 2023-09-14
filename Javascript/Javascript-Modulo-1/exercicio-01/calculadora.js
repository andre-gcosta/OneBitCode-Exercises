let valor1 = window.prompt("Insira o primeiro valor: ")
let valor2 = window.prompt("Insira o segundo valor: ")
valor1 = parseFloat(valor1)
valor2 = parseFloat(valor2)
window.alert(
    'Resultados: \n' +
    '\nSoma = ' + (valor1 + valor2) +
    '\nSubtração = ' + (valor1 - valor2) +
    '\nMultiplicação = ' + (valor1 * valor2) +
    '\nDivisão = ' + (valor1 / valor2)
)