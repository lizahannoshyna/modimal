// Отримуємо елементи кнопок і поля вводу
const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn');
const quantityInput = document.querySelector('.quantity-input');

// Обробка натискання на кнопку зменшення
decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', () => {
        const quantitySelector = button.parentElement; // Знайдемо контейнер кількості
        const input = quantitySelector.querySelector('.quantity-input'); // Знайдемо поле вводу
        let quantity = parseInt(input.value); // Отримати поточне значення

        // Логування для перевірки
        console.log(`Current quantity: ${quantity}`); // Лог поточного значення

        // Зміна значення залежно від того, яку кнопку натиснули
        if (button.classList.contains('increase-btn')) {
            quantity += 1; // Збільшити на 1
        } else if (button.classList.contains('decrease-btn') && quantity > 1) {
            quantity -= 1; // Зменшити на 1 (мінімум 1)
        }

        input.value = quantity; // Встановити нове значення у поле вводу
        console.log(`New quantity: ${quantity}`); // Лог нового значення
    });
});
