let caixaCursos = document.querySelector("#caixaCursos")
let cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
let btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
let btnRemoverCurso = document.getElementById("btnRemoverCurso")
let btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
let btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
let nomeCurso = document.getElementById("nomeCurso")

let indice = 1

let criarNovoCurso = (curso) => {
    let novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${indice}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    let comando = document.createElement("div")
    comando.setAttribute("class", "comando")

    let rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_radio")

    comando.appendChild(rb)

    novoElemento.appendChild(comando)

    return novoElemento
}

cursos.map((el, chave) => {
    let novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})
let radioSelecionado = () => {
    let todosRadios = [...document.querySelectorAll("input[type = radio]")]
    let radioSelecionado = todosRadios.filter((el, ind, arr) => {
        return el.checked
    })
    return radioSelecionado[0]
}
btnCursoSelecionado.addEventListener("click", (evt) => {
    let rs = radioSelecionado()
    if (rs != undefined) {
        let cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert(`Curso selecionado: ${cursoSelecionado}`)
    } else {alert("Selecione um curso!")}
})

btnRemoverCurso.addEventListener("click", (evt) => {
    let rs = radioSelecionado()
    if(rs != undefined) {
        let cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
        console.log(cursoSelecionado)
    } else{alert("Selecione um curso!")}
})
btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    let rs = radioSelecionado()
    if(rs != undefined) {
        if(nomeCurso !== ""){
            let cursoSelecionado = rs.parentNode.parentNode
            let novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)
        }else{alert("Adicione um curso!")}
    }else{alert("Selecione um curso!")}
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    let rs = radioSelecionado()
    if(rs != undefined) {
        if(nomeCurso !== "") {
            let cursoSelecionado = rs.parentNode.parentNode
            let novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        }else{alert("Adicione um curso!")}
    } else{alert("Selecione um curso!")}
})


// parentNode
// ChildNodes [nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

// ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]