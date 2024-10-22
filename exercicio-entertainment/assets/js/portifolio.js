let slideItem = document.select('.glide__slide')
let desc = document.querySelectorAll('#desc')

slideItem.forEach((elem) => {
    let value = elem.getAttr('data-value')
    
    elem.addEventListe('click', function() {
        desc.forEach((elem) => {
            if (elem.classList.contains(value)) {
                elem.classList.add('is-active')
            } else {
                elem.classList.remove('is-active')
            }
        })
    })
})