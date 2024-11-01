const farenheit = [0, 32, 45, 50, 75, 80, 99, 120]
const farenheitParaCelcius = farenheit.map(transfromarParaCelcius)

function transfromarParaCelcius(farenheit) {
    return (farenheit - 32) * 5 / 9
}
console.log(`A temperatura em Farenheit é: ${farenheit}
    Já a sua temperatura em Celcius é: ${farenheitParaCelcius}`)