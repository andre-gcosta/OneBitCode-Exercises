const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

const nomes = personagens.map(function (value) { return value.nome})

const racaOrc = personagens.filter(function (value) { return value.raca === "Orc" })

const niveisSoma = personagens.reduce(function (acumulado, value) {return acumulado + value.nivel}, -200)


const objetoRaca = personagens.reduce(function (acumulado, value) {
  if (acumulado[value.raca]) {acumulado[value.raca].push(value)}
  else {acumulado[value.raca] = [value]}
  return acumulado
}, {})

console.log(nomes)
console.log(racaOrc)
console.log(niveisSoma)
console.log(objetoRaca)