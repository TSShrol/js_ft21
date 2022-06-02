// умова ? вираз1 : вираз2
let x = -3;
let absX;
absX = (x < 0) ? -x : x;
console.log(absX);
let myVar;
if (myVar) {
    console.log(`Зміна myVar має значення: ${myVar}`);
}
if (myVar !== undefined && myVar !== null) {
    console.log(`Зміна myVar має значення: ${myVar}`);
}

let flag = true;
x = NaN;
if (x) {//false

}
let st = "";
if (st) {//flase

}
//Object
let user = { name: "Anatoliy" };//true
let human = {}; //true
// Запросіть у користувача п’ятирозрядне число і визначте,
// чи є воно паліндромом

let number = +prompt("input number:");
//12321

let lPart, rPart = '';
//1
rPart = rPart + number % 10; //1
2//
console.log(rPart);
3//
number = Math.trunc(number / 10);//1232

rPart = rPart + number % 10; //2
console.log(rPart);
number = Math.trunc(number / 100);//12
lPart = number;
console.log(number);

if (lPart === parseInt(rPart)) {
    console.log("polindrom!");
} else {
    console.log("not polindrom!");
}

// x^2+y^2=R^2
//(x-x1)^2+(y-y1)^2=R^2

let pointX = 23, pointY = 10;
let R = 34;
if (pointX ** 2 + pointY ** 2 <= R ** 2) {
    console.log("true");
} else {
    console.log("false");
}

/*
  0-499 грн знижка 0%
  >=500 - знижка 5%
  >=1000 - знижка 10%
  >=5000 - знижка 15%
  Вивести варітсть чеку.
*/

let suma = +prompt("Input suma: ");

if (suma > 500 && suma < 1000) {
    console.log("5%");
    console.log(suma - suma * 0.05);

} else if (suma >= 1000 && suma < 5000) {
    console.log("10%");
    console.log(suma - suma * 0.1);
} else if (suma > 5000) {
    console.log("15%");
    console.log(suma - suma * 0.15);
} else if (suma > 0 && suma < 500) {
    console.log("0%");
    console.log(suma);
}


if(suma>=5000){
    console.log("15%");
    console.log(suma - suma * 0.15); 
}else if(suma>=1000){
    console.log("10%");
    console.log(suma - suma * 0.1);
}else if(suma>=500){
    console.log("5%");
    console.log(suma - suma * 0.5);
}else{
    console.log("0%");
    console.log(suma);
}

// Порахувати кількість цифр в числі та вивести кожну цифру консоль
// Наприклад, число  465432454   9 цифр
let countNUmber=0;
let cifra;
number=+prompt("Input number for counter");
//2454
// cifra=number%10; //4
// console.log(cifra);
// number=Math.trunc(number/10);//245
// countNUmber++;

// cifra=number%10; //5
// console.log(cifra);
// number=Math.trunc(number/10); //24
// countNUmber++;

// cifra=number%10; //4
// console.log(cifra);
// number=Math.trunc(number/10); //2
// countNUmber++;

// cifra=number%10; //2
// console.log(cifra);
// number=Math.trunc(number/10); //0
// countNUmber++;

while(number>0){
    cifra=number%10; 
    console.log(cifra);
    number=Math.trunc(number/10); 
    countNUmber++;
}

console.log("countNumber="+countNUmber);


// 1) Виведіть # стільки разів, скільки вказав користувач.
// 2) Користувач ввів число, а на екран було виведено всі числа:
// від введеного до 0.
let n=+prompt("Input number for print #");
// n=3;
let step=0;
while(step<n){
    console.log("#");
    step++;
}
console.log("finish while!");

// step<=n
// 0<3    step=1  #
// 1<3    step=2  #
// 2<3    step=3  #
// 3<3   




