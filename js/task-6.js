// Функція для генерування випадкового кольору у форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо посилання на елементи управління: інпут, кнопки створення і видалення, контейнер для боксів
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Функція для створення колекції елементів <div>
function createBoxes(amount) {
  const elements = []; // Масив для збереження створених елементів

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; // Розмір кожного наступного елемента збільшується на 10px
    const box = document.createElement('div'); // Створюємо новий <div>
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); // Присвоюємо випадковий колір фону
    elements.push(box); // Додаємо створений <div> до масиву
  }

  // Додаємо всі створені елементи до контейнера за одну операцію
  boxesContainer.append(...elements);
}

// Функція для очищення контейнера з боксами
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Видаляємо всі створені елементи
}

// Обробник події для кнопки створення боксів
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value); // Отримуємо кількість боксів із введеного значення

  // Перевірка, чи значення введене в межах від 1 до 100
  if (amount >= 1 && amount <= 100) {
    destroyBoxes(); // Очищаємо попередні елементи
    createBoxes(amount); // Створюємо нові елементи
    input.value = ''; // Очищаємо значення інпуту
  } else {
    alert('Please enter a number between 1 and 100'); // Виводимо попередження, якщо значення поза межами
  }
});

// Обробник події для кнопки видалення боксів
destroyButton.addEventListener('click', destroyBoxes);
