document.querySelector('#font-size-control').addEventListener('input',
    e => {
        document.querySelector('#text').style.fontSize = `${e.target.value}px`
    });

// Напиши скрипт, який реагує на зміну значення 
// input#font - size - control(подія input) і 
// змінює інлайн - стиль span#text, оновлюючи 
// ластивість font - size.В результаті, перетягуючи
// повзунок, буде змінюватися розмір тексту.