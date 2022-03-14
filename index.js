const menu_lateral = document.querySelector(".menu-lateral")
const btn_menu = document.querySelector(".cabecalho__menu")

btn_menu.addEventListener('click', (e) => {
    menu_lateral.classList.toggle('menu-lateral--visivel')
})