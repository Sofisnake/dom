document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы управления размером шрифта
    const fontSizeControls = document.querySelectorAll('.book__control_font-size a');
    // Получаем элемент читалки
    const book = document.getElementById('book');

    // Функция для изменения размера шрифта
    function changeFontSize(size) {
        // Удаляем все классы изменения размера шрифта
        book.classList.remove('book_fs-small', 'book_fs-big');
        
        // Добавляем нужный класс в зависимости от выбранного размера
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    }

    // Обработчик кликов на элементы управления размером шрифта
    fontSizeControls.forEach(control => {
        control.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем действие по умолчанию ссылки
            
            // Удаляем класс активного элемента у всех ссылок
            fontSizeControls.forEach(link => link.classList.remove('font-size_active'));
            
            // Добавляем класс активного элемента к текущей ссылке
            this.classList.add('font-size_active');
            
            // Изменяем размер шрифта в зависимости от выбранного размера
            const size = this.getAttribute('data-size');
            changeFontSize(size);
        });
    });
});
