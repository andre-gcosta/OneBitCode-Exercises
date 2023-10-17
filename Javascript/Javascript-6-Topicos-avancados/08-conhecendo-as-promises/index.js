// // pendente - pending
// // resolvida - resolved
// // rejeitada - rejected
// // finalizada
// const p = new Promise((resolve, reject) => {
//     console.log('A promise está sendo executada.')
//     setTimeout(() => {
//         if (true) {
//             reject(false)
//         }
//         console.log('Resolvendo a promise...')
//         resolve(true)
//     }, 1000 * 2)
// })

// console.log(p)

// setTimeout(() => {
//     console.log(true)
// }, 1000 * 3)

function execute() {
    //faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada...')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 1000)
    })
}

const p = execute()
console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000);