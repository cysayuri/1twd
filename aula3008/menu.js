const menu = document.querySelector('.menu')
const burguer = document.querySelector('.menu__burguer')

burguer.addEventListener('click', () => {
    menu.classList.toggle('active')
})