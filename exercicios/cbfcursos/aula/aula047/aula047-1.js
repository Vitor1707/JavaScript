let p_array = document.querySelector("#array")
let txt_pesquisar = document.querySelector("#txt_pesquisar")
let btnPesquisar = document.querySelector("#btnPesquisar")
let resultado = document.querySelector("#resultado")

let elementos_array = ["html", "css", "JavaScript"]
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor não encontrado!"
    let res = elementos_array.find((el, ind, arr) => {
        if(el.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
            resultado.innerHTML = `O valor encontrado é: <strong>${el.toUpperCase()}</strong>. Na posição <strong>"${ind + 1}"</strong>`
            return el
        }
    })
    console.log(res.toUpperCase())
})

// #array
// #txt_pesquisar
// #btnPesquisar
// #resultado