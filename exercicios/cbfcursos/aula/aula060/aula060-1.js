function Pessoa(pnome, pidade) {
    this.nome = pnome,
    this.idade = pidade,
    this.getNome = function() {
        return this.nome
    },
    this.getIdade = function() {
        return this.idade
    },
    this.setNome = function() {
        this.nome = nome
    },
    this.setIdade = function() {
        this.idade = idade
    }
    this.info = function() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("-----------------")
    }

}

let btn_add = document.querySelector("#btn_add")
let res = document.querySelector(".res")
let pessoas = []

let addPessoas = () => {
    res.innerHTML = ""
    pessoas.map((p) => {
        let div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()} <br/>
                         Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click", (evt) => {
    let nome = document.querySelector("#f_nome")
    let idade = document.querySelector("#f_idade")
    let p = new Pessoas(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoas()
})