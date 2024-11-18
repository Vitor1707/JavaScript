//let c1 = document.querySelector("#c1"
let cursos = [...document.querySelectorAll(".curso")]

cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        let el = evt.target
        el.classList.add("destaque")
        console.log(`${el.innerHTML} foi clicado!`)
    })
})


/*c1.addEventListener("click", (evt) => {
    let el = evt.target
    el.classList.add("destaque")
})*/
