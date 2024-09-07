let botoes = document.querySelectorAll('.btn')
let conteudo = document.querySelectorAll('.conteudo')
const modaaal = document.querySelector('.modaaal')

botoes.forEach(elem => {
    elem.addEventListener('click', () => {
        idBtn = elem.getAttribute('id')
        
        conteudo.forEach(idx => {
            if (idBtn == 'btn-color') {
                idx.classList.toggle('bg-info')
            }
            if (idBtn == 'open-modal') {
                modaaal.classList.add('active')
            }
            
            idCtt = idx.getAttribute('id')
            
            if ('info-' + idBtn == idCtt) {
                idx.classList.toggle('ocultar')
            }
        })
    })
})

modaaal.addEventListener('click', () => {
    modaaal.classList.remove('active')
})