// elements selection
const modal = document.querySelector(".modal__container");
const openModal = document.querySelectorAll(".select");
const closeModal = document.getElementById("close__modal");
const selection = document.querySelectorAll(".selection");
const pledge = document.querySelector('.pledge__bottom');
let btnBookmark = document.querySelector(".btn__bookmark");
let spanMark = document.getElementById("bookmark");
let circle = document.getElementById("circle");
let path = document.getElementById("path");


// variables selection
let clicked = false;

const check = 'far fa-dot-circle';
// const unchek =  'far fa-circle';


// open modal code
openModal.forEach( button => {
  button.addEventListener('click' , () => {
    modal.classList.add("show")
  })
});

// close modal statement
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

// selection code 
selection.forEach(select => {
  select.addEventListener('click', () => {
    pledge.classList.add('active');
    select.classList.toggle(check);
  });
});


// bookmark code 
btnBookmark.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    spanMark.innerHTML = "<span>Bookmarked</span>";
    spanMark.style.color = "hsl(176, 72%, 28%)";
    btnBookmark.style.backgroundColor = "hsla(176, 50%, 47%, .1)";
    circle.style.fill = "hsl(176, 72%, 28%)";
    path.style.fill = "#fff";
  } else {
    clicked = false;
    spanMark.innerHTML = "<span>Bookmark</span>";
    spanMark.style.color = "hsl(0, 0%, 48%)";
    btnBookmark.style.backgroundColor = "hsla(0, 0%, 48%, 0.2)";
    circle.style.fill = "#2F2F2F";
    path.style.fill = "#B1B1B1";
  }
});
