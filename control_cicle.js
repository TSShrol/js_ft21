// // 2) Користувач ввів число, а на екран було виведено всі числа:
// // від введеного до 0.
// let number = +prompt("Input number");

// // 6 => 0 1 2 3 4 5 6

// let count = 0;
// while (count <= number) {
//     console.log(count);
//     count++;
// }

// // number=6
// // count=number;
// while (number >= 0) {
//     console.log(number);
//     number--;
// }

// /*
// 3 .Запросіть число та ступінь. Зведіть число у вказаний сту-
// пінь та виведіть результат.
// 4. Запросіть 2 числа і знайдіть всі спільні дільники.
// 5. Підрахуйте факторіал числа, введеного користувачем.
// */
// // 2**4 => ((2*2)*2)*2

// let num, step, index, pow;
// num = +prompt("num="); //2
// step = +prompt("step="); //4
// // let hello;
// pow = 1;
// index = 1; // num*=num   step=4  index=1   2    3   4  5! stop
// while (index <= step) {
//     // hello="hello";
//     // var text="text";
//     pow = pow * num;
//     console.log("pow=" + pow);
//     index++;
// }
// // console.log(hello);
// // console.log(text);
// // num=2   pow=1           index=1
// //1  1<=4   pow=2    index=2
// //2  2<=4   pow=4    index=3
// //3  3<=4   pow=8    index=4
// //4  4<=4   pow=16   index=5
// //5  5<=4 false exist
// console.log(pow);

// // Нехай температура в кімнаті має початкове значення t=18.
// // Зростає кожну хв (ітерація) на 3 градуси (хтось забув вимкнути плиту).
// // Вивести на екран повідомлення "Пожежа!" , якщо t>60

// //Вхідні дані: t=18, deltaT=3
// //Вихідні: виведення повідомлення "Пожежа!" , якщо t>60

// let t = 18;
// const deltaT = 3;

// //t => 18+3=21
// //t => 21+3=24
// //...
// //t=>  57+3=60    t<=60
// //t=>  60+3=60   63<=60

// while (t <= 60) {
//     console.log(t);
//     t = t + deltaT;
// }
// console.log("end while => " + t);
// console.log("Пожежа!");
// console.log("Пожежа ліквідована!");
// // do-while
// t = 18;
// do {
//     console.log(t);
//     t = t + deltaT;
// } while (t <= 60)
// console.log("end while => " + t);
// console.log("Пожежа!");

// //Порахувати суму чисел від 1 до 10.
// // 1+2+3+4+6+7+8+9+10
// // Вхідні дані: suma=0 , n=10, profit=1
// // Алгоритм: ?
// //Вихідні дані: suma=?  10 чисел
// let suma = 0;
// let n = 10;
// let profit = 1; //profir++

// while (profit < n) {
//     suma = suma + profit;
//     profit++;
// }

// console.log("suma " + suma);

// // Нехай є мішечок із монетами. Кількість монет невідома.
// // Нам потрібро їх порахувати. Кількість монет задана завчасно.
// // На екран виводити рахунок монет: 1-монета, 2-монета, 3-монета...
// // 1 variant
// let countMonet = 12;
// let currentMonet = 1;

// while (currentMonet <= countMonet) {
//     console.log(currentMonet + " - монета");
//     currentMonet++;
// }

// // 2 variant
// countMonet = 12;
// currentMonet = 0;

// while (currentMonet < countMonet) {
//     currentMonet++;
//     console.log(currentMonet + " - монета");
// }


// //do-while для 2 варіанту
// countMonet = 12;
// currentMonet = 0;
// do {
//     currentMonet++;
//     console.log(currentMonet + " - монета");
// } while (currentMonet < countMonet)

// // Потрібно отримати  два випадкових числа, що визначають 
// // номер 2-х виграшних квитків

// let n1 = Math.trunc(Math.random() * 100);
// let n2 = Math.trunc(Math.random() * 100);

// // if(n1==n2){
// //     n2=Math.trunc(Math.random()*100);
// // }
// // if(n1==n2){
// //     n2=Math.trunc(Math.random()*100);
// // }
// // ...

// while (n1 == n2) {
//     n2 = Math.trunc(Math.random() * 100);
// }
// console.log(n1 + " and " + n2);

