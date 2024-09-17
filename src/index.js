document.querySelectorAll('.heart').forEach(function(heart) {
    heart.addEventListener('click', function() {
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
