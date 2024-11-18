function canal () {
    let n1 = 15
    let n2 = 3
    let res = n1 * n2
    if(res % 2 == 0) {
        return "Par" //DEVE TER CERTEZA DE QUE O RETURN M=NÇAO PODERÁ TER OS DOIS RETURNS COMO RESPOSTA
    } else {
        return "Impar"
    }
    //DEVE-SE GARANTIR QUE APENAS UM DOS DOIS PODERÁ SER REALIZADO!
}

let res = canal()
console.log(res)