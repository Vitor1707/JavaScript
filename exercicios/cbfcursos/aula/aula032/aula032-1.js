let cursoTodos = [...document.getElementsByClassName("curso")]
let cursoC1 = [...document.getElementsByClassName("c1")]
let cursoC2 = [...document.getElementsByClassName("c2")]
let cursoEspecial = document.getElementsByClassName("curso")[0]

console.log(cursoTodos)
console.log(cursoC1)
console.log(cursoC2)
console.log(cursoEspecial)

cursoC2.map((el) => {
    el.classList.add("destaque")
})