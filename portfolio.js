let btnMenu= document.getElementById('btn-menu')
let menuMobile= document.querySelector('#menu-mobile')
let overlay = document.querySelector('.overlay-menu')


btnMenu.addEventListener('click',()=>{
    menuMobile.classList.add("abrir-menus")
})
menuMobile.addEventListener('click',()=>{
    menuMobile.classList.remove("abrir-menus")
})
overlay.addEventListener('click',()=>{
    menuMobile.classList.remove("abrir-menus")
})

