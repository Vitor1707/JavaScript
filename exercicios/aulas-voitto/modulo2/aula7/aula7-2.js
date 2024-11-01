const notas = [3, 6, 7, 8, 9, 10]
const notasComPontoExtra = notas.map(adicionarcomPontoExtra)

function adicionarcomPontoExtra(nota) {
    return nota + 3
}

console.log(notasComPontoExtra)
console.log(notas)