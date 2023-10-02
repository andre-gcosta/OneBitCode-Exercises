// const a = 0
// const b = null
// const c = "Teste"

// console.log(a || b || c)

// console.log(a ?? b ?? c)


let a = 0
let b = a || 42

console.log({a, b})

b = a ?? 42

console.log({a, b})

let c = false ?? 42

console.log(c)