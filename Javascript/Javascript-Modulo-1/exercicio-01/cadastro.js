let primeiroNome = window.prompt("Insira o seu primeiro nome: ")
let sobrenome = window.prompt("Insira o seu sobrenome: ")
let campoDeEstudo = window.prompt("Qual o seu campo de estudo? ")
let anoDeNascimento = window.prompt("Qual o seu ano de nascimento? ")
idade = 2023 - anoDeNascimento
alert(
    "Recruta cadastrado com sucesso!\n" +
    '\nNome completo: ' + primeiroNome + ' ' + sobrenome +
    '\nCampo de estudo: ' + campoDeEstudo +
    '\nIdade: ' + idade
)