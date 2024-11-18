let caixa1 = document.querySelector("#caixa1")
let btn_c1 = document.querySelector("#c1")
let cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evt) => {
    console.log("clicou")
})

cursos.map((el) => {
    el.addEventListener("click", ((evt) => {
        evt.stopPropagation()
    }))
})