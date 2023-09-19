function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

// dobro(5)
// dobro(7)
// dobro()

function dizerOla(nome = 'mundo') {
    alert("olá, " + nome + "!")
}

// dizerOla('andre')
// dizerOla()

function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}

// soma(7, 3)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

// criarUsuario("Isaac", "isaac@email.com", "1234")
// criarUsuario("isaac@email.com", "Isaac", "1234", "usuario")

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    //
}
function objetoComoParametros(usuario) {
    console.log(usuario)
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComoParametros(dadosDoUsuario)