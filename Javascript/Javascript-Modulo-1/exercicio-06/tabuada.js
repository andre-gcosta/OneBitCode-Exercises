let numero = parseInt(prompt('Informe o número: '))
let resultados = ''
for (let fator = 1; fator <= 20; fator ++) {
    resultados += numero * fator
    resultados += '\n'
}
alert(resultados)