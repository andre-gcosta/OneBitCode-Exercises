let saldo = parseFloat(prompt ('Qual a quantia de dinheiro inicial disponível?'))
let opcao = ''
do {
    opcao = prompt('Seu dinheiro: ' + saldo + '\n\n1) Adicionar' + '\n2) Remover' + '\n3) Sair')
    if (opcao == 1){
        saldo += parseFloat(prompt('Digite o valor à ser adicionado: '))
    }
    else if (opcao == 2){
        saldo -= parseFloat(prompt('Digite o valor à ser resgatado: '))
    }
} while (opcao != 3)