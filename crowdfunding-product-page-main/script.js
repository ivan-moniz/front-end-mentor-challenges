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
   
    spanMark.innerHTML = '<span>Bookmarked</span>';
  } else {
    
    spanMark.innerHTML = '<span>Bookmark</span>'
  }
 
});
