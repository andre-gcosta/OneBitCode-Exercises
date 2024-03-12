const vacancies = [
    {name: 'pedreiro', namesRegistered: ["Alberto","Julio"]},
    {name: 'frentista', namesRegistered: ["Juliano","Carlos"]},
    {name: 'caixa', namesRegistered: ["Felipe","Julia"]},
    {name: 'zelador', namesRegistered: ["Roberto","Eli"]}
]


const names = vacancies.map(( element ) => {return element.name})
const names2 = vacancies.map(( element ) => {const { name } = element; return name})
console.log(names)


const array = ['Prontera', 'Parati', 'Santos', 'Barcelona', 'Madrid', 'Parma', 'Paris']
const cities = ([ prontera, parati ]) => {return [prontera, parati] }
console.log(cities(array))