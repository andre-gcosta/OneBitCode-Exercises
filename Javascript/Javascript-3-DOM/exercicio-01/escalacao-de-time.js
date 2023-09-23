function escalar() {
    const posicao = document.getElementById('posicao-jogador').value
    const nome = document.getElementById('nome-jogador').value
    const camisa = document.getElementById('camisa-jogador').value
    if (!(posicao && nome && camisa)) {
        alert('Digite a posição, nome e número do jogador.')
        return
    }

    const listaJogadores = document.getElementById('lista-jogadores')
    const novoJogador = document.createElement('li')
    novoJogador.id = 'id' + camisa
    novoJogador.innerText = camisa + ' - ' + nome + ' - (Posição: ' + posicao + ')'
    listaJogadores.appendChild(novoJogador)

    document.getElementById('posicao-jogador').value = ''
    document.getElementById('nome-jogador').value = ''
    document.getElementById('camisa-jogador').value = ''
}

function remover() {
    const idJogador = document.querySelector('#remover-jogador > li > #camisa-jogador').value
    if (!(idJogador)) {
        alert('Digite a camisa do jogador para remover.')
        return
    }
    const jogador = document.querySelector(`#lista-jogadores > #id${idJogador}`)
    console.log(jogador)
    if (!jogador) {
        alert('A camisa digitada não foi escalada.')
        return
    }
    jogador.remove()
    document.querySelector('#remover-jogador > li > #camisa-jogador').value = ''
}
