function* perguntas() {
    let nome = yield "Qual é o seu nome?"
    let esporte = yield "Qual o seu esporte favorito?"
    return `Meu nome é ${nome}, e meu esporte favorito é ${esporte}.`
}
let itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Vitor').value)
console.log(itp.next('Academia').value)
console.log(itp.next().value)