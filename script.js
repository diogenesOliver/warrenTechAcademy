let openMenu = document.getElementById('open-menu')
let closeMenu = document.getElementById('closeMenu')

openMenu.addEventListener('click', () => {
    document.body.classList.add('menu-expanded')
})

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-expanded')
})