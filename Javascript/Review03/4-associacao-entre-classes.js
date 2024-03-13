class Address {
    constructor(street, number, neigborhood, city, state) {
        this.street = street
        this.number = number
        this.neigborhood = neigborhood,
        this.city = city,
        this.state = state
    }

    fullAddress() {
        return `Rua ${this.street}, nº ${this.number}. ${this.neigborhood}, ${this.city}/${this.state}.`
    }
}

class Person {
    constructor (name, address) {
        this.name = name
        this.address = address
    }
}

class PersonWithRequiredAddress {
    constructor (name , street, number, neigborhood, city, state) {
        this.name = name
        this.address = new Address(street, number, neigborhood, city, state)
    }
}

const addr = new Address("7 de Setembro", 99, "Centro", "São Fidélis", "RJ")
const john = new Person("Jonh Doe", addr)
const john2 = new Person("Jonh Doe", addr.fullAddress())
console.log(john)
console.log(john2)
console.log(john.address.fullAddress())

const john3 = new PersonWithRequiredAddress("Jonh Doe", "7 de Setembro", 99, "Centro", "São Fidélis", "RJ")
console.log(john3)
console.log(john3.address.fullAddress())