const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
  removeBorder();
  removeShow();

  // Add border to the current tabs
  this.classList.add('tab-border');

  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// listen for tab click
tabItems. forEach(item => item.addEventListener('click', selectItem));

const form = document.getElementById('myForm');
const email = document.getElementById('input-email');

form.addEventListener('submit', (e) => {

  e.preventDefault();
  checkInput();

  // form reset
  document.getElementById('myForm').reset();
});


function checkInput() {
  const emailValue = email.value.trim();

  if(emailValue === ' ') {
    setErrorFor(email, 'Whoops, make sure its an email');
  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'Whoops, make sure its an email');
  } else {
    setSucessFor(email);
  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSucessFor(input, message) {
  const formControl = input.parentElement;
  const sucesso = formControl.getElementsByClassName('alert');

  sucesso.innerText = message;
  formControl.className = 'form-control sucess';

 //  // display message
 //  document.querySelector('.alert').style.display ='block';
 //  setTimeout(function (){
 //   document.querySelector('.alert').style.display ='block';
 // }, 3000);
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// menu toggle coding
var navbar = document.querySelector('.nav');
var menu = document.querySelector('.hamburger');

menu.addEventListener('click', toggleHamburger);

function toggleHamburger () {
  navbar.classList.toggle('showNav');
  menu.classList.toggle('showClose');
}
