class Product {
    constructor (name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.instock = 0
    }

    addToStock(quantity) {
        this.instock += quantity
    }

    calculateDiscount(discountPercent) {
        return this.price - ((this.price * discountPercent) / 100)
    }
}

const computador = new Product('computador', '500gb 8gbRam i7', 2500)
console.log(computador)

computador.addToStock(50)
computador.addToStock(50)
console.log(computador.instock)

const discount = computador.calculateDiscount(15)
console.log(discount)