// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const counterValue = document.querySelector('#value');
counterValue.value = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');


incrementBtn.addEventListener('click', function () {
  counterValue.value += 1;
  counterValue.innerHTML = counterValue.value;
})

decrementBtn.addEventListener('click', function () {
  counterValue.value -= 1;
  counterValue.innerHTML = counterValue.value;
})