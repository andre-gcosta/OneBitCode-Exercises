const book= {
    title: "Eragon",
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["fantatsy", "adventure", "medieval"],
    author: {
        name: "Christopher Paolini",
        publications: 0,
        addPublications(quantity) {
            this.publications += quantity
            book.pages += 5
        }
    },
    addOnStock(quantity) {
        this.inStock += quantity
    },
    save: function() {

    }
}

function Book(title, pages, tags, author) { //PascalCase for Constructor Functions
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){ this.inStock += quantity }
    this.save = function() {}
}

const author = { name: "Christopher Paolini"}
const tags = ["fantatsy", "adventure", "medieval"]

const eragon = new
    Book(
        'eragon', 468, tags, author
    )
const eldest = new Book ("Eldest", 644, tags, author)



book.addOnStock(50)
console.log(book.inStock)
book.author.addPublications(2)
book.save = function () {}
    //salvar no banco de dados
book.delete = function() {
} 
console.log(book)


console.log(eragon)
console.log(eldest)