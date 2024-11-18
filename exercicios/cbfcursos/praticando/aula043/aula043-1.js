let caixaCursos = document.querySelector("#caixaCursos")
let btn_c = [...document.querySelectorAll(".curso")]
let c1_2 = document.querySelector("#c1_2")
let cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
let btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
let btnRemoverCurso = document.getElementById("btnRemoverCurso")

cursos.map((el, chave) => {
    let novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${chave}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    let comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    let rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

let radioSelecionado = () => {
    let todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radiosSelecionado = todosRadios.filter((ele, ind, arr) => {
        return ele.checked
    })
    return radiosSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    let rs = radioSelecionado()
    if(rs != undefined) {
        let cursoSelecionado = rs.parentNode.previousSibling.textContent
    alert(`Curso selecionado: ${cursoSelecionado}`)
    } else {
        alert("Selecione um curso!")
    }
})

btnRemoverCurso.addEventListener("click", (evt) => {
    let rs = radioSelecionado()
        if(rs != undefined) {
            let cursoSelecionado = rs.parentNode.parentNode
            cursoSelecionado.remove()
    } else {
        alert("Selecione um curso!")
    }
})

// parentNode
// ChildNodes [nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling