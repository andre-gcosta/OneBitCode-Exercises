class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if(email == this.email) {
            if(password == this.password) {
                console.log('Logado com sucesso!')
            } else {
                console.log('Senha inválida.')
            }
        } else {
            console.log('Conta inexistente')
        }
    }
}

const andre = new User('André Goulart Costa', 'andre@email.com', '123')
console.log(andre)

andre.login('andre@email.com', '23')