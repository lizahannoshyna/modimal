document.querySelectorAll('.heart').forEach(function (heart) {
    heart.addEventListener('click', function () {
        heart.classList.toggle('filled'); // Добавляем или убираем класс 'filled' при клике
    });
});




const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Для екранів менше 991px
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true, // додатково, якщо бажаєте динамічні кулі
        },
        navigation: false, // Вимкнути кнопки навігації
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // Для екранів 991px і більше
      991: {
        slidesPerView: 4,
        spaceBetween: 50,
        pagination: false, // Вимкнути пагінацію
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
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









