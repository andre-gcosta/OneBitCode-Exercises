class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, senha) {
        if(email === this.email && senha === this.password) {
            console.log("Login bem sucedido")
        } else {
            console.log("Senha ou email digitado está incorreto")
        }
    }
}

module.exports = User