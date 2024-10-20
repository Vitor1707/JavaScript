function calcular(calculadora) {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let res = document.getElementById('res')
    let oper = ''
    switch (calculadora) {
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
            if(num2 === 0) {
                oper = alert('ERRO! Números não se dividem por zero')
            } else {
                oper = num1 / num2
            } break
        case '*':
            oper = Math.pow(num1, num2)
            break
        case 'V':
            if(num2 <= 0) {
                oper = alert('ERRO! Não existe raiz de zero de um número')
            } else {
               oper = Math.pow(num1, 1 / num2)
            }
            break
    }
    res.innerHTML = `A resposta da sua operação é: <strong>${oper}</strong>`
    res.style.color = 'white'
    res.style.marginTop = '20px'
}