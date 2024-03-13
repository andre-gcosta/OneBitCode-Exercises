class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity) {
        this.inStock += quantity
    }
    calculateDiscount(discountPercentage) {
        const priceWithDiscount = this.price - (this.price * discountPercentage)/100
        return priceWithDiscount
    }
}

module.exports = Product