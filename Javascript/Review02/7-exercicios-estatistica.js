const media = (...params) => {
    const soma = params.reduce((accum, param)=>accum + param)
    return soma/params.length
}

const mediaPonderada = (...params) => {
    const soma = params.reduce((accum, { value, weight }) => accum + (value * weight), 0)
    const denominador = params.reduce((accum, param) => accum + (param.weight??1), 0)
    return soma/denominador
}

const mediana = (...params) => {
    if (params.length==0) { return 'Erro: nenhum parâmetro foi inserido' }
    if (params.length==1) { return params[0] }
    const orderedParams = params.sort((a,b) => a-b)
    console.log(orderedParams)
    if (orderedParams.length % 2 === 0) {
        const indexArrayCenterA = (orderedParams.length/2)-1
        const indexArrayCenterB = (orderedParams.length/2)
        const mediana = media(orderedParams[indexArrayCenterA], orderedParams[indexArrayCenterB])
        return mediana
    } else {
        const indexArrayCenter = (orderedParams.length-1)/2
        const mediana = media(orderedParams[indexArrayCenter])
        return mediana
    }
}

const moda2 = (...params) => {
    let findBiggestNumber = []
    const orderedParams = params.sort((a, b)=> a-b)
    orderedParams.map((element, i, array) => {
        if (i == 0) {
            findBiggestNumber.push(1);
        }
        else if (array[i] == array[i-1]) {
            findBiggestNumber.push(findBiggestNumber[i-1] + 1)
        }
        else {
            findBiggestNumber.push(1)
        }
    })
    let numberOfRepetitions = 0
    let numberIndex = 0
    for (let i=0; i<findBiggestNumber.length; i++) {
        if (findBiggestNumber[i] > numberOfRepetitions) {
            numberOfRepetitions = findBiggestNumber[i]
            numberIndex = i
        }
    }
    return orderedParams[numberIndex]
}

const moda = (...numbers) => {
    const numberAndQuantities = numbers.map(number => [number, numbers.filter(numberIsRepeated => (numberIsRepeated === number)).length])
    numberAndQuantities.sort((a, b) => b[1]-a[1])
    return numberAndQuantities[0][0]
}

// const calcular = media(8,7,5,3,2,10,35)
// const calcular = mediana(1,2)
const calcular = moda(1, 2, 3, 4, 5, 5, 5, 6, 7,7, 10, 8, 9,9,9,9)
// const calcular = mediaPonderada({value: 5, weight: 1}, {value: 5, weight: 1}, {value: 6, weight: 1}, {value: 5, weight: 1}, {value: 5, weight: 1}, {value: 3, weight: 5})

console.log(calcular)