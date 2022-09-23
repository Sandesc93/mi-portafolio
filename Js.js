const container= document.querySelector('.navbar__container')
const menu= document.getElementById('menu') 

container.addEventListener('click', function (e) {
    if(e.target.matches('.menu-open')) {
        menu.classList.add('active')
    }

    if(e.target.matches('.menu-close')) {
        menu.classList.remove('active')
    }

    if(e.target.matches('.menu__link')) {
        menu.classList.remove('active')
    }
})
