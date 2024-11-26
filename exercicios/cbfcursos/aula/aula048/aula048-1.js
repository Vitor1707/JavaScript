let p_array = document.querySelector("#array")
let btnVerificar = document.querySelector("#btnVerificar")
let resultado = document.querySelector("#resultado")

let elementos_array = [21, 25, 19, 20, 16, 18, 22]
p_array.innerHTML = `[${elementos_array}]`

btnVerificar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Array não conforme"
    let ret = elementos_array.every((el, ind, arr) => {
        if(el < 18) {
            resultado.innerHTML = `Array não conforme na posição: <strong>${ind + 1}</strong>`
        }
        return el >= 18
    })
    if(ret) {
        resultado.innerHTML = "OK"
    } 
    // console.log(ret)
})