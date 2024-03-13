const User = require("./User.js")
const Product = require("./Product.js")

const andre = new User('André', 'andre@email.com', '123')
andre.login('andre@email.com','123')
console.log(andre)

const notebook = new Product('notebook', 'asus celerom 4gb', 1200)
notebook.addToStock(5)
const priceWithDiscount = notebook.calculateDiscount(20)
console.log(priceWithDiscount)
console.log(notebook)