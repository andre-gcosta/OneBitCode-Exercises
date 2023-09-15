let menu = ''
let pacientes = []
do {
    menu = prompt("Fila em espera para a consulta com o médico:\n" + pacientes +
    "\n\n1- Cadastrar novo paciente" +
    "\n2- Consultar paciente" +
    "\n3- Sair"
    )
    switch (menu) {
        case '1':
            pacientes.push(prompt("Digite o nome do paciente: "))
            break
        case '2':
            if (pacientes[0] != undefined) {
                pacientes.shift(alert("Paciente " + pacientes[0] + " consultado."))
            }
            else {
                alert('Não há pacientes.')
            }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Seleção Incorreta')
    }
} while (menu !== '3')