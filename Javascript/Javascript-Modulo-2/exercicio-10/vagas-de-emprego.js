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



function listarVagas() {
    const vagasEmTexto = vagas.reduce( function (acumulado, value, index) {
        acumulado += index + ". "
        acumulado += value.nome
        acumulado += " (" + value.candidatos.length + " candidatos)\n"
        return acumulado}, "")
    alert(vagasEmTexto)
}

function criarVaga() {
    const nome = prompt('Nome da vaga:')
    const descricao = prompt('Descrição:')
    const data = prompt('Data limite (dd/mm/aaaa):')
    const confirmacao = confirm("Deseja criar uma nova vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + data)
    if (confirmacao){
        const novaVaga = {nome, descricao, data, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function visualizarVaga() {
    const indice = prompt('Digite o índice da vaga:')
    if (indice >= vagas.length || indice < 0) {
        alert("Vaga inexistente (índice inválido)")
        return
    }
    const vaga = vagas[indice]
    const candidatosEmTexto = vaga.candidatos.reduce(function (acumulado, value) {
        return acumulado + "\n - " + value
    }, '')
    alert(
        indice + ". " +
        "Nome da vaga: " + vaga.nome +
        "\nDescrição da vaga: " + vaga.descricao +
        "\nData limite: " + vaga.data +
        "\n\nCandidatos inscritos: " + vaga.candidatos.length +
        "\nNome dos candidatos: " + candidatosEmTexto
    )
}

function criarCandidato() {
    const candidato = prompt('Nome do candidato:')
    const indice = prompt('Indice da vaga:')
    if (indice >= vagas.length || indice < 0) {
        alert("Vaga inexistente (índice inválido)")
        return
    }
    const vaga = vagas[indice]
    // const vaga = vagas.map(function (value, index) {if (index === indice) {return value[index].nome}})
    console.log(vaga)
    //nome da vaga, descricao, data
    const confirmacao = confirm('Deseja salvar o candidato' + candidato + ' na vaga' + indice + '?\n' +
    "Nome: " + vaga.nome + "\n Descrição: " + vaga.descricao + "\nData limite: " + vaga.data
    )
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt('Indice da vaga:')
    if (indice >= vagas.length || indice < 0) {
        alert("Vaga inexistente (índice inválido)")
        return
    }
    const vaga = vagas[indice]
    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.data
    )
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
    //pedir indice da vaga
    //mostrar informacoes
    //pedir confirmacao para excluir
}

let opcao = ''

do { opcao = mostrarMenu(menu) 
    switch (opcao){
    case "1":
        listarVagas()
        break
    case "2":
        criarVaga()
        break
    case "3":
        visualizarVaga()
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
} } while (opcao !== "6")