let n = 0
let max = 1000
let pares = 0
for(let i = n; i < 1000; i++) {
    console.log("O número da vez é: " + i)
    if(i % 2 != 0) {
        continue
    }
    pares ++
}
console.log("A quantidade de números pares presentes é: " + pares)
console.log("Fim do programa!")