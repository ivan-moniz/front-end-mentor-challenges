const menu = document.getElementById("menu");
const navBar = document.querySelector("nav");
let header = document.querySelector("header");

menu.addEventListener("click", () => {
  if (navBar.style.display === "none") {
    navBar.style.display = "flex";
    menu.classList.add("showClose");
  } else {
    navBar.style.display = "none";
    menu.classList.remove("showClose");
  }

  console.log("123");
});
