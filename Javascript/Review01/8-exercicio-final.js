vacancies = []

function viewAllVacancies() {
    const allVacancies = vacancies.map(function(element, index) {
        let name = element.name
        let registered = element.registered
        return 'Index: ' + index + '\nNome: ' + name + '\nCandidatos registrados: ' + registered + '\n\n'
    })
    window.alert('Lista de vagas: ' + '\n\n' + allVacancies)
}

function createNewVacancy (name, description, limitDate) {
    const vacancy = {
        name: name,
        description: description,
        limitDate: limitDate,
        registered: 0,
        namesRegistered: []
    }
    const confirm = window.prompt('Deseja criar a vaga ' + name + '?\n\nDescrição: ' + description + '\nData limite: ' + limitDate + '\n\nDigite "Sim".')
    if (confirm == "Sim") {
        vacancies.push(vacancy)
        window.alert("Vaga adicionada com sucesso!")}
    else {window.alert("Vaga cancelada.")}
}

function deleteVacancy() {
    let vacancyIndex = window.prompt('Digite o index da vaga: ')
    if (vacancies[vacancyIndex]) {
        const confirm = window.prompt('Confirma? (Sim)')
        if (confirm == "Sim") {
            vacancies.splice(vacancyIndex, 1)
            window.alert("Deletado com sucesso")
        } else {window.alert("Operação cancelada")}
    } else {window.alert("A vaga digitada não foi encontrada. Tente novamente")}
}

function viewVacancy() {
    let vacancyIndex = window.prompt('Digite o index da vaga: ')
    if (vacancies[vacancyIndex]) {
        let name = vacancies[vacancyIndex].name
        let description = vacancies[vacancyIndex].description
        let limitDate = vacancies[vacancyIndex].limitDate
        let registered = vacancies[vacancyIndex].registered
        let namesRegisteredString= ''
        let arrayToString = vacancies[vacancyIndex].namesRegistered.forEach(function(element, index, array) {
            namesRegisteredString += '-' + element + '\n'
        });
        window.alert('Index: ' + vacancyIndex + '\nNome da vaga: ' + name + '\nDescrição da vaga: ' + description + '\nData limite: ' + limitDate + '\n\nCandidatos cadastrados: ' +
        registered + '\nNome dos candidatos:\n' + namesRegisteredString
        )
    } else {window.alert("A vaga digitada não foi encontrada. Tente novamente")}
}

function newCandidate() {
    let name = window.prompt('Digite o nome do candidato: ')
    let vacancyIndex = window.prompt('Digite o index da vaga: ')
    if (vacancies[vacancyIndex]) {
        const confirm = window.prompt('Você deseja adicionar ' + name + ' à vaga de ' + vacancies[vacancyIndex].name + ' (Index: ' + vacancyIndex + ')? \nDigite "Sim"')
        if (confirm == "Sim") {
            vacancies[vacancyIndex].namesRegistered.push(name)
            vacancies[vacancyIndex].registered = vacancies[vacancyIndex].namesRegistered.length
            window.alert("Candidato registrado com sucesso!")
        } else {window.alert("Operação cancelada")}
    } else {window.alert("A vaga digitada não foi encontrada. Tente novamente")}
}

function mainProgram() {
    let selectOption = window.prompt('Menu: \n\n1-Listar vagas disponíveis \n2-Criar nova vaga \n3-Visualizar uma vaga \n4-Inscrever um candidato em uma vaga \n5-Excluir uma vaga \n6-Sair')
    switch (selectOption) {
        case '1': {viewAllVacancies(); break;}
        case '2': {
            let name = window.prompt('Digite o nome da vaga')
            let description = window.prompt('Digite a descrição da vaga')
            let limitDate = window.prompt('Digite a data limite da vaga')
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