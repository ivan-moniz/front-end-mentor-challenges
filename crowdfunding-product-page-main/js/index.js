import saveBookmark from "./script.js";
import { openModal, closeModal, addPledgeField } from "./script.js";

// get elements from html
document.addEventListener("click", modalStuff);

function modalStuff(event) {
  const modalBg = document.querySelector(".modal__container"),
    modal = document.querySelector(".modal"),
    modalSuccess = document.querySelector(".success__modal"),
    target = event.target,
    paidEdition = document.querySelectorAll(".paid__edition");

  if (target.classList.contains("select")) {
    openModal(modalBg, modal);
  } else if (target.classList.contains("modal__close")) {
    closeModal(modalBg, modal);
  } else if (target.classList.contains("btn__checkbox")) {
    const selected = document.querySelectorAll(".modal__pledge"),
      card = target.parentElement.parentElement.parentElement;

    selected.forEach((card) => {
      card.classList.remove("selected");
      card.childNodes[1].childNodes[1].classList.remove("selected");
      card.childNodes[4].innerHTML = "";
    });

    if (!target.parentElement.parentElement.classList.contains("faded")) {
      target.classList.add("selected");
      card.classList.add("selected");
    }

    if (card.classList.contains("bamboo__stand")) {
      addPledgeField(card, 25);
    } else if (card.classList.contains("black__stand")) {
      addPledgeField(card, 75);
    } else {
    }
  } else if (target.classList.contains("go-to-success")) {
    closeModal(modalBg, modal);
    openModal(modalBg, modalSuccess);
  } else if (target.classList.contains("close-success-modal")) {
    closeModal(modalBg, modalSuccess);
  }

  paidEdition.forEach(element =>
    element.addEventListener('submit', () => {
      closeModal(modalBg, modal);
      openModal(modalBg, modalSuccess);
    })
  );
}

saveBookmark();
