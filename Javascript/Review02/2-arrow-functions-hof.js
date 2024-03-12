const array = ['Prontera', 'Parati', 'Santos', 'Barcelona', 'Madrid', 'Parma', 'Paris']
const citiesWithP = array.filter(function(element) {return element[0]==='P'})
console.log(citiesWithP)
const citiesWithP2 = array.filter(element => element[0]==='P')
console.log(citiesWithP2)



const vacancies = [
    {name: 'pedreiro', namesRegistered: ["Alberto","Julio"]},
    {name: 'frentista', namesRegistered: ["Juliano","Carlos"]},
    {name: 'caixa', namesRegistered: ["Felipe","Julia"]},
    {name: 'zelador', namesRegistered: ["Roberto","Eli"]}
]
viewAllVacancies()
function viewAllVacancies() {
    const allVacancies = vacancies.reduce((accum, element, index) => { accum += 'Index: ' + index; accum += '\nNome: ' + element.name; accum += '\nCandidatos registrados: ' + (element.namesRegistered.length??0) + '\n\n'
    return accum }, 'Lista de vagas: \n\n')
    console.log(allVacancies)
}

const candidatesWithJ = vacancies.map(element => element.namesRegistered.filter(element => element[0]==='J'))
console.log(candidatesWithJ)

const candidatesWithJ2 = vacancies.map(element => element.namesRegistered.reduce((accum, element) => { if (element[0]==='J') { accum += element}; return accum },''))
const candidatesWithJ3 = candidatesWithJ2.filter(element => element.length>0)
console.log(candidatesWithJ2)
console.log(candidatesWithJ3)

const candidatesWithJText = candidatesWithJ3.reduce((accum, element) => accum + '- ' + element + ';\n', 'Candidatos com J:\n\n')
console.log(candidatesWithJText)