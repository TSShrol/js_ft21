// Напишіть функцію, яка приймає 2 рядки та порівнює їх
// довжину. Функція повертає 1, якщо в першому рядку
// більше символів, ніж у другому; -1 – якщо у другому біль-
// ше символів, ніж у першому; 0 – якщо рядки однакової
// довжини.

function equelStr(str1="", str2=""){
    if(str1.length>str2.length) return 1;
    else if (str1.length<str2.length) return -1;
    else return 0;
}

console.log(equelStr("Java","JavaScript"));

// Напишіть функцію, яка переводить у верхній регістр перший символ переданого рядка.
function firstSymbolUpperCase(str=""){
    // return str[0].toUpperCase()+str.substring(1);
    return str[0].toUpperCase().concat(str.substring(1));
}

console.log(firstSymbolUpperCase("javascript is cool programing lang"));

//У всіх словах, що розділені пропуском, перевести перший символ в верхній регістр.
let text="У всіх словах, що розділені пропуском, перевести перший символ в верхній регістр."
function firstSymUpCaseWords(str=""){
    let arrWords=str.split(" "); 
    // console.log(arrWords);
    for(let i=0; i<arrWords.length; i++){
        arrWords[i]=firstSymbolUpperCase(arrWords[i]);
    }
    // console.log(arrWords);
    return arrWords.join(" ");
}

let textNew=firstSymUpCaseWords(text);
console.log(text);
console.log(textNew);

// Напишіть функцію, яка підраховує кількість голосних літер у переданому рядку.

function symbolVowels(str=""){
    let counter=0;
    // console.log(str.length);
    for (let i=0; i<str.length; i++) {
        switch(str.charAt(i).toLowerCase()){
            case "і":
            case "о":
            case "а":
            case "е":    
            case "и":
            case "і":
            case "у":  
            counter++;
        }
    }
    return counter;
}
console.log(symbolVowels(text));

// Напишіть функцію для перевірки спаму в переданому
// рядку. Функція повертає true, якщо рядок містить спам.
// Спамом вважати наступні слова: 100% безкоштовно, збільшення продажів, 
// тільки сьогодні, не видаляйте, ххх.
// Функція має бути нечутливою до регістру.

function isSpam(text=""){
    let arrSpam=["100% безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте", "ххх"];
    for (const spam of arrSpam) {
        if(text.includes(spam)) return true;
    }
    return false;
}
text="У всіх словах, що розділені пропуском, перевести перший символ в верхній регістр xxx ххх."
console.log(isSpam(text));

function isSpamV2(text=""){
    let arrSpam=["100% безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте", "ххх"];
    let flag=false;
    for (let i=0; i<arrSpam.length; i++) {
        if(text.includes(arrSpam[i])) {
            flag=true;
            break;
        }
    }
    return flag;
}
console.log(isSpam(text));

// Напишіть функцію скорочення рядка. Функція приймає
// рядок та його максимальну довжину. Якщо довжина рядка
// більша, ніж максимальна, необхідно відкинути зайві
// символи, додавши замість них трикрапку.
// Наприклад: truncate("Hello, world!", 8) має повернути "Hello...".

function truncate(str="",maxLen){
    if(str.length>maxLen && maxLen>3){
        return str.slice(0,maxLen-3)+"..."
    }
    return str;
}
console.log(truncate("Hello, world!", 4));



// let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let isСontinue = true;

// while (true) {
// 	for (const iterator of week) {
// 		isСontinue = !!prompt(`${iterator}. Want to see the name of the next day of the week?`, 'yes');
// 		if (!isСontinue) break;
// 	}
// 	if (!isСontinue) break;
// }

// //7
// Напишіть функцію, яка приймає час (години, хвилини, секунди) і виводить його на
// екран у форматі «година: хвилини:секунди». Якщо при виклику функції хвилини
// та/або секунди не були передані, виводити їх як 00.



function formatTime(hour, minut, second) {
    let hms = hour;

    if(minut){
        hms += ':' + minut;
    } else {
        hms += ':00';
    }

    if(second){
        hms += ':' + second;
    } else {
        hms += ':00';
    }

    console.log(hms);
    return hms;
}

let hour = +prompt("Input hour: ");
let minut = +prompt("Input minut: ");
let second = +prompt("Input second: ");

const result = formatTime(hour, minut, second);

alert("Your time " + result);



//8
// Напишіть функцію, яка приймає години, хвилини та секунди і повертає
// цей час у секунди

function allSec(hour, minute, seconds){
    const findSeconds = (hour * 3600) + (minute * 60) + seconds;
    return findSeconds;

}
console.log(allSec(2, 15, 55));
console.log(allSec(20, 10, 16));
console.log(allSec(8, 15, 55));




// 9. Напищіть функцію, яка приймає кількість секунд, переводить їх у години,
// хвилини та секунди і повертає у вигляді рядка «година:хвилини:секунди»


function formatNumber(num) {
    return num < 10 ? '0' + num : num;
}

function allSeconds(a){

    let hour, minute, seconds;

    hour = Math.trunc(a / 3600);
    //console.log("Година: " + hour);
    a = a % 3600;

    minute = Math.trunc(a / 60);
    //console.log("Хвилина: " + minute);
    a = a % 60;

    seconds = a;
    //console.log(("Секунди: " + seconds));

    return formatNumber(hour) + ':' + formatNumber(minute) + ':' + formatNumber(seconds);
}

console.log(allSeconds(8413));
console.log(allSeconds(123));
console.log(allSeconds(1023));
console.log(allSeconds(65123));
console.log(allSeconds(12300));
console.log(allSeconds(105023));


// 10. Напишіть функцію, яка підраховує різницю між датами. Функція
//  приймає 6 параметрів, що описують 2 дати, 
// і повертає результат у вигляді рядка «година:хвилини:
// секунди». Під час виконання завдання використовуйте 
// функції з попередніх 2 завдань: спочатку обидві дати переведіть 
// у секунди, дізнайтеся різницю в секундах, а потім 
// різницю переведіть назад у «година:хвилини:секунди»


// function calcSecondsInDate(year, month, day) {
//     const secondsInDay = 24 * 60 * 60;
//     return day * secondsInDay + month * 30 * secondsInDay + year * 365 * secondsInDay;
// }

// function calcRiznytcia(year1, month1, day1, year2, month2, day2) {
//     const seconds1 = calcSecondsInDate(year1, month1, day1);
//     const seconds2 = calcSecondsInDate(year2, month2, day2);
//     const secondR = seconds2 - seconds1;
//     console.log(secondR);

//     const formatSeconds = allSeconds(secondR);

//     return formatSeconds;
// }

// const riznytciaInSeconds = calcRiznytcia(2022, 5, 12, 2022, 5, 15);
// console.log(riznytciaInSeconds);


// для знаходження різниці у часових діапазонах

// function calcSecondsInDate2(hour, minute, seconds) {
//     const secondsInDay2 = allSec(hour, minute, seconds);
//     return secondsInDay2;
// }

// function calcRiznytcia(hour1, minute1, second1, hour2, minute2, second2) {
//     const seconds1 = calcSecondsInDate2(hour1, minute1, second1);
//     const seconds2 = calcSecondsInDate2(hour2, minute2, second2);
//     const secondR = seconds2 - seconds1;
//     console.log(secondR);

//     const formatSeconds = allSeconds(secondR);

//     return formatSeconds;
// }

// const riznytciaInSeconds1 = calcRiznytcia(15, 5, 12, 20, 12, 15);
// console.log(riznytciaInSeconds1);


