let divTodas = [...document.getElementsByTagName("div")]
let cursoTodos = [...document.getElementsByClassName("curso")]
let cursoC1 = [...document.getElementsByClassName("c1")]
let cursoC2 = [...document.getElementsByClassName("c2")]
let cursoEspecial = document.getElementById("c1")

let query_divTodas = [...document.querySelectorAll("div, p")]
let query_cursosTodos = [...document.querySelectorAll(".curso")]

console.log(query_divTodas)
console.log(query_cursosTodos)

//console.log(divTodas)
//console.log(cursoTodos)
//console.log(cursoC1)
//console.log(cursoC2)
//console.log(cursoEspecial)

/*(cursoC2.map((el) => {
    el.classList.add("destaque")
})*/