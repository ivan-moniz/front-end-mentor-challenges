var form = document.getElementById('form');
var email = document.getElementById('email');

form.addEventListener('click', checkInput);

function checkInput (e) {
    var emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Please, provide a valid email');
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Please, provide a valid email');
    }else {
        setSuccessFor(email);
    }

    e.preventDefault();
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';

}

function setSuccessFor(input,message) {
    const formControl = input.parentElement;
    const sucess = formControl.getElementsByClassName('alert');

    sucess.innerText = message;
    formControl.className = 'form-control sucess';

    
}



function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}