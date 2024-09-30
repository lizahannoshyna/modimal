function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    const screenWidth = window.innerWidth;

    // Определяем, какой файл загрузить
    const headerFile = screenWidth < 992 ? 'partials/header-resize/header-mobile.html' : 'partials/header-resize/header-desktop.html';

    // Загружаем нужный хедер
    fetch(headerFile)
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => console.error('Ошибка загрузки хедера:', error));
}

// Загружаем хедер при загрузке страницы
document.addEventListener('DOMContentLoaded', loadHeader);

// Загружаем хедер при изменении размера окна
window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    
    // Проверяем, нужно ли перезагрузить хедер при изменении ширины экрана
    if ((currentWidth < 992 && window.lastWidth >= 992) || (currentWidth >= 992 && window.lastWidth < 992)) {
        loadHeader();
    }
    window.lastWidth = currentWidth;
});
