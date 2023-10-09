function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('.change-color').addEventListener('click',
  e => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    document.querySelector('.color').textContent = color.toUpperCase();
   }
)
// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color