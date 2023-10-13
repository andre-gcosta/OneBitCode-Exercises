const Deposit = require("./entities/Deposit.js")
const Loan = require("./entities/Loan.js")
const Transfer = require("./entities/Transfer.js")
const User = require("./entities/User.js")
const Account = require("./entities/Account.js")

module.exports = class App {
    static #users = []
    
    static createUser(email, fullname) {
        const userExists = App.findUser(email)
        if (!userExists) {
            this.#users.push(new User(email, fullname))
        }
    } 

    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(fromUserEmail, toUserEmail, value) {
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUser) {
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }

    static takeLoan(email, value, numberOfInstallments) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(value, numberOfInstallments)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanFee(newFeePercentage) {
        Loan.fee = newFeePercentage
    }
}