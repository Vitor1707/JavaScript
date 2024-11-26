let f_tipoNormal = document.querySelector("#f_tipoNormal")
let f_tipoMilitar = document.querySelector("#f_tipoMilitar")
let f_nome = document.querySelector("#f_nome")
let f_portas = document.querySelector("#f_portas")
let f_cor = document.querySelector("#f_cor")
let f_blindagem = document.querySelector("#f_blindagem")
let f_municao = document.querySelector("#f_municao")
let carros = document.querySelector("#carros")
let btn_addCarro = document.querySelector("#btn_addCarro")
let a_carros = []
let removerCarro = (quem) => {
    a_carros = a_carros.filter((el) => {
        return el.nome != quem
    })
}
let gerenciarExibirCarros = () => {
    carros.innerHTML = ""
    a_carros.forEach((car) => {
        let div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", car.nome)
        let btnRemover = document.createElement("button")
        btnRemover.innerHTML = "Remover"
        btnRemover.setAttribute("class", "btnRemover")
        btnRemover.addEventListener("click", (evt) => {
            let quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibirCarros()
        })
        div.innerHTML = `Nome: ${car.nome} <br/>`
        div.innerHTML += `Cor: ${car.cor} <br/>`
        div.innerHTML += `Portas: ${car.porta} <br/>`
        div.innerHTML += `Blindagem: ${car.blindagem} <br/>`
        div.innerHTML += `Munição: ${car.municao} <br/>`
        div.appendChild(btnRemover)
        carros.appendChild(div)
    })
}
f_tipoNormal.addEventListener("click", (evt) => {
    f_nome.value = ""
    f_cor.value = ""
    f_portas.value = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})
f_tipoMilitar.addEventListener("click", (evt) => {
    f_nome.value = ""
    f_cor.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})
btn_addCarro.addEventListener("click", (evt) => {
    if(f_tipoNormal.checked) {
        let carr = new Carro(f_nome.value, f_cor.value, f_portas.value)
        a_carros.push(carr)
        f_nome.value = ""
        f_cor.value = ""
        f_portas.value = 0
        f_nome.focus()
    } else {
        let carr = new Militar(f_nome.value, f_portas.value, f_cor.value, f_blindagem.value, f_municao.value)
        a_carros.push(carr)
        f_nome.value = ""
        f_cor.value = ""
        f_portas.value = 0
        f_blindagem.value = 0
        f_municao.value = 0
        f_nome.focus()
    }
    
    gerenciarExibirCarros()
})

class Carro { // Classe pai
    constructor(nome, cor, portas) {
        this.nome = nome
        this.cor = cor
        this.porta = portas
        this.ligado = false
        this.vel = 0
    }
    ligar = function() {
        this.ligado = true
    }
    desligar = function() {
        this.ligado = false
    }
    setCor = function(cor) {
        this.cor = cor
    }
}

class Militar extends Carro {
    constructor(nome, cor, portas, blindagem, municao) {
        super(nome, cor, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.cor = "Verde"
    }
    atirar = function() {
            if(this.municao > 0) {
                this.municao--
            }
    }
}
class Utilitario extends Carro {
    constructor(nome, cor, portas, lugares){
    super(nome, cor, portas)
    this.lugares = lugares
    }
}

let c1 = new Carro("Normal", "Amarelo", 4)
c1.ligar()

let c2 = new Militar("Lutador", "Verde", 1, 100, 50)
// c2.setCor("Azul")
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

let c3 = new Utilitario("Legalzin", "Vermelho", 6, 8)

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.porta}`)
console.log(`Ligado: ${(c1.ligado? "Sim" : "Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("------------------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.porta}`)
console.log(`Ligado: ${(c2.ligado? "Sim" : "Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Municao: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log("------------------------------")

console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.porta}`)
console.log(`Lugares: ${c3.lugares}`)
console.log(`Ligado: ${(c3.ligado? "Sim" : "Não")}`)
console.log(`Velocidade: ${c3.vel}`)
console.log(`Cor: ${c3.cor}`)
console.log("------------------------------")