let caixa1 = document.querySelector("#caixa1")
let btn_c = [...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

/*if(caixa1.children.length > 0) {
    console.log("Possui Filhos!")
} else {
    console.log("Não possui filhos!")
}*/

console.log(caixa1.children.length > 0 ? "Possui filhos!" : "Não possui filhos!")

console.log(caixa1.children[1].innerHTML = "Teste")