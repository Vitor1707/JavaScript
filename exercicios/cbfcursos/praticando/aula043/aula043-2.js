let caixaCursos = document.querySelector("#caixaCursos")
let cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
let btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
let btnRemoverCurso = document.getElementById("btnRemoverCurso")
let btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
let btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
let nomeCurso = document.getElementById("nomeCurso")
let tirarSelecao = () => {
    let cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    cursoSelecionado.map((el, chave) => {
        el.classList.remove("selecionado")
    })
}
let indice = 1
let criarNovoCurso = (curso) => {
    let novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${indice}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.addEventListener("click", (evt) => {
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    novoElemento.innerHTML = curso
    return novoElemento
}
cursos.map((el, chave) => {
    let novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})
let cursoSelecionado = () => {
    let cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    return cursoSelecionado[0]
}
btnCursoSelecionado.addEventListener("click", (evt) => {
    let cs = cursoSelecionado()
    if(cs != undefined) {
        alert(`Curso selecionado: ${cs.innerHTML}`)
    }else{alert("Selecione um curso!")}
})
btnRemoverCurso.addEventListener("click", (evt) => {
    let cs = cursoSelecionado()
    if(cs != undefined) {
        cs.remove()
    }else{alert("Selecione um curso!")}
})
btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    if(nomeCurso.value !== "") {
        let cs = cursoSelecionado()
        if(cs != undefined) {
            let cursoSelecionado = cs
            let novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)
        } else{alert("Selecione umm curso!")}
    }else{alert("Digite um novo curso!")}
})
btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    if(nomeCurso.value !== "") {
        let cs = cursoSelecionado()
        if(cs != undefined) {
            let cursoSelecionado = cs
            let novocurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novocurso, cursoSelecionado.nextSibling)
        }else{alert("Selecione um curso!")}
    }else{alert("Digite um novo curso!")}
})
// parentNode
// ChildNodes [nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

// ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]