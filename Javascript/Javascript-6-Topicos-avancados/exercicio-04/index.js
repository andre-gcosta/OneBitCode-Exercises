let transactionsArray = []

function createEditTransactionBtn(transactionData) {
    const edit = document.createElement('button')
    edit.classList.add('.transaction-edit')
    edit.textContent = 'Editar'
    edit.addEventListener('click', () => {
        document.querySelector('#id').value = transactionData.id
        document.querySelector('#name').value = transactionData.name
        document.querySelector('#amount').value = transactionData.amount
    })
    return edit
}

function calculateBalance() {
    const balanceSpan = document.querySelector('#balance')
    console.log(transactionsArray)
}

function renderTransaction(transactionData) {
    const transaction = document.createElement('article')
    transaction.classList.add('transaction')
    transaction.id = `transaction-${transactionData.id}`
    const name = document.createElement('h3')
    name.classList.add('transaction-name')
    name.textContent = transactionData.name
    const amount = document.createElement('h3')
    amount.classList.add('transaction-amount')
    amount.textContent = transactionData.amount
    const edit = createEditTransactionBtn(transactionData)

    transaction.append(name, amount, edit)
    document.querySelector('#transactions').append(transaction)
}

async function fetchTransactions() {
    const transactions = await fetch("http://localhost:3000/transactions").then(result => result.json())
    transactions.forEach(renderTransaction)
    transactionsArray.push(transactions)
}

async function setup() {
    const results = await fetch("http://localhost:3000/transactions")
    transactionsArray.push(results)
    transactionsArray.forEach(renderTransaction)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchTransactions()

})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const transactionData = {
        id: document.querySelector('#id').value,
        name: document.querySelector('#name').value,
        amount: parseFloat(document.querySelector('#amount').value)
    }

    if (transactionData.id) { // editar a transação com esse id
        const response = await fetch(`http://localhost:3000/transactions/${transactionData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionData)
        })
        const savedTransaction = await response.json()
        renderTransaction(savedTransaction)
        transactionsArray[0][id] = savedTransaction
        // transactionsArray[0].push(savedTransaction)
        calculateBalance()
    } else { // criar nova transação
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionData)
        })
        const savedTransaction = await response.json()
        renderTransaction(savedTransaction)
        transactionsArray[0].push(savedTransaction)
        calculateBalance()
    }

    form.reset()
})

