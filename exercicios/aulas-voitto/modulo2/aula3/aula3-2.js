const notas = [8, 7.2, 3, 9, 10, 2, 6]
const quantidadedeNotas = notas.length

somadasNotas = 0

for(let i = 0; i < quantidadedeNotas; i++) {
    somadasNotas += notas[i]
    console.log(`A nota na posição ${i} é: ${notas[i]} `)
}

let valordaSoma = somadasNotas / quantidadedeNotas

console.log(`E a média das notas é: ${valordaSoma.toFixed(2)}`)

