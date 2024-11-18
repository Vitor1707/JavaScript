

let idades = [15, 21, 30, 17, 18, 44, 12, 50]
let maior = idades.filter((valor) => {
    if(valor >= 18) {
        return valor
    }
})
let menor = idades.filter((valor) => {
    if(valor < 18) {
        return valor
    }
})

console.log(idades)
console.log(maior)
console.log(menor)