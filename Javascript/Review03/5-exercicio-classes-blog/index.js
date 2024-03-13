const Comment = require('./Comment.js')
const Post = require('./Post.js')
const Author = require('./Author.js')

const andre = new Author('andre')
andre.newPost('Estudo sobre as baleias da africa', '...')
andre.newPost('Robôs em Marte', '...')

console.log(andre)

const computers = new Post('A era dos computadores', '...', 'João')
computers.newComment('lucas', 'Muito bom !!')
const comentario = new Comment('fulano', 'Sensacional!')
computers.newComment(comentario.username, comentario.content)

console.log(computers)