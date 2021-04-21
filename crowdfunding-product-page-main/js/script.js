// elements selection
const modal = document.querySelector(".modal__container");
const openModal = document.querySelectorAll(".select");
const closeModal = document.getElementById("close__modal");
const selection = document.querySelectorAll(".selection");
const pledge = document.querySelectorAll('.pledge__bottom');
const btnBookmark = document.querySelector(".btn__bookmark");
let spanMark = document.getElementById("bookmark");


btnBookmark.addEventListener('click', saveBookmark);



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
    pledge.forEach(bottom => {
      bottom.classList.add('active');
    })
    
  });
});

// open modal


// bookmark code 
export default function saveBookmark() {

  if (btnBookmark.classList.contains('saved')) {
    btnBookmark.classList.remove('saved');
    spanMark.textContent = 'Bookmark';
  } else {
    btnBookmark.classList.add('saved');
    spanMark.textContent = 'Bookmarked';
  }

}

