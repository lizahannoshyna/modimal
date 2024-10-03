document.querySelectorAll('.heart').forEach(function (heart) {
    heart.addEventListener('click', function () {
        heart.classList.toggle('filled'); // Добавляем или убираем класс 'filled' при клике
    });
});




import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 30,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

//FAQS

document.querySelectorAll('.faq-item__header').forEach(header => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const toggle = this.querySelector('.faq-item__toggle');

        // Используем класс для анимации
        content.classList.toggle('faq-item__content--open');

        // Переключаем знак с анимацией вращения
        if (toggle.textContent === '+') {
            toggle.textContent = '−';
        } else {
            toggle.textContent = '+';
        }

        toggle.classList.toggle('rotate'); // добавляем класс для вращения
    });
});

let isGreen = false; // Переменная для отслеживания состояния цвета

document.getElementById('changeColor').addEventListener('click', function () {
    const textElement = document.getElementById('active_green');
    if (isGreen) {
        textElement.style.color = ''; // Возвращаем исходный цвет
    } else {
        textElement.style.color = '#748C70'; // Меняем цвет на зеленый
        textElement.style.transition = 'color 0.2s ease';
    }
    isGreen = !isGreen; // Переключаем состояние
});

let isGreen2 = false; // Переменная для отслеживания состояния цвета

document.getElementById('changeColor2').addEventListener('click', function () {
    const textElement = document.getElementById('active_green2');
    if (isGreen2) {
        textElement.style.color = ''; // Возвращаем исходный цвет
    } else {
        textElement.style.color = '#748C70'; // Меняем цвет на зеленый
        textElement.style.transition = 'color 0.2s ease';
    }
    isGreen2 = !isGreen2; // Переключаем состояние
});









