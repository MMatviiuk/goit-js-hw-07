// Знаходимо всі елементи li.item
const categories = document.querySelectorAll('.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Проходимося по кожному елементу li.item
categories.forEach(category => {
  // Знаходимо текст заголовка h2 у кожній категорії
  const title = category.querySelector('h2').textContent;

  // Знаходимо всі елементи li у списку під цим заголовком
  const itemsCount = category.querySelectorAll('li').length;

  // Виводимо назву категорії та кількість елементів
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
