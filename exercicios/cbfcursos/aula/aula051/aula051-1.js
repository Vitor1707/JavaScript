let valores = [10, 8, 9, 2]
let it_valores = valores[Symbol.iterator]()

let texto = "Youtube"
let it_texto = texto[Symbol.iterator]()

console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())