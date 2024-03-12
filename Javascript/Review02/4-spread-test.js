const array = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
const unSpread = (...array) => array
console.log(unSpread(array))
const unSpread2 = (...array) => [...array]
console.log(unSpread2(array))

const equal2 = (array) => [...array]
console.log(equal2(array))
const equal = ([...array]) => [...array]
console.log(equal(array))

const spread = ([[...array]]) => array
console.log(spread(array))
const spread2 = ([[...array]]) => [...array]
console.log(spread(array))