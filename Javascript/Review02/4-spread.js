const array = [4, 2, 8, 3, 1]
console.log(array)
console.log(...array)

// const copy = array
// copy.pop()
// copy.pop()
// copy.push(0)
// console.log(copy)
// console.log(array) //alterou o array

const cloneSpread = [...array] //não altera o array original com spread
cloneSpread.push(9)
console.log(cloneSpread)
console.log(array)