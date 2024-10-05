const navInput = document.querySelector('.nav-input');
const body = document.querySelector('body');

navInput.addEventListener('change', () => {
    if (navInput.checked) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
});


