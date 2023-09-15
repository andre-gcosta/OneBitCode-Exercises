let palavra = prompt('Digite uma palavra: ')
let reverso = ''
for (let indice = palavra.length - 1; indice >= 0; indice --) {
    reverso += palavra[indice]
}
if (reverso == palavra) {
    alert("É um palíndromo")
}
else if (reverso != palavra) {
    alert(reverso)
}