// console.log("************************");
// n1 = Math.trunc(Math.random() * 100);
// let countIter = 0;
// do {
//     countIter++;
//     n2 = Math.trunc(Math.random() * 100);
// } while (n1 == n2)
// console.log(n1 + " and " + n2);
// console.log(countIter);

// res = confirm("Подовжити далі?");
// alert(res);
// let answer;
// do
//     answer = prompt("Continue:  yes  or no");
// while (answer != "no" && answer != "yes")

// /*
// Запропонуйте користувачеві розв’язати приклад 2 + 2 * 2,
// доки він не надасть правильну відповідь.
// */
// let message;
// do {
//     message = +prompt("2+2*2=?");
// } while ((2 + 2 * 2) !== message)

// // Нехай є мішечок із монетами. Кількість монет нам невідома.
// // Нам потрібро їх порахувати. Кількість монет задана завчасно.
// // На екран виводити рахунок монет: 1-монета, 2-монета, 3-монета...
// // countMonet=12;
// //currentMonet=0;

// for (let currentMonet = 1; currentMonet <= 12; currentMonet++) {
//     console.log(currentMonet + " - монета");
// }

// for (currentMonet = 1; currentMonet <= 12; currentMonet++) {
//     console.log(currentMonet + " - монета");
// }

// currentMonet = 1;
// for (; currentMonet <= 12; currentMonet++) {
//     console.log(currentMonet + " - монета");
// }

// //working like while
// currentMonet = 1;
// for (; currentMonet <= 12;) {
//     console.log(currentMonet + " - монета");
//     currentMonet++
// }

// currentMonet = 1;
// for (; ;) {
//     console.log(currentMonet + " - монета");
//     currentMonet++;
//     if (currentMonet > 12)
//         break;
// }


// /*
// Виведіть усі числа від 1 до 100, які кратні числу зазначеному користувачем.
// */

// let kratne = +prompt("Input number for solution=");
// for (let i = 1; i <= 100; i++) {
//     if (i % kratne == 0) console.log(i);
// }

// /*
// Виведіть кожен 4-ий елемент із зазначеного користувачем
// діапазону. Користувач вказує мінімальне та максимальне
// значення діапазону.
// */

// let startValue = +prompt("Input start value");
// let endValue = +prompt("Input end value");

// for (let i = startValue; i <= endValue; i += 4) {
//     console.log(i);
// }


/*
Запросіть у користувача число і на скільки цифр його змістити.
Змістіть цифри числа та виведіть результат (якщо
число 123456 змістити на 2 цифри, то вийде 345612)
*/
//1 version
let inputN = prompt("Input n:");
let countCifra =+prompt("Input seek:"); 
let lenN=inputN.length;
inputN = +inputN;
console.log(inputN);
console.log(lenN);
let leftN = "", rightN = "", res="";
while (lenN > countCifra) {
    leftN = inputN % 10+leftN;
    // console.log(leftN);
    inputN =Math.trunc(inputN / 10);
    lenN--;
}
rightN=inputN
res=leftN+rightN;
console.log(res);
// 2 version
// 1) Знаходження кількості цифр
inputN=+prompt("Input number:");
let seekN=+prompt("Input step:")
let workingN=inputN;
console.log(workingN);
let countCifr=0;  //lenN - аналогічна

while(workingN!==0){  //>0
   workingN=Math.trunc(workingN/10);
   console.log(workingN);
   countCifr++;
}
console.log(countCifr);

// 345
// 345%10=5
//  Math.trunc(345/10)!==0     34==0

//  Math.trunc(34/10)!==0  4==0
//  Math.trunc(3/10)!==0    0==0 3
//  2) Виконуємо зсув
//  1234 5 6    s+=6*(10**countIterateion)+5*10**(countIterateion)
//123456= 1*(10**5)+2*(10**4)+3*(10**3)+4*(10**2)+5*(10**1)+6*(10**0)
// step =3 

leftN = "",  res="";
for(let index=countCifr;countCifr>seekN; countCifr--){
    leftN = inputN % 10+leftN;
    // console.log(leftN);
    inputN=Math.trunc(inputN / 10);
}

res=leftN+inputN;
console.log(res);





