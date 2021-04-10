const modal = document.querySelector(".modal__container");
const openModal = document.querySelector(".select");
const closeModal = document.getElementById("close__modal");
let spanMark = document.getElementById("bookmark");
let clicked = false;

openModal.addEventListener("click", () => {
  modal.classList.add('show');
});

closeModal.addEventListener("click", () => {
  modal.classList.remove('show');
});

bookmark.addEventListener("click", () => {
  if(!clicked) {
    clicked = true;
    spanMark.innerHTML = '<span>Bookmarked</span>';
  } else {
    clicked = false;
    spanMark.innerHTML = '<span>Bookmark</span>';
  }
 
});
