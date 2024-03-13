const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

const nomes = []
for (let i = 0; i < personagens.length; i++) { nomes.push(personagens[i].nome) }
// console.log(nomes)

const nomes2 = personagens.map(function (personagem) {return personagem.nome})
// console.log(nomes2)

const orcs = []
for (let i = 0; i < personagens.length; i++) { if (personagens[i].raca === "Orc") { orcs.push(personagens[i]) } }
console.log(orcs)

const orcs2 = personagens.filter(function (personagem) { return personagem.raca === "Orc" })
console.log(orcs2)

let nivelTotal = 0
for (let i=0; i < personagens.length; i++) { nivelTotal += personagens[i].nivel }
// console.log(nivelTotal)

const nivelTotal2 = personagens.reduce(function(accum, personagem) { return accum + personagem.nivel}, 0)
// console.log(nivelTotal2)



const racas = personagens.reduce(function (accum, personagem) {if (accum[personagem.raca]) {accum[personagem.raca].push(personagem)} else {accum[personagem.raca] = [personagem]} return accum}, {})
// console.log(racas)