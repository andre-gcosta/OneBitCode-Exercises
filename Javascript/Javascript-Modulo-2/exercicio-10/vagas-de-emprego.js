vagas = []

function mostrarMenu() {
    return prompt("Vagas de Emprego" +
    "\n\n1- Listar todas as vagas" +
    "\n2- Criar nova vaga de emprego" +
    "\n3- Visualizar uma vaga" +
    "\n4- Inscrever um candidato em uma vaga" +
    "\n5- Excluir uma vaga" +
    "\n6- Sair"
    )
}

function listarVagas(vagas) {
    let nomes = vagas.map(function (vaga) {
        return vaga.nome
    })
    nomes.foreach(function (elemento, indice, array) {
        alert({elemento, indice, array})
    })
}

function criarVaga(vagas) {
    nome = prompt("Nome da vaga:")
    descricao = prompt("Descrição da vaga:")
    data = prompt("Data limite:")
    vaga = {
        nome: nome,
        descricao: descricao,
        data: data
    }
    if (confirm("Confirmar a criação da vaga " + vaga.nome + "?")) {
        vagas.append(vaga)
    }
}

function executar() {
    do {
        opcao = mostrarMenu()
        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                criarVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Seleção inválida")
        }
    } while (opcao !== "6")
}

executar()