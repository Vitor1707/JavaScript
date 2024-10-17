function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    var res = document.getElementById('res')
    let resultado = ''
    switch(operacao) {
        case '+':
            resultado = num1 + num2
            break
        case '-':
            resultado = num1 - num2
            break
        case '*':
            resultado = num1 * num2
            break
        case '/':
            if(num2 === 0) {
                resultado = 'ERRO! Divisão por zero'
            } else {
                resultado = num1 / num2
            }
            break
            default:
            resultado = 'Operacão Invalida!'
    }
    res.innerHTML = `O resulta do da conta é: <strong>${resultado}</strong>`

}