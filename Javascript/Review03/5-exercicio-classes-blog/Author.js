const Post = require('./Post.js')

class Author {
    constructor(author) {
        this.author = author
        this.posts = []
    }
    newPost(title, body) {
        const newpost = new Post(title, body, this)
        this.posts.push(newpost)
    } 
}

module.exports = Author