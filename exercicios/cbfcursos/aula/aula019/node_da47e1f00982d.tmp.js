let n = 0
let max = 1000
let pares = 0

for(let i = n; n <= max; i++) {
    console.log("seu número é: " + n)

    if(i % 2 == 0) {
        pares++
    }
}
console.log("O número de pares é: " + pares)
console.log("Fim do programa!")