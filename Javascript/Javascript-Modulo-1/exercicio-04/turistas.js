let turista = prompt('Olá turista! Digite o seu nome: ')
let cidades = ''
let visitouCidades
let numeroDeCidades = 0
while (true) {
    visitouCidades = prompt(turista + ', você já visitou alguma cidade? (Sim/Não)')
    if (visitouCidades == "Sim") {
        cidades += prompt("Qual cidade você já visitou?")
        cidades += ', '
        numeroDeCidades ++
    }
    else if (visitouCidades == "Não") {
        let slice = cidades.slice(0, -2)
        cidades = slice
        cidades += '.'
        break
    }
}
alert('Nome do turista: ' + turista +
'\nCidades: ' + cidades +
'\nTotal: ' + numeroDeCidades + ' cidades.'
)