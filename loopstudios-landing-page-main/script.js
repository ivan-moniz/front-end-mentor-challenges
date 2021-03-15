const menu = document.getElementById("menu");
const nav = document.querySelector(".header__links");

menu.addEventListener("click", () => {
  if (nav.style.display == "none") {
    nav.style.display = "block";
    menu.classList.add("show__close");
  } else {
    nav.style.display = "none";
    menu.classList.remove("show__close");
  }
});
