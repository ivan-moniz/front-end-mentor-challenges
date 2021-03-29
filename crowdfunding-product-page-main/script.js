const modal = document.querySelector(".modal__container");
const openModal = document.getElementById("open__modal");
const closeModal = document.getElementById("close__modal");
const bookmark = document.getElementById("bookmarked");
let spanMark = document.getElementById("bookmark");

openModal.addEventListener("click", () => {
  if (modal.style.display == "none") {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
});

closeModal.addEventListener("click", () => {
  if (modal.style.display == "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
});

bookmark.addEventListener("click", () => {
  spanMark.innerText("Bookmarked");
});
