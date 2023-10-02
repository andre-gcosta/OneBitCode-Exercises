function sum(param, ...number) {
    return number.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2, 2, 2))
console.log(sum(12, 23, 32, 90, 57))