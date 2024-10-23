function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (Number(fano.value.length) == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamento')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                var r = 'Criança'
            } else if (idade < 14) {
                var r = 'adolescente'
            } else if (idade < 24) {
                var r = 'jovem'
            } else if (idade < 59) {
                var r = 'adulto'
            } else {
                var r = 'idoso'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                var r = 'criança'
            } else if (idade < 14) {
                var r = 'adolescente'
            } else if (idade < 24) {
                var r = 'jovem'
            } else if (idade < 59) {
                var r = 'adulto'
            } else {
                var r = 'idoso'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos. <br> Você é um <strong>${r}</strong>.`
    }

}