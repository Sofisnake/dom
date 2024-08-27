document.addEventListener('DOMContentLoaded', function() {
    // Функция для смены активного элемента в ротаторе
    function startRotator(rotator) {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;

        function changeCase() {
            // Убираем класс активного элемента у текущего
            cases[currentIndex].classList.remove('rotator__case_active');
            
            // Переходим к следующему элементу
            currentIndex = (currentIndex + 1) % cases.length;
            
            // Добавляем класс активного элемента к новому
            cases[currentIndex].classList.add('rotator__case_active');
        }

        // Смену текста выполняем каждую секунду
        setInterval(changeCase, 1000);
    }

    // Находим все элементы ротаторов на странице и запускаем их
    document.querySelectorAll('.rotator').forEach(startRotator);
});
