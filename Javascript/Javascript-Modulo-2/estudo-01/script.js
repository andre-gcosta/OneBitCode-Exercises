let pessoa = {
    nome: "Andre", 
    idade: 25, 
    programador: true,
    estudos: ["mecatrônica", "programação", "javascript"],
    curso: {
        nome: "onebitcode"
    },
    dizerOla() {
        console.log("Olá, meu nome é " + this.nome)
    },
    conversar(obj) {
        console.log("Seja bem vindo, " + obj)
    },
    assuntos(obj) {
        this.assunto = obj
        return obj + " e Series"
    }
    
}

console.log(pessoa)
pessoa.dizerOla()
pessoa.conversar('Fillipe')
console.log(pessoa.assuntos('Filmes'))


const subtrair = function (a, b) {return a - b}

console.log(subtrair(pessoa.idade, 18))

// function calcular(a, subtrair)