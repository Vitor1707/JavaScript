class Pessoas {
    constructor(pnome, pidade) {
        this.nome = pnome
        this.idade = pidade
    }
    getNome() {
        return this.nome
    }
    getIdade() {
        return this.idade
    }
    setNome() {
        this.nome = nome
    }
    setIdade() {
        this.idade = idade
    }
    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("----------------")
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