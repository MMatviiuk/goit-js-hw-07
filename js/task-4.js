// Отримуємо посилання на форму логіна
const loginForm = document.querySelector(".login-form");

// Додаємо обробник події 'submit' до форми
loginForm.addEventListener("submit", function (event) {
  // Відміняємо стандартну поведінку форми (перезавантаження сторінки)
  event.preventDefault();

  // Отримуємо значення полів email та password, видаляючи пробіли по краях
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email,
    password,
  };

  // Виводимо об'єкт з даними у консоль
  console.log(formData);

  // Очищуємо поля форми
  loginForm.reset();
});
