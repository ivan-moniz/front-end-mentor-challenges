// elements selection
const btnBookmark = document.querySelector(".btn__bookmark");
let spanMark = document.getElementById("bookmark");

btnBookmark.addEventListener("click", saveBookmark);

export function openModal(modalBg, modal) {
  modalBg.classList.add("show");
  modal.classList.add("active");
}

export function closeModal(modalBg, modal) {
  modalBg.classList.remove("show");
  modal.classList.remove("active");
}

export function addPledgeField(card, amount) {
  const pledgeArea = card.childNodes[5];

  if (card.classList.contains("card-no-reward")) {
    pledgeArea.innerHTML = `
    <div class="no-reward-pledge-area">
      <a class="btn-primary go-to-success" href="#">Continue</a>
    </div>`;
  } else {
    pledgeArea.innerHTML = `
    <div class="pledge-content">
      <p class="primary-paragraph">Enter your pledge</p>
      <form class="continue-form">
        <input type="number" value="${amount}" min="${amount}" />
        <button class="btn-primary" type="submit">Continue</button>
      </form>
    </div>`;
  }
}

// bookmark code
export default function saveBookmark() {
  if (btnBookmark.classList.contains("saved")) {
    btnBookmark.classList.remove("saved");
    spanMark.textContent = "Bookmark";
  } else {
    btnBookmark.classList.add("saved");
    spanMark.textContent = "Bookmarked";
  }
}
