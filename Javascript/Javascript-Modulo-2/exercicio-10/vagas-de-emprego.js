const menu = '\n1- Listar vagas disponíveis' +
'\n2- Criar nova vaga' +
'\n3- Visualizar uma vaga' +
'\n4- Inscrever um candidato em uma vaga' +
'\n5- Excluir uma vaga' +
'\n6- Sair'

let vagas = []

function mostrarMenu(menu) {
    return prompt(menu)
}

let opcao = mostrarMenu(menu)

switch (opcao){
    case "1":
        listarVagas()
        break
    case "2":
        criarVaga(prompt('Nome da vaga:'), prompt('Descrição:'), prompt('Data limite:'))
        break
    case "3":
        break
    case "4":
        break
    case "5":
        break
    case "6":
        alert('Saindo...')
        break
    default:
        alert('Seleção inválida')
}

function listarVagas() {
    const vagasEmTexto = vagas.
}

function criarVaga(nome, descricao, data) {
    vagas.push({nome: nome, 'descricao': descricao, data: data})
}

console.log(vagas)