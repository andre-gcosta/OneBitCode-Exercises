const array = ['a', 'b', 'c', 'd', 'e']

result = array.map(function (string, i, array) { return array[i + 1]})
console.log(result)

function selection (string, i, array) {
    return array[i+1]
}

console.log(array.map(selection))

const objects = [{a: 1, b: 2, c: 3, d: 4, e: 5 }, {f: 1, g: 2, h: 3, i: 4, j: 5 }, {k: 1, l: 2, l: 3, n: 4, o: 5 }, {p: 1, q: 2, r: 3, s: 4, t: 5 }]

result = objects.map(function (string, index, objects) { console.log({'essa é a string ou o objeto: ': string, 'o index é: ' :index, 'o array de objetos é:' :objects}); return objects[index + 1] })
console.log(result)