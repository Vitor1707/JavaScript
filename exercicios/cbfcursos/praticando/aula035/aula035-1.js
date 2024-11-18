let caixa1 = document.querySelector("#caixa1")
let caixa2 = document.querySelector("#caixa2")
let btn_transferir = document.querySelector("#btn_transferir")

let selec = [...document.querySelectorAll(".curso")]

selec.map((el) => {
    el.addEventListener("click", (evt) => {
        let curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn_transferir.addEventListener("click", () => {
    let cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    cursoSelecionado.map((el) => {
        caixa2.appendChild(el)
    })

    let cursoNaoSelecionado = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursoNaoSelecionado.map((el) => {
        caixa1.appendChild(el)
    })
})