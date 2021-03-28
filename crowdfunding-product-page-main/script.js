const modal = document.querySelector('.modal__container');
const openModal = document.getElementById('open__modal');

openModal.addEventListener('click', () => {
    if(modal.style.display == 'none') {
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
});