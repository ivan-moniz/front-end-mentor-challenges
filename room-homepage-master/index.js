const toogleBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.nav-bar');

toogleBtn.addEventListener('click', (e) => {
   menu.classList.toggle('active');
   toogleBtn.classList.toggle('showClose');
});

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

let allSlides = document.querySelectorAll('.text-container');

let current_slide = 0;

function moveSlides(current) {
    allSlides.forEach((element) => {
        element.classList.remove('slide-active');
    });
    allSlides[current].classList.add('slide-active');
}

function preSlide() {
    console.log('456');
    current_slide <= 0
        ? (current_slide = allSlides.length -1)
        : current_slide--;

    moveSlides(current_slide);
}
function nextSlide() {
    console.log('123');
    current_slide >= allSlides.length - 1
        ? (current_slide = 0)
        : current_slide++;
    moveSlides(current_slide);
}
btnLeft.addEventListener('click', preSlide);
btnRight.addEventListener('click', nextSlide);