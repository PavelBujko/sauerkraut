const form = document.getElementById('feedbackForm');
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Останавливаем стандартное поведение формы

            const formData = new FormData(form);

            fetch("https://script.google.com/macros/s/AKfycbxrQXWQ3dWKt89sRK8zM-e-x6RfrQDzZE8ZloC4DMiZmorgZUFHOE5cNYiAIV9hrGDM/exec", {
                method: "POST",
                mode: "no-cors", // Используем режим no-cors
                body: formData
            })
            .then(() => {
                alert('Form successfully submitted');
                form.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert('Error submitting the form.');
            });
        });


        // Функция для скрытия формы
function closeForm() {
    document.querySelector('.bg_dark_send_form').style.display = 'none';
}

        // Обработчик для кнопки закрытия
document.querySelector('.top button').addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке, если есть
        closeForm();
});

    // Обработчик для клика на тёмную область фона
document.querySelector('.bg_dark_send_form').addEventListener('click', function(event) {
    if (event.target === this) {
        closeForm();
    }
});





// Функция для открытия формы
function openForm() {
    document.querySelector('.bg_dark_send_form').style.display = 'flex';
}

// Получаем все кнопки с классом 'form_open'
const openButtons = document.querySelectorAll('.form_open');

// Добавляем обработчик события для каждой кнопки
openButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке, если есть
        openForm();
    });
});