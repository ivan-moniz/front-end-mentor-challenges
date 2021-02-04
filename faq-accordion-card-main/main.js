const faqsQ = document.querySelectorAll(".faqs");

for (var i = 0; i < faqsQ.length; i++) {
  faqsQ[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
