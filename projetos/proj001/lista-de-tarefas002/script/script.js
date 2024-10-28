let contador = 0
let input = document.getElementById('texto')
let buttonAdd = document.getElementById('buttonAdd')
let areaLista = document.getElementById('areaLista')

function adicionarLista() {
    let valorInput = input.value

    if((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador

        let novoItem = `<div id="${contador}" class="item">
                <div onclick="marcarTarefa(${contador})" class="item-icone">
                    <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
                </div>
                <div onclick="marcarTarefa(${contador})" class="item-texto">
                    ${valorInput}
                </div>
                <div class="item-botao">
                    <button onclick="deletarTarefa(${contador})" class="delete"><i class="mdi mdi-delete-outline"></i>Deletar</button>
                </div>
        </div>`

        areaLista.innerHTML += novoItem

        input.value = ''
        input.focus()
    }
}

//-----------------------------------------
function marcarTarefa(id) {
    let item = document.getElementById(id)
    let classe = item.getAttribute('class')

    if(classe == 'item') {
        item.classList.add('clicado')

        let icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')

        item.parentNode.appendChild(item)
    } else {
        item.classList.remove('clicado')

        let icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')
    }
}

//-----------------------------------------
function deletarTarefa(id) {
    let tarefadeletada = document.getElementById(id)
    tarefadeletada.remove()
}

//-----------------------------------------
input.addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
        event.preventDefault()
        buttonAdd.click()
    }
})