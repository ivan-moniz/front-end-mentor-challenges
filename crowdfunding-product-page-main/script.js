const modal = document.querySelector(".modal__container");
const openModal = document.getElementById("open__modal");
const closeModal = document.getElementById("close__modal");
const bookmark = document.getElementById("bookmarked");
let spanMark = document.getElementById("bookmark");
let isBoolean;

openModal.addEventListener("click", () => {
  modal.classList.add('show');
});

closeModal.addEventListener("click", () => {
  modal.classList.remove('show');
});

bookmark.addEventListener("click", () => {
  if(spanMark.innerHTML === 'Bookmark') {
    // isBoolean = true;
    spanMark.innerHTML = '<span>Bookmarked</span>';
  } else {
    // isBoolean = false;
    spanMark.innerHTML = '<span>Bookmark</span>'
  }
 
});
