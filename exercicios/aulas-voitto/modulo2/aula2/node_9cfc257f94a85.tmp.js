// Os 10 primeiros múltiplos de 234
// O primeiro algarismo é 1
// O segundo algarismo é 2

let numero = 234
let contador = 0
let stringNumero
let primeiroAlgarismo
let segundoAlgarismo

while(contador < 10) {
    stringNumero = String(numero)
    primeiroAlgarismo = stringNumero[0]
    segundoAlgarismo = stringNumero[1]

    if(primeiroAlgarismo === "1" && segundoAlgarismo === "2") {
        console.log(numero)
        numero += 234
        contador++
    }
}