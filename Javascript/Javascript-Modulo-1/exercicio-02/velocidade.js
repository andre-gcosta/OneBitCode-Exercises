let veiculo1 = prompt('Insira o veículo 1: ')
let velocidade1 = prompt('Insira a velocidade do veículo 1: ')
let veiculo2 = prompt('Insira o veículo 2: ')
let velocidade2 = prompt('Insira a velocidade do veículo 2: ')
velocidade1 = parseFloat(velocidade1)
velocidade2 = parseFloat(velocidade2)

if (velocidade1 > velocidade2) {
    alert('O veículo ' + veiculo1 + ' é o mais rápido!')
}
else if (velocidade2 > velocidade1) {
    alert('O veículo ' + veiculo2 + ' é o mais rápido!')
}
else {
    alert('Empate!')
}