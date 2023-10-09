let counterValue = 0;
const valueEl = document.querySelector('#value');
document.querySelector('button[data-action="increment"]').addEventListener('click',
    () => { valueEl.textContent = ++counterValue; });
document.querySelector('button[data-action="decrement"]').addEventListener('click',
    () => { valueEl.textContent = --counterValue; });

// Створи змінну counterValue, в якій буде зберігатися поточне 
    // значення лічильника та ініціалізуй її значенням 0.
    // Додай слухачів кліків до кнопок, всередині яких збільшуй або
    // зменшуй значення лічильника.
    // Оновлюй інтерфейс новим значенням змінної counterValue.