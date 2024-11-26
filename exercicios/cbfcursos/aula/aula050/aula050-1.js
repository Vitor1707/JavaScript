let p_array = document.querySelector("#array")
let btnReduzir = document.querySelector("#btnReduzir")
let resultado = document.querySelector("#resultado")

let elementos_array = [1, 2, 3, 4, 5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = `[${elementos_array}]`

btnReduzir.addEventListener("click", (evt) => {
    dobro.push(elementos_array[0]*2)
   resultado.innerHTML = elementos_array.reduce((anterior, atual, pos, arr) => {
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual + anterior
    })
    resultado.innerHTML = `<br/>V. Anterior: ${ant} <br/>V. Atual: ${atu} <br/> Dobro: ${dobro}`

})