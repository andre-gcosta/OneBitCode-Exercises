class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100
    }

    get amount() {
        return this.#amount / 100
    }

    getAmount() {
        return this.#amount / 100
    }

    set username(newUsername) {
        if (typeof newUsername === 'string') {
            this.#username = newUsername
        } else {
            console.log('username must be of type string')
        }
    }

    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()
console.log(myWallet.amount)
console.log(myWallet.getAmount())

myWallet.username = 'Isaac'
myWallet.username += ' Pontes'
myWallet.username = 5
console.log(myWallet.username)