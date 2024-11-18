let caixa1 = document.querySelector("#caixa1")
let cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, chave) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${chave + 1}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    
    novoElemento.addEventListener("click", (evt) => {
        caixa1.removeChild(evt.target)
    })
    caixa1.appendChild(novoElemento)
})
