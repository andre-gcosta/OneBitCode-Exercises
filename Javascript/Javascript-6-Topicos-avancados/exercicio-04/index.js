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

    transaction.append(name, amount)
    document.querySelector('#transactions').append(transaction)
}

async function fetchTransactions() {
    const transactions = await fetch("http://localhost:3000/transactions").then(result => result.json())
    transactions.forEach(renderTransaction)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchTransactions()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const transactionData = {
        name: document.querySelector('#name').value,
        amount: document.querySelector('#amount').value
    }

    const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    })

    const savedTransaction = await response.json()
    renderTransaction(savedTransaction)
    form.reset()
    console.log(savedTransaction)
})