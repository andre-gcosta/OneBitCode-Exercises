function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada')
        setTimeout(() => {
            if (true) {
                reject(false)
            }
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 1000 * 2)
    })
}

// const p = execute()

// p.then((result) => {
//     console.log(`A promise foi resolvida. O resultado foi: ${result}`)
// }).catch((err) => {
//     console.log(`A promisee foi rejeitada! Motivo: ${err}`)
// })
execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promisee foi rejeitada! Motivo: ${err}`)
}).finally(() => {
    console.log(`A promise foi finalizada`)
})