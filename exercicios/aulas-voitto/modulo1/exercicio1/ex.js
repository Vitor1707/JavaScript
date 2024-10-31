let valor_chocolate = 5
let valor_laranja = 3
let quant_chocolate = 5
let quant_laranja = 3
let total_dia1 = (valor_chocolate * quant_chocolate) + (valor_laranja * quant_laranja)

console.log(total_dia1)

 quant_chocolate = 3
 quant_laranja = 3
let total_dia2 = (valor_chocolate * quant_chocolate) + (valor_laranja * quant_laranja)
console.log(total_dia2)
let total = total_dia1 + total_dia2
console.log(`No primeiro dia foi vendido R$${total_dia1} reais, e no segundo dia foram vendidos R$${total_dia2} reais. Sendo assim, no total eles venderam R$${total} reais`)