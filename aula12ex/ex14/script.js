function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.png'
        window.document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        window.document.body.style.backgroundColor = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        window.document.body.style.backgroundColor = '#515154'
    }
}