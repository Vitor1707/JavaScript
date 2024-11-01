const lista1 = ["morango", "uva", "maça"]
const lista2 = ["amora", "pêra", "laranja"]
const frutas = lista1.concat(lista2)
console.log(frutas)

frutas.splice(1, 3)
console.log(frutas)

frutas.splice(2, 0, "melancia", "acerola")
console.log(frutas)

const novasFRutas = frutas.slice(2)

console.log(novasFRutas)