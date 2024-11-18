const config = {
        cor: "#48f"
}

const cxmsg = new Cxmsg(config)

const btn_mostrarcxmsg = document.querySelector('#btnmostrarcxdmnsg')
const btn_mostrarcxmsg2 = document.querySelector('#btnmostrarcxdmnsg2')
const btn_mostrarcxmsg3 = document.querySelector('#btnmostrarcxdmnsg3')

btn_mostrarcxmsg.addEventListener('click', () => {
    cxmsg.mostrar("CBF Cursos", "Curso de JavaScript, criando caixas de mensagem")
})
btn_mostrarcxmsg2.addEventListener('click', () => {
    cxmsg.mostrar("YouTube", "Videos gratuitos e de cunho informativo")
})
btn_mostrarcxmsg3.addEventListener('click', () => {
    cxmsg.mostrar("GitHub", "Acesse a minha página no GitHub")
})