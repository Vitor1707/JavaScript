const notas = [3, 6, 7, 8, 9, 10]
/*for(let i = 0; i < notas.length; i++) {
    console.log(`A posição ${i} é: ${notas[i]}`)
}*/
notas.forEach((nota, ind) => notas[ind] = nota + 1)

console.log(notas)