const output = document.querySelector('#name-output');
document.querySelector('#name-input').addEventListener('input',
    e => {
        output.textContent = e.target.value?e.target.value: 'Anonymous';       
    })
    
// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне 
// значення в span#name - output.Якщо інпут порожній, у спані
// повинен відображатися рядок "Anonymous".