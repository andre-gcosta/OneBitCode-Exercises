function validarSubmit() {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    try {
        const emailIsValid = (email.match(/\w+(?=@)/g)[0].length>=2) &&
        (email.match(/(?<=@)\w+/g)[0].length>=2) &&
        (email.match(/(?<=\.)\w+$/m)[0].length>=2)
    } catch {
        alert('Email inválido')
        return
    }

    try {
        const passwordIsValid = (senha.match(/[a-z]/)[0]=true) &&
        (senha.match(/[A-Z]/)[0]=true) &&
        (senha.match(/[0-9]/)[0]=true) &&
        (senha.match(/\W/)[0]=true) &&
        (senha.match(/\w|\W/g)[0].length<=8)
    } catch {
        alert('Verifique sua senha')
        return
    }
    alert('Sucesso')
}

const button = document.getElementById('register').addEventListener('click', validarSubmit)