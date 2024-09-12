document.querySelectorAll('.heart').forEach(function(heart) {
    heart.addEventListener('click', function() {
        heart.classList.toggle('filled'); // Добавляем или убираем класс 'filled' при клике
    });
});
