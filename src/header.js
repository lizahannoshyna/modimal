const navInput = document.querySelector('.nav-input');
const body = document.querySelector('body');

navInput.addEventListener('change', () => {
    if (navInput.checked) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.getElementById('dropdownMenuButton2');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownButton.addEventListener('click', function() {
        setTimeout(function() { 
            if (dropdownMenu.classList.contains('show')) {
                dropdownButton.classList.add('dropdown-open');
            } else {
                dropdownButton.classList.remove('dropdown-open');
            }
        }, 0);
    });
});







