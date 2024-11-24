// Функція для генерування випадкового кольору у форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо посилання на кнопку зміни кольору та елемент <span>, що показує колір
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Додаємо обробник події 'click' до кнопки зміни кольору
changeColorButton.addEventListener("click", () => {
  // Генеруємо новий випадковий колір
  const newColor = getRandomHexColor();

  // Змінюємо колір фону елемента <body> на новий колір
  document.body.style.backgroundColor = newColor;

  // Виводимо новий колір у текстовому вмісті елемента <span>
  colorSpan.textContent = newColor;
});
