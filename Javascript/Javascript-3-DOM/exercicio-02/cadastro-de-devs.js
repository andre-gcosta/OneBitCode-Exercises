function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type='text', placeholder='') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const novaTecnologia = document.getElementById('novaTecnologia')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

novaTecnologia.addEventListener('click', function (ev) {
    const stackInputs = document.getElementById('stackInputs')
    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')
    const expLabel = createLabel('Experiência: ')
    const expRadio1 = createInput('expRadio-' + rowIndex + '.1', '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', 'expRadio-' + rowIndex + '.1')
    const expRadio2 = createInput('expRadio-' + rowIndex + '.2', '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos', 'expRadio-' + rowIndex + '.2')
    const expRadio3 = createInput('expRadio-' + rowIndex + '.3', '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos', 'expRadio-' + rowIndex + '.3')

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function () {
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    )
    stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')//classe

    let technologies = []
    inputRows.forEach(function (row) {
        // #rowId input[name = "techName"]
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({ name: techName, exp: techExp})
    })

    const newDev = { fullname: fullnameInput.value, technologies: technologies}
    developers.push(newDev)
    alert('Dev cadastrado  com sucesso!')

    fullnameInput.value = ''
    inputRows.forEach(function (row) {
        row.remove()
    })

    console.log(developers)
})