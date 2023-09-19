
const imoveis = []
let opcao = ""
do {
    opcao = prompt("Quantidade de imóveis cadastrados: " + imoveis.length +
    "\n\n1) Cadastrar novo imóvel" +
    "\n2) Mostrar todos os imóveis salvos" +
    "\n3) Sair")
    switch (opcao) {
        case '1':
            const imovel = {}
            imovel.proprietario = prompt("Nome do proprietário: ")
            imovel.quartos = prompt("Quantidade de quartos: ")
            imovel.banheiros = prompt("Quantidade de banheiros: ")
            imovel.garagem = prompt("Possui garagem? (Sim/Não) ")
            const confirmacao = confirm (
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem? " + imovel.garagem
            )
            if (confirmacao){
                imoveis.push(imovel)
            }
            break
        case '2':
            for (i = 0; i < imoveis.length; i ++) {
                alert("Imóvel " + (i+1) +
                "\n\nProprietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos +
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nPossui garagem: " + imoveis[i].garagem 
                ) 
            }
            break
        case '3':
            alert('Saindo...')
            break
        }
    } while (opcao !== "3")