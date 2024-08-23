function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    //var hora = 11
    msg.innerHTML = `Agora são ${hora}:${min}.`
    if(hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#E6E0CA'
        document.body.style.color = '#E6E0CA'
    } else if(hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#758BA3'
        document.body.style.color = '#758BA3'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#856DA7'
        document.body.style.color = '#856DA7'
    } 
}