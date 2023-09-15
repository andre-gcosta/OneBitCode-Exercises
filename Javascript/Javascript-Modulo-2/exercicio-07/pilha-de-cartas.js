let opcao = ''
let baralho = []
do {
    opcao = prompt(
        "Cartas no baralho: " + (baralho) +
        "\n\n1) Adicionar uma carta" +
        "\n2) Puxar uma carta" +
        "\n3) Sair"
    )
    switch (opcao) {
        case '1':
            baralho.unshift(prompt("Nome da carta: "))
            break
        case '2':
            if (baralho[0] != undefined) {
                baralho.shift(alert("Carta " + baralho[0] + " puxada"))
            }
            else {
                alert('Não há cartas para puxar.')
            }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Seleção Incorreta')
    }
} while (opcao !== '3')