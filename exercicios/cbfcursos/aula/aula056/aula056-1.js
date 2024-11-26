let caixa = document.querySelector("#caixa")

let carros = ["Polo", "Golf", "I-Cross", "HRV"]
// let curso = "JavaScript"
// let canal = "CFB Curso"
// let frase = "Este é o curso de " + curso + " do canal " + canal

let ul = `<ul>`
carros.map((el) => {
    ul += `<li>${el}<li/>`
})

ul + `</ul>`

//let frase = `Este é o curso de ${curso} do canal ${canal}`

caixa.innerHTML = ul