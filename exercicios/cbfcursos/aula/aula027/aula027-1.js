function* cores () {
    yield "vermelho"
    yield "Verde"
    yield "Amarelo"
    yield "Azul"
} 
const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)