// Напишіть функцію, яка перевіряє, чи є передане
// їй число простим.

function isNumSimpleV1(number) {
    let flag = false;
    let count = 0; //кількість дільників числа
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) count++;
    }
    if (count == 2) flag = true;
    return flag;
}


function isNumSimpleV2(number) {
    // let count=0; //кількість дільників числа
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) return false;
    }
    return true;
}

console.log(isNumSimpleV1(19));
console.log(isNumSimpleV2(19));
console.log(isNumSimpleV3(19));

console.log(isNumSimpleV1(28));
console.log(isNumSimpleV2(28));
console.log(isNumSimpleV3(28));

function isNumSimpleV3(number) {
    let count = 0; //кількість дільників числа
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) count++;
    }
    if (count == 2) return true
    else return false;
}

// Підрахувати кількість простих чисел в діапазоні від 11 до 99
let countNumber = 0;

for (let i = 11; i <= 99; i++) {
    if (isNumSimpleV3(i)) {
        countNumber++;
        console.log(i);
    }
}
console.log("countNumber=" + countNumber);


// Підрахувати кількість простих чисел в діапазоні від a до b

function countSimpleRange(a, b) {
    let countNumber = 0;
    for (let i = a; i <= b; i++) {
        if (isNumSimpleV3(i)) {
            countNumber++;
            // console.log(i);
        }
    }
    return countNumber;
}

console.log(countSimpleRange(22, 548));
console.log(countSimpleRange(200, 1752));

// console.log(countNumber);


// Напишіть функцію, яка приймає число і виводить таблицю множення
// для цього числа. Викличте функцію для всіх чисел від 2 до 9.
/*
2 * 1 = 2
2 * 2 = 4
...
2 * 9 = 18

*/

function multiplyTable(number) {
    console.log("Multiply table on " + number + ":");
    for (let i = 1; i <= 9; i++) {
        console.log(`${number}*${i}=${number * i}`);
    }
}

for (let number = 1; number <= 9; number++) {
    multiplyTable(number);
}

/*
Напишіть функцію, яка виводить усі парні або непарні
числа у вказаному користувачем діапазоні. Які числа ви-
водити, визначається третім параметром типу bool (true –
парні, false – непарні).
*/

function isOddOrEvn(a, b, isParne) {
    for (let i = a; i <= b; i++) {
        if (isParne) {
            if (i % 2 == 0) console.log(i);
        } else {
            if (i % 2 !== 0) console.log(i);
        }
    }
}

isOddOrEvn(2, 8, false);


/*
Напишіть функцію, яка реалізує роботу оператора %. Функ-
ція приймає 2 параметри та повертає залишок від ділення
першого параметра на другий. У функції використовуйте
тільки + - * /, а оператор % не використовувати.
*/

/*
 15%9=6
   9*1+6=15
   15-9*1=3
   7/3 = 2...
   7-2*3 =1  =>   7- (3+3)=7-3-3=1
   3*2=3+3
   3*4=3+3+3+3
   
   a=7 b=3
   parseInt(a/b)=2
   a-b*parseInt(a/b)
*/



let a = 7, b = 3;

while (a >= b) {
    a = a - b;
}
console.log("%=" + a);
/*
a    b   a>=b   a-=b       
7    3    true   a=7-3
4    3   true    a=4-3
1    3    false  exit cicle

*/

function mod(a, b) {
    while (a >= b) {
        a = a - b;
    }
    return a;
}

//Обчислити вираз виду 2**3+45%4

console.log("result=" + (2 ** 3 + mod(45, 4)));


/*
    Напишіть функцію, яка приймає від 1 до 5 чисел і повертає більше з них.
*/

function suma(n1, n2 = 0, n3 = 0, n4 = null, n5 = null) {
    return n1 + n2 + n3 + n4 + n5;
}

console.log("Suma=" + suma(4));
console.log("Suma=" + suma(4, 5));
console.log("Suma=" + suma(4, 5, 6));
console.log("Suma=" + suma(4, 5, 6, 7));
console.log("Suma=" + suma(4, 5, 6, 7, 8));

/* arguments => 0, 1, ..   length => [3,4,89,34,67]
   max(3,4,89,34,67)       arguments => [3,4,89,34,67]
*/
function max() {
    let maxN = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        if (arguments[i] > maxN) maxN = arguments[i];
    }
    return maxN;
}
let maxNumber = max(3, 4, 89, 34, 67)
console.log("Max=" + maxNumber);


/*
Напишіть функцію, яка приймає дату (день, місяць, рік) і
повертає дату наступного дня у вигляді рядка «день.місяць.
рік». Перевірку на високосний рік бажано написати окре-
мою функцією.
*/

function hightYear(year) {
    if (year % 4 == 0 && year % 100 !== 0) return true;
    else return false;
}


function nextDate(day, month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (day == 31) { month++; day = 1; }
            else day++;
            break;
        case 4:
        case 6:
            if (day == 30) { month++; day = 1; }
            else day++;
            break;
        case 2:
            if ((day == 29 && hightYear(year)) || (day == 28 && !hightYear(year))) { day = 1; month++ }
            else day++;
            break;
        case 12:
            day = 1; month = 1; year++;
    }
    return day + "." + month + "." + year;

}

console.log(hightYear(2004));
console.log(nextDate(29,2, 2004));
console.log(nextDate(28,2, 2003));
console.log(nextDate(31,12, 2003));
