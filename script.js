let menuWrapper = document.querySelector('.menuWrapper');
let burgerMenu = document.querySelector('.burgerMenu');

burgerMenu.addEventListener('click', () => {
    menuWrapper.classList.toggle('menuWrapperOn');
})