var navbar = document.querySelector('.nav');
var menu = document.querySelector('.hamburger');

menu.addEventListener('click', toggleHamburger);

function toggleHamburger(){
  navbar.classList.toggle('showNav');
  menu.classList.toggle('showClose');
}
