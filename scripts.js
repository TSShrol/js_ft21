'use strict'
console.log("Working oyside scripts!");
var a = 2; // b00000010 Number
let b = 4;
console.log(a);
a = "Olga"; // String
console.log(a + b);
let $name = "Petro";
let _age = 18;
console.log(a + b);
//Number -2^53 to 2^53
// вивести на запит введення ымены користувача. привытання його на нашый сторынцы
// let firstName;
// firstName=prompt("Input your name, please","NoNe");
// console.log(firstName);
// let text=`Hello, ${firstName}! How are you?`;
// alert(text);
//BigInt
//null undefind

//унарні (-,+,++, --), бінарні (+,-,/,*,%), тернарні
let n1 = 3;
let n2 = 4;
console.log(-n1);
console.log("n2=", n2); //4
console.log("n2=", ++n2); //n2=n2+1
console.log("n2=", n2++); //n2=n2+1
console.log("n2=", n2); //4
let x = 10;
let y = 5 + (3 - 2) * x--;//
console.log("y=", y);
// console.log(5)
//!=  !==
// &&  - and;  ||  or;     ! not ;
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

// or 
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false
// not
console.log(!true) // false
console.log(!false) //true

console.log((2 > 3) || (4 < 5))

console.log("Apple" == "apple")
console.log(10 == '10')
let result = 5;
result = result + 4; // result+=4
console.log(result) //true
// /=
// *=
// %=
//  -=
//  **=
//  &&=   a=a && b      ||=     a=a || b
let sum = (2 + 5) * result;//

let number1 = 234;
let sumNumbers = "";
sumNumbers += String(number1 % 10); // sumNumbers=sumNumbers+number1%10    sumNumbers=4
number1 = Math.trunc(number1 / 10);// number1=23
sumNumbers += number1 % 10; //  sumNumbers=4+3=7
number1 = Math.trunc(number1 / 10);
sumNumbers += number1;//  sumNumbers=7+2=9
console.log(sumNumbers);

number1 = prompt("Введіть число", 0); //4543js
number1 = parseInt(number1); //4543
// parseInt() // 4545js
let resultNumber = String(number1 % 10) + Math.trunc(number1 / 10);
console.log(resultNumber);

//   0.0000005 => 5e-7 

let num1 = "JS";
let num2 = "22";
let result3 = isNaN(num1);
console.log(result3); //true  - num1 не число
result3 = isNaN(num2);
console.log(result3);   //false  - num1  число

//тернаррний оператор 
//   (перший операнд - умова) ? (другий операнд) : (третій операнд)
const keyValue = "fh$3fd";
// keyValue="45";

const a1 = 45;
const a2 = 67;
const resultMax = (a1 > a2) ? a1 : a2;
console.log(resultMax);


// left operand ?? right operand  ??=

const result1 = "JS" ?? "CSS";
console.log(result1);

const result2 = null ?? "CSS";
console.log(result2);

const result4 = undefined ?? "CSS";
console.log(result4);

let password = null;
let altpasword = "6464t_3T";
result = password ?? altpasword;
console.log(result);
password ??= altpasword;
console.log(password);

// let age = +prompt("Input age:");
// if (age >= 18) {
//     alert("Welcome!!!");
// }

// console.log("doing if");

// a = +prompt("input a");
// b = +prompt("input b");
// let max;
// if (a > b) {
//     max = a;
//     console.log("true a>b max=" + max);
// } else {
//     max = b;
//     console.log("false a>b max=" + max);
// }
//Задача 1
let ageHuman;
ageHuman = +prompt("Input ageHuman");
// (0 ; 12]    =>     ageHuman>0  і ageHuman<=12;
//  18-22 - Зеленський   35-44 -Зеленський   
if (ageHuman > 0 && ageHuman <= 12) {
    alert("дитина!");
} else if (ageHuman > 12 && ageHuman <= 18) {
    alert("підліток!");
} else if (ageHuman > 18 && ageHuman <= 60) {
    alert("дорослий!");
} else {
    alert("поважна людина!");
}

let keyKod = +prompt("Input key [0-4]");
// if (keyKod == 0) {
//     alert(")");
// } else if (keyKod == 1) {
//     alert("!");
// } else if (keyKod == 2) {
//     alert("@");
// } else if (keyKod == 3) {
//     alert("#");
// } else if (keyKod == 4) {
//     alert("$");
// } else {
//     alert("not key value!");
// }


switch (keyKod) {
    case 0:
        alert(")");
        break;
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    default:
        alert("not key value!");
}

//визначити робочий день чи вихідний
let day = 4;

if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
    console.log("working day!");
} else if (day == 6 || day == 70) {
    console.log("holiday!");
}

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("working day!");
        break;
    case 6:
    case 7:
        console.log("holiday day!");
        break;
    default:
        console.log("Error!!!!");
}
/*
Запросіть у користувача час (години, хвилини, секунди) та
перевірте коректність введених даних.
*/

let hour, minute, second;
hour = +prompt('Enter hour');
minute = +prompt('Enter minute');
second = +prompt('Enter second');
if (hour >= 1 && hour <= 24){
    if (minute >= 1 && minute <= 60){
        if (second >= 1 && second <= 60){
            alert(`${hour}:${minute}:${second}`);
        }else{
            alert('Please, enter correct second ');    
        }
    } else{
        alert('Please, enter correct minute');
    }
} else {
    alert('Please, enter correct hour');
}












