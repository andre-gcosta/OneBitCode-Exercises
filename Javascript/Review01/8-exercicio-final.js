vacancies = []

function viewAllVacancies() {
    const allVacancies = vacancies.reduce(function(accum, element, index) {
        accum += 'Index: ' + index
        accum += '\nNome: ' + element.name
        accum += '\nCandidatos registrados: ' + (element.namesRegistered.length??0) + '\n\n'
        return accum
    }, 'Lista de vagas: \n\n')
    window.alert(allVacancies)
}

function createNewVacancy (name, description, limitDate) {
    const vacancy = {
        name: name,
        description: description,
        limitDate: limitDate,
        namesRegistered: []
    }
    const confirm = window.prompt('Deseja criar a vaga ' + name + '?\n\nDescrição: ' + description + '\nData limite: ' + limitDate + '\n\nDigite "Sim".')
    if (confirm == "Sim") {
        vacancies.push(vacancy)
        window.alert("Vaga adicionada com sucesso!")}
    else {window.alert("Vaga cancelada.")}
}

function deleteVacancy() {
    const vacancyIndex = window.prompt('Digite o index da vaga: ')
    if (vacancies[vacancyIndex]) {
        const confirm = window.prompt('Confirma? (Sim)')
        if (confirm == "Sim") {
            vacancies.splice(vacancyIndex, 1)
            window.alert("Deletado com sucesso")
        } else {window.alert("Operação cancelada")}
    } else {window.alert("A vaga digitada não foi encontrada. Tente novamente")}
}

function viewVacancy() {
    const vacancyIndex = window.prompt('Digite o index da vaga: ')
    if (vacancies[vacancyIndex]) {
        const name = vacancies[vacancyIndex].name
        const description = vacancies[vacancyIndex].description
        const limitDate = vacancies[vacancyIndex].limitDate
        const namesRegistered = vacancies[vacancyIndex].namesRegistered
        const registered = vacancies[vacancyIndex].namesRegistered.length??0
        const allRegistered = namesRegistered.reduce(function(accum, element) {return accum + '-' + element + '\n'}, '')
        window.alert('Index: ' + vacancyIndex + '\nNome da vaga: ' + name + '\nDescrição da vaga: ' + description + '\nData limite: ' + limitDate + '\n\nCandidatos cadastrados: ' +
        registered + '\nNome dos candidatos:\n' + allRegistered
        )
    } else {window.alert("A vaga digitada não foi encontrada. Tente novamente")}
}

function newCandidate() {
    const name = window.prompt('Digite o nome do candidato: ')
    const vacancyIndex = window.prompt('Digite o index da vaga: ')
    if (vacancies[vacancyIndex]) {
        const confirm = window.prompt('Você deseja adicionar ' + name + ' à vaga de ' + vacancies[vacancyIndex].name + ' (Index: ' + vacancyIndex + ')? \nDigite "Sim"')
        if (confirm == "Sim") {
            vacancies[vacancyIndex].namesRegistered.push(name)
            window.alert("Candidato registrado com sucesso!")
        } else {window.alert("Operação cancelada")}
    } else {window.alert("A vaga digitada não foi encontrada. Tente novamente")}
}

function mainProgram() {
    const selectOption = window.prompt('Menu: \n\n1-Listar vagas disponíveis \n2-Criar nova vaga \n3-Visualizar uma vaga \n4-Inscrever um candidato em uma vaga \n5-Excluir uma vaga \n6-Sair')
    switch (selectOption) {
        case '1': {viewAllVacancies(); break;}
        case '2': {
            const name = window.prompt('Digite o nome da vaga')
            const description = window.prompt('Digite a descrição da vaga')
            const limitDate = window.prompt('Digite a data limite da vaga')
            createNewVacancy(name, description, limitDate)
            break
        }
        case '3': {viewVacancy(); break;}
        case '4': {newCandidate(); break;}
        case '5': {deleteVacancy(); break;}
        case '6': {return selectedOption;}
    }
        
}

while (true) {
    prog = mainProgram()

}