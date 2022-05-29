// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const bodyRef = document.querySelector('body');
const colorNameRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');

btnRef.addEventListener('click', event => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorNameRef.textContent = getRandomHexColor()
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
