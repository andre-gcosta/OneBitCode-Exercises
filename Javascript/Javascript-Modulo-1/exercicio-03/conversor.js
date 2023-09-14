let valorEmMetros = parseFloat(prompt('Digite o valor em metros: '))
let unidadeDeMedida = parseInt(prompt('Selecione a unidade de medida desejada: ' +
    '\n1) milímetro (mm)' +
    '\n2) centímetro (cm)' +
    '\n3) decímetro (dm)' +
    '\n4) decâmetro (dam)' +
    '\n6) hectômetro (hm)' +
    '\n6) quilômetro (km)'
))
let valor = 0
switch (unidadeDeMedida) {
    case 1:
        valor = valorEmMetros * 1000 + ' milímetros'
        break
    case 2:
        valor = valorEmMetros * 100 + ' centímetros'
        break
    case 3:
        valor = valorEmMetros * 10 + ' decímetros'
        break
    case 4:
        valor = valorEmMetros / 10 + ' decâmetros'
        break
    case 5:
        valor = valorEmMetros / 100 + ' ectômetros'
        break
    case 6:
        valor = valorEmMetros / 1000 + ' quilômetros'
        break
    default:
        valor = ('Seleção incorreta')
}   alert(valor)