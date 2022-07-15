// // 1. Створюємо новий об'єкт XMLHttpRequest (ActiveXobject)
// let xhr = new XMLHttpRequest();

// // 2. Конфігуріруем його: GET-запит на URL 'phones.json' async
// xhr.open( 'GET', 'phones.json', false);

// // 3. Відсилаємо запит
// xhr.send();


// // 4. Якщо код відповіді сервера не 200, то це помилка
// if (xhr.status != 200) {
// // обробити помилку
//     alert (xhr.status + ':' + xhr.statusText); // приклад виведення: 404: Not Found
// } else {
// // вивести результат
// alert (xhr.responseText); // responseText - текст відповіді.
// }


let xhr = new XMLHttpRequest();

xhr.open('GET', 'example.txt');

xhr.send(); // (1) 

xhr.onreadystatechange = function () {   // (3)
    if (xhr.readyState != 4) return;

    button.innerHTML = 'Готово!';

    if (xhr.status != 200) {
        alert(xhr.status + ':' + xhr.statusText);
    } else {
        //text, JSON, BLOB ARRAYBUFFER , document (XML), "JSON" => responseType
        alert(xhr.responseText);
        // console.log(JSON.parse(xhr.responseText));
    }

}

button.innerHTML = 'Завантажую ...'; // (2)
button.disabled = true;


