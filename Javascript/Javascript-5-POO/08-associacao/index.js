// const Address = require('./Address')
const Person = require('./Person.js')

// const addr = new Address("7 de Setembro", 99, 'Centro', "São Fidélis", "RJ")
// const john = new Person("John Doe", addr)

const john = new Person("John Doe", '7 de Setembro', 99, 'Centro', 'São fidélis', 'RJ')

console.log(john)
console.log(john.address.fullAddress())