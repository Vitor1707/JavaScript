function calculou(operacao) {
    var num1 = parseInt(document.getElementById('num1').value)
    var num2 = parseInt(document.getElementById('num2').value)
    var res = document.getElementById('res')
    var oper = ''
    switch(operacao) {
        case '+':
            oper = num1 + num2
            break
        case '-':
            oper = num1 - num2
            break
        case 'x':
            oper = num1 * num2
            break
        case '/':
            if(num2 === 0 ) {
                oper = alert('Operação invalida! Não se divide por zero')
            break4} else {
                    oper = num1 / num2
                    break
                }
        case '*':
            oper = Math.pow(num1, num2)
            break
        case 'V':
            if(num2 <= 0) {
                oper = alert('Operação inválida, indice não válido')
                break
            } else {
                oper = Math.pow(num1, 1 / num2)
                break
            }

    }
    res.innerHTML = oper
}