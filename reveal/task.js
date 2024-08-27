// Функция для проверки, виден ли элемент в окне просмотра
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обработки прокрутки
function handleScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        if (isElementInViewport(reveal)) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);

// Вызываем функцию один раз для первоначальной проверки
handleScroll();
