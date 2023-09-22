function exibirMenu() {
    const opcao = prompt(
    '\n1- Listar vagas disponíveis' +
    '\n2- Criar nova vaga' +
    '\n3- Visualizar uma vaga' +
    '\n4- Inscrever um candidato em uma vaga' +
    '\n5- Excluir uma vaga' +
    '\n6- Sair'
    )
    return opcao
}

let vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (acumulado, vaga, indice) {
        acumulado += indice + '. ' + vaga.nome
        acumulado += '\n\nDescrição: ' + vaga.descricao
        acumulado += '\nData limite: ' + vaga.data
        acumulado += '\n\nQuantidade de inscritos: ' + vaga.candidatos.length
        acumulado += '\nInscritos: ' + vaga.candidatos
        return acumulado
    }, '')
    alert(vagasEmTexto)
}

function criarVaga() {
    const nome = prompt('Nome da vaga: ')
    const descricao = prompt('Descrição da vaga: ')
    const dataLimite = prompt('Data limite: ')
    const confirmacao = confirm('Deseja confirmar a criação da vaga ' + nome + '?\n' +
    'Descrição: ' + descricao + '\nData limite: ' + dataLimite)
    if (confirmacao) {
        return vagas.push({nome, descricao, dataLimite, candidatos: []})
    }
}

function exibirVaga() {
    const indice = prompt('Indice da vaga: ')
    if (indice >= vagas.length || indice < 0) {
        alert('indice invalido')
        return
    }
    const vaga = vagas[indice]
    const candidatos = vaga.candidatos.reduce(function (acumulado, candidato) {
        acumulado += '\n- ' + candidato
        return acumulado 
    }, '')
    alert(indice + '. ' + vaga.nome +
    '\nDescrição : ' + vaga.descricao +
    '\nData limite: ' + vaga.dataLimite +
    '\n\nQuantidade de candidatos: ' + vaga.candidatos.length +
    '\nCandidatos: ' + candidatos 

    )
}

function criarCandidato() {
    const nome = prompt('Nome do candidato: ')
    const indice = prompt('Indice da vaga: ')
    if (indice >= vagas.length || indice < 0) {
        alert('indice invalido')
        return
    }
    const vaga = vagas[indice]
    confirmacao = confirm('Deseja criar o candidato ' + nome + ' para a vaga ' + vaga.nome + '?\n\n'
    + indice + '. ' + vaga.nome +
    '\nDescrição: ' + vaga.descricao +
    '\nData limite: ' + vaga.dataLimite
    )
    if (confirmacao) {
        vaga.candidatos.push(nome)
        alert('Candidato criado')
    }
}

function excluirVaga() {
    const indice = prompt ('Informe o índice da vaga: ')
    if (indice >= vagas.length || indice < 0) {
        alert('indice invalido')
        return
    }
    const vaga = vagas[indice]
    alert(indice + vaga.nome + vaga.descricao + vaga.dataLimite)
    confirmacao = confirm('Tem certeza que deseja excluir a vaga ' + vaga.nome + '?')
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert('vaga excluída com sucesso')
    }

}


do { opcao = exibirMenu()
switch (opcao) {
    case "1":
        listarVagas()
        break
    case "2":
        criarVaga()
        break
    case "3":
        exibirVaga()
        break
    case "4":
        criarCandidato()
        break
    case "5":
        excluirVaga()
        break
    case "6":
        alert('Saindo...')
        break
    default:
        alert('Seleção inválida')
}

} while (opcao !== '6')