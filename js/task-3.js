// Отримуємо посилання на елементи інпуту та виходу імені
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо обробник події 'input' до елемента nameInput
nameInput.addEventListener('input', () => {
  // Видаляємо пробіли на початку і в кінці введеного значення
  const trimmedName = nameInput.value.trim();

  // Якщо значення порожнє, виводимо 'Anonymous', інакше - введене ім'я
  nameOutput.textContent = trimmedName === '' ? 'Anonymous' : trimmedName;
});
