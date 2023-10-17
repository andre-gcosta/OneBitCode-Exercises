async function imc(peso, altura) {
    if (typeof peso === 'number' && typeof altura === 'number')
        return (peso / (altura * altura))
    else
        return Promise.reject('Erro: não foi possível calcular o IMC pois o peso e altura devem ser um número')   
}

async function resultadoImc(peso, altura) {
    try {
        console.log(`Calculando o IMC para o peso ${peso} e para a altura ${altura}...`)
        const result = await imc(peso, altura)
        console.log(`O resultado do IMC foi de ${result}.`)
        if (result < 18.5) console.log('Situação: magreza')
        else if (result < 25) console.log('Situação: normal')
        else if (result < 30) console.log('Situação: sobrepeso')
        else if (result < 40) console.log('Situação: obesidade')
        else console.log('Situação: obesidade grave')
    }
    catch(error) {
        console.log(error)
    }
}

resultadoImc(71, 1.74)
resultadoImc(48, 1.60)
resultadoImc(71, 'texto')
resultadoImc(82, 1.72)
resultadoImc(120, 1.80)