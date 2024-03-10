const objects = [{a: 1, b: 2, c: 3, d: 4, e: 5 }, {f: 1, g: 2, h: 3, i: 4, j: 5 }, {k: 1, l: 2, m: 3, n: 4, o: 5 }, {p: 1, q: 2, r: 3, s: 4, t: 5, a: 6}]

const initialValue=0
result = objects.reduce(function (previousReturn, string, index, array) {console.log('object: ', string); return previousReturn + (string.a? string.a : 0)}, initialValue)
console.log('result = ', result)

const soma = objects.reduce(function(accum, string, index, array) {return accum + (string.a??0)}, 0)
console.log(soma)





const as = objects.reduce(function (previousReturn, string, index, array) { if(previousReturn[string.a]) { previousReturn[string.a].push(string) } else {previousReturn[string.a] = [string]} console.log(previousReturn); return previousReturn}, {})
console.log(as)

const soma2 = objects.reduce(function(accum, string, index, array) {let lista = Object.values(string); return accum + (index == 1? lista.reduce(function(accum, string, index, array){return accum + string}, 0) : 0)}, 0)
console.log(soma2)