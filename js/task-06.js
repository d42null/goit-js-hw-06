document.querySelector('#validation-input').addEventListener('blur',
    e => {        
        if (e.target.value.length != e.target.dataset.length) {
            e.target.classList.add('invalid')
            e.target.classList.remove('valid')
        }
        else {
            e.target.classList.remove('invalid');
            e.target.classList.add('valid')
        }      
})
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
//  Яка кількість символів повинна бути в інпуті, зазначається в його 
// атрибуті data - length.
//  Якщо введена правильна кількість символів, то border інпуту стає 
// зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які 
// ми вже додали у вихідні файли завдання.
