const numeros = [40, 100, 1, 5, 25, 10]
const maior20 = numeros.filter(filtragem)

document.querySelector('p#texto').innerHTML =  maior20
function filtragem(value, index, array) {
    return value > 20
}