const personagem = prompt('Insira o nome do seu personagem: ')
const poderDeAtaque = prompt('Insira o poder de ataque de ' + personagem + '.')
const inimigo = prompt('Insira o nome do inimigo do seu personagem')
let pontosDeVida = prompt('Pontos de vida de ' + inimigo + ':')
const poderDeDefesa = prompt('Poder de defesa de ' + inimigo + ':')
const escudo = prompt(inimigo + 'possui escudo? (sim ou nao)')
poderDeAtaque = parseFloat(poderDeAtaque)
pontosDeVida = parseFloat(pontosDeVida)
poderDeDefesa = parseFloat(poderDeDefesa)

let quantidadeDeDano = 0
if (poderDeAtaque > poderDeDefesa && escudo == 'nao') {
    quantidadeDeDano = poderDeAtaque - poderDeDefesa
} 
else if (poderDeAtaque > poderDeDefesa && escudo == 'sim') {
    quantidadeDeDano = (poderDeAtaque - poderDeDefesa)/2
}
else if (poderDeAtaque < poderDeDefesa) {
    quantidadeDeDano = 0
}
alert(
    '\nQuantidade de dano inflingido: ' + quantidadeDeDano +
    '\nVida do ' + inimigo + ': ' + (pontosDeVida -= quantidadeDeDano) +
    '\n\nSeus pontos de ataque: ' + poderDeAtaque +
    '\nPontos de defesa do inimigo: ' + poderDeDefesa +
    '\nEscudo do inimigo: ' + escudo
)