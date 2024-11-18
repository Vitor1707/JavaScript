let VALOR_PADRÃO = 0

function somar(n1 = VALOR_PADRÃO, n2 = VALOR_PADRÃO) {
    let res = n1 + n2
    return res
}

let resultado_da_soma = somar(5, 5)
console.log(resultado_da_soma)