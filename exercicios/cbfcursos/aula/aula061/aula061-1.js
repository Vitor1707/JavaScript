let Pessoa = {
    nome: "Vitor"
}

let p2 = Pessoa
let p3 = Pessoa

p3.nome = "Bruno"

console.log(p2.nome)
console.log(p3.nome)
console.log(Pessoa.nome)