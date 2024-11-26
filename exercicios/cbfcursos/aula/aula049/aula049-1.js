let p_array = document.querySelector("#array")
let btnVerificar = document.querySelector("#btnVerificar")
let resultado = document.querySelector("#resultado")

let elementos_array = [16, 12, 10, 17, 15, 13, 11, 19]
p_array.innerHTML = `[${elementos_array}]`

btnVerificar.addEventListener("click", (evt) => {
    let ret = elementos_array.some((el, ind, arr) => {
        if(el < 18) {
            resultado.innerHTML = `Array não conforme na posição: <strong>${ind + 1}</strong>`
        }
        return el >= 18
    })
    if(ret) {
        resultado.innerHTML = "OK"
    } 
    console.log(ret)
})