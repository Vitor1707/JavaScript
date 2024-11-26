let caixa = document.querySelector("#caixa")

let cursos = ["HTML", "CSS", "JavaScript"]

// cursos[0] = 2025

cursos.push("C++", "Pyhon")

cursos.pop()    // Tirou o Python
cursos.pop()    // Tirou o C++
cursos.pop()    // Tirou o JavaScript

cursos.unshift("Pyhon")  // Adicionou Python

cursos.shift("")    //Tirou Python

console.log(cursos[0])

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})