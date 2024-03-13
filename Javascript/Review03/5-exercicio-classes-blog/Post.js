const Comment = require('./Comment.js')

class Post {
    constructor(title, body, author) {
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }
    newComment(username, content) {
        const comment = new Comment(username, content)
        this.comments.push(comment)
    }
}

module.exports = Post