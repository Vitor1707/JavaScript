const body = document.body

const style_topo = 
    'display: flex;'+
    'background: rgb(193, 194, 193);'+
    'position: relative;'+
    'justify-content: center;'+
    'box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.288);'
    const topo = document.createElement('div')
    topo.setAttribute('id', 'topo')
    topo.setAttribute('style', style_topo)
    body.prepend(topo)

const style_logo_topo = 
    'width: 150px;'+
    'margin-top: 5px;'+
    'border-radius: 50%;'+
    'box-shadow: 2px 10px 14px rgba(0, 0, 0, 0.301);'
const logo = '<div id="logo" class="logo">' +
        '<img src="logo/images.jpg" alt="logo.png" style="'+style_logo_topo+'">' +
    '</div>'

topo.innerHTML += logo
