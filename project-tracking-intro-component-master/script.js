var navbar = document.querySelector('.nav-links');

var menu = document.querySelector('.hamburger');

menu.addEventListener('click', toggleHamburger);

function toggleHamburger() {
    navbar.classList.toggle('showNav');
    menu.classList.toggle('showClose');
}