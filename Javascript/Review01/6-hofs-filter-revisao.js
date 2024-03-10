const objects = [{a: 1, b: 2, c: 3, d: 4, e: 5 }, {f: 1, g: 2, h: 3, i: 4, j: 5 }, {k: 1, l: 2, m: 3, n: 4, o: 5 }, {p: 1, q: 2, r: 3, s: 4, t: 5 }]

result = objects.filter(function (string, index, array) { 
    console.log({'essa é a string ou o objeto: ': string, 'o index é: ' :index, 'o array de objetos é:' :array}); 
    return string.k === 1 })

console.log('o resultado da filtragem é: ', result)

console.log('O resultado da filtragem desta forma é: ', objects.filter(function(string) { return string.k===1 }))