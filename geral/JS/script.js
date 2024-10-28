// TUDO QUE ESTIVER ENTRE '', É UMA STRING
// PARA SOMAR DOIS NUMEROS, NÃO OS DEIXE EM UMA STRING, E DE PREFERÊNCIA DÊ VALOR A ELES
let idade = 17 // TIPO NUMBER
let nome = 'Vitor' // TIPO STRING

// ARRAY -- Teoricamente é uma lista
let ingredientes = ['farinha', 'água', 'sal']

// OBJETOS -- Um ser com muitos valores ex: um personagem
let personagem = {
    nome: 'fulano',
    nível: 10,
    força: 800,
    magia: 200,
    vida: 1000,
    mana: 200
}

// FUNÇÕES -- O mais usado
function sum(a, b) {
    let resultado = a + b
    return resultado
}
//ARROW FUNCTION
let sum2 = (a, b) => {
    let resultado = a+ b
    return resultado
}

let x = sum(10, 90)
let y = sum2(20, 30)
console.log(x)
console.log(y)-
