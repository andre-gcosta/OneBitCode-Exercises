const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`Média Aritmética Simples: ${average(3, 6, 9, 10)}`)

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + (number * weight ?? 1), 0)
    const weightSum = entries.reduce((accum, entry) => accum + entry.weight ?? 1, 0)
    return sum / weightSum
}

console.log(`Média Ponderada: ${weightedAverage(
    {number: 9, weight: 3},
    {number: 7},
    {number: 10},
)}`)

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(5, 7, 2, 3,8,10,11,15,9,2,3,4,5,7,9,10,12,14,18)}`)

const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}
console.log(`Moda: ${mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 5, 5, 7, 8, 3, 4, 0, 4, 2)}`)