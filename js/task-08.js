document.querySelector('.login-form').addEventListener('submit',
    e => {
        e.preventDefault();        
        if ([...e.target.elements].some(x => x.value === '' && x.type!=='submit')) {
            alert('Треба заповнити всі поля..'); return;
        } 
        const frmData = {
            [e.target.elements[0].name]: e.target.elements[0].value,
            [e.target.elements[1].name] : e.target.elements[1].value,
        }        
        console.log(frmData);
        e.target.reset();
    }
)

    // Обробка відправлення форми form.login-form повинна 
    // відбуватися відповідно до події submit.
    
    // Під час відправлення форми сторінка не повинна перезавантажуватися.
    
    // Якщо у формі є незаповнені поля, виводь alert з попередженням про
    // те, що всі поля повинні бути заповнені.
    
    // Якщо користувач заповнив усі поля і відправив форму, збери значення
    // полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення
    // поля - значенням властивості. Для доступу до елементів форми
    // використовуй властивість elements.
    
    // Виведи об'єкт із введеними даними в консоль і очисти значення полів 
    // форми методом reset.