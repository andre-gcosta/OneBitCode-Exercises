let pessoa = {
    nome: "Isaac",
    idade: 26,
    dizerOla() {
        pessoa.nome="andre"
        nome = "outro"
        console.log("Olá mundo, meu nome é " + this.nome)
        console.log(nome)
        pessoa2.nome = "lucas"
    }
}
let pessoa2 = {
    nome: "filipe"
}
console.log(pessoa2.nome)
pessoa.dizerOla()
console.log(pessoa.nome)
console.log(pessoa2.nome)

//metodo é uma função vinculada à um objeto
//console = objeto     .      log = função (método)
//OBS: existe o método vinculado à arrays