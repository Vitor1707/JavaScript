function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div.res')
    if(Number(fano.value.length) == 0 || Number(fano.value) > ano) {
        alert('[ERRO!] Verifique os dados e tente novamente')
    } else {
        let sex = document.getElementsByName('fsexo')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let e = ''
        if(sex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
               e = 'Criança'
            } else if(idade < 15) {
                e = 'Adolescente'
            } else if(idade < 24) {
                e = 'Jovem'
            } else if(idade < 59) {
                e = 'Adulto'
            } else {
                e = 'Idoso'
            }
        } else if (sex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                e = 'Criança'
            } else if(idade < 14) {
                e = 'Adolescente'
            } else if(idade < 24) {
                e = 'Jovem'
            } else if(idade < 59) {
                e = 'Adulto'
            } else {
                'Idoso'
            }
        }
        res.style.textAlign = 'center'
        res.style.textShadow = '1px 1px 0px rgba(0, 0, 0, 0.397)'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. <br> ${e}`
    }


    
}