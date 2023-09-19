function areaDoTriangulo(base, altura) {
    const base = parseFloat(prompt("Informe a base do triângulo:"))
    const altura = parseFloat(prompt("Informe a altura do triângulo:"))
    return (base * altura) / 2
}
function areaDoRetângulo(base, altura) {
    const base = parseFloat(prompt("Base:"))
    const altura = parseFloat(prompt("Altura:"))
    return base * altura
}
function areaDoQuadrado(lado) {
    const lado = parseFloat(prompt("Lado"))
    return lado ** 2
}
function areaDoTrapezio(baseMaior, baseMenor, altura) {
    const baseMaior = parseFloat(prompt("Base maior:"))
    const baseMenor = parseFloat(prompt("Base menor:"))
    const altura = parseFloat(prompt("Altura:"))
    return (baseMaior + baseMenor) * altura / 2
}
function areaDoCirculo(raio) {
    const raio = parseFloat(prompt("Raio:"))
    return 3.14 * (raio ** 2)
}

function exibirMenu() {

    return prompt("Olá" +
    "\n\nSelecione uma opção de cálculo:" +
    "\n1) Área do triângulo" +
    "\n2) Área do retângulo" +
    "\n3) Área do quadrado" +
    "\n4) Área do trapézio" +
    "\n5) Área do círculo" +
    "\n6) Sair"
    )
}

function executar() {
    let opcao = ""
    do {
        opcao = exibirMenu()
        let resultado
        switch (opcao) {
            case '1':
                resultado = areaDoTriangulo()
                break
            case '2':
                resultado = areaDoRetângulo()
                break
            case '3':
                resultado = areaDoQuadrado()
                break
            case '4':
                resultado = areaDoTrapezio()
                break
            case '5':
                resultado = areaDoCirculo()
                break
            case '6':
                alert("Saindo...")
                break
            default:
                alert("Seleção incorreta")
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }

    } while (opcao !== "6")
}

executar()