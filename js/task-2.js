// Масив об'єктів з даними про зображення
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Отримуємо посилання на список галереї
const galleryList = document.querySelector('.gallery');

// Створюємо розмітку для галереї з використанням шаблонних рядків
const galleryMarkup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-image"></li>`
  )
  .join('');

// Додаємо всю розмітку галереї до DOM за одну операцію
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// Стилізація галереї з використанням Flexbox
galleryList.style.display = 'flex';
galleryList.style.gap = '20px';
galleryList.style.listStyle = 'none';

// Задаємо стилі для кожного зображення в галереї
const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach(img => {
  img.style.maxWidth = '100%';
  img.style.height = 'auto';
});
