let btn_soma = document.querySelector("#btn_soma")
let btn_subtracao = document.querySelector("#btn_subtracao")
let btn_multiplicacao = document.querySelector("#btn_multiplicacao")
let btn_divisao = document.querySelector("#btn_divisao")
let res = document.querySelector("#res")

let oper = [
    () => {
        let val = [document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value = Number(val[0]) + Number(val[1])
    },
    () => {
        let val = [document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value = Number(val[0]) - Number(val[1])
    },
    () => {
        let val = [document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value = Number(val[0]) * Number(val[1])
    },
    () => {
        let val = [document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value = Number(val[0]) / Number(val[1])
    }
]

btn_soma.addEventListener("click", oper[0])
btn_subtracao.addEventListener("click", oper[1])
btn_multiplicacao.addEventListener("click", oper[2])
btn_divisao.addEventListener("click", oper[3])