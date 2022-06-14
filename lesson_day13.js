// // Напишіть функцію, яка перевіряє, чи є переданий рядок паліндромом.
// // пилип   5/2 =3  6/2=3 7/2 5/2=2
// //string, number, boolean, symbol, null, undefind bigint 
// //String, Number, Boolean, Symbol, Bigint 
// function polindrom(str = "") {
//     let len, counter = 0;
//     let strN = str.toLowerCase;
//     // if (str.length % 2 == 1) len = Math.round(str.length / 2) + 1;
//     // else len = str.length / 2;
//     for (let i = 0; i < Math.round(strN.length / 2); i++) {
//         if (strN[i] !== strN[strN.length - 1 - i]) return false;
//     }
//     return true;
// }
// console.log(polindrom("pilip"));


// // Напишіть функцію, яка приймає рядок та виводить статистику: 
// // кількість літер, кількість цифр та кількість інших знаків.

// let str = "";
// for (let i = 0; i <= 255; i++) {
//     str += String.fromCodePoint(i);
// }

// console.log(str);
// // str.codePointAt(pos) -  return code of symbol in position pos
// // String.fromCodePoint(code) -  return symbol by code

// function selectSymbol(str = "") {
//     let countSymbol = 0, countDigit = 0, countOther = 0;
//     for (const symbol of str) {
//         let code = symbol.codePointAt(0);
//         if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) countSymbol++;
//         else if (code >= 48 && code <= 57) countDigit++;
//         else countOther++;
//     }
//     alert(`В реченні букв: ${countSymbol}, цифр: ${countDigit} та інших символів: ${countOther}: `)
//     return { countSymbol, countDigit, countOther };

// }

// selectSymbol("sdfsdfjk 45684985 lkjd*&*(&@(#&fkd");
// let resObj = selectSymbol("sdfsdfjk 45684985 lkjd*&*(&@(#&fkd");
// console.log(resObj.countSymbol + " " + resObj.countDigit);

// /*
// Напишіть функцію, яка приймає двозначне число і повертає його в текстовому вигляді. Наприклад: 35 – тридцять п’ять, 89 – вісімдесят дев’ять,
// 12 – дванадцять.
// */

// // console.log(numbers_symbol[20]);
// let n = 21;
// function convertorNumberToStr(number) {
//     let numbers_symbol = {
//         1: "один",
//         2: "два",
//         20: "двадцять"
//     }
//     let strNumber = numbers_symbol[Math.trunc(number / 10) * 10] + " " + numbers_symbol[number % 10];
//     return strNumber;
// }

// console.log(convertorNumberToStr(n));
// /*
// Напишіть функцію, яка замінює в отриманому рядку ве-
// ликі літери на маленькі, маленькі – на великі, а цифри – на
// знак нижнього підкреслення.
// */

// function convertUpToLow(str = "") {
//     let strNew = "";
//     for (const symbol of str) {
//         if (symbol.codePointAt(0) >= 48 && symbol.codePointAt(0) <= 57) strNew+="_";
//         else{ 
//             let isUC = symbol.toUpperCase() == symbol;
//             if (isUC) strNew += symbol.toLowerCase();
//             else strNew += symbol.toUpperCase();
//         }
//     }
//     return strNew;
// }

// let stringNew=convertUpToLow("GrgsGHa ^#@*# 943 UU");

// console.log(stringNew);


// /*
// Напишіть функцію, яка підраховує кількість слів у реченні.
// */

// function countWordsInString(str=""){
//     let arrWord=str.split(" ");
//     return arrWord.length;   
// }


// console.log("Count words="+countWordsInString("сьогодні прекрасна погода!"));
// // Напишіть функцію, яка повертає найдовше слово з речення.
// // maxLenWord("sdf sdf sdf s fsdfs");
// function maxLenWord(str=""){
//     let arrWord=str.split(" ");
//     console.log(arrWord);
//     let maxLen=-Infinity;
//     let maxWord=""
//     for (const word of arrWord) {
//         if(word.length>maxLen){
//             maxLen=word.length;
//             maxWord=word;
//         }
//     }
//     return maxWord;
// }

// let maxWord=maxLenWord("Сонячна погода");

// alert(maxWord);

// let myFunc=maxLenWord;
// /*
// Напишіть функцію, яка підраховує середню довжину слова у реченні.
// */

// let avargeLenWord=function(str=""){
//     let suma=0;
//     let arrWord=str.split(" ");
//     for (const word of arrWord) {
//         suma+=word.length;
//     }
//     return Math.round(suma/arrWord.length);
// }

// console.log(avargeLenWord("Cool day"));

//*********************************************************************************************
//*********************************************************************************************
//Затримки та інтервали

// setTimeout(function/Code, delayTime, arg1, arg1, ... )  return identificator timera
// 1 sec= 1000 milsec
// function printWord() {
//     console.log("Hi, world!");
// }

// setTimeout(printWord, 1000);

// function printHelloName(name) {
//     console.log(`Hello, ${name}`);
// }
// setTimeout(printHelloName, 2000, "Olga");

// setTimeout(function () {
//     console.log("Hi, world!");
// }, 3000);

// let id_timer = setTimeout(function (name) {
//     console.log("Hi, " + name);
// }, 5000, "Igor");

// console.log("idtimer= " + id_timer);


// clearTimeout(id_timer);

/*
 Написати функцію, яка послідовно буде виводити в консоль числа від a до b через інтервал 2 секунди
*/



// let a=1;
// let b=10;
// let timer=setTimeout(
//     function print() {
//         console.log(a);
//         if (a!==b){
//             setTimeout(print, 20);
//             a++;
//         }

//     },2000);

// setInterval(function(){
//     alert("Hello");
// } , 2000);

// function printNumber(a, b, interval) {
//     let it_timer3 = setInterval(
//         function() {
//             document.write(a+" ");
//             if (a == b) {
//                 clearInterval(it_timer3);
//                 // return;
//             }
//             a++;
//         }, 200);
   
// }
// printNumber(10,20,200);

const today= new Date("2022-05-23");
console.log(today);
// 1/01/1970
let date1=new Date("05/27/2022");
console.log(date1);
let date2=Date.now();
console.log(date2);
let date3=new Date(date2);
console.log(date3);
console.log(date3.getDay());
// console.log(date2.getMonth());
console.log(date1.getDate);