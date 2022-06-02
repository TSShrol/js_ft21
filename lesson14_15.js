// 1*2*3=> 3!
// 1*2*.. *n=> n!
// 2!=1*2
// 3!=1*2*3

// let n = +prompt("Input n:")
// let factorial = 1;
// for (let i = 2; i <= n; i++) {
//     factorial = factorial * i; //factorial*=i
// }

// alert(factorial);

function factorial1(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial = factorial * i; //factorial*=i
    }
    return factorial;
}

alert(factorial1(3));
// 0=1!
// 1=1!
// (1)*2=2!  => 1! * 2 =2!
// (1*2)*3=3!  => 2!*3 = 3!
// (1*2*3)*4=4!  => 3!*4 = 4!
// ...
// 1*2*3*...*(n-1)*n=> (n-1)!*n = n! 

//1) повернення певного значення при певному значенні параметра
//2) повторний виклик функції самої себе

function factorial(n) {
    if (n == 1) return 1
    else return factorial(n - 1) * n
}



// n=4
// factorial(4)=> factorial(3)*4=>(factorial(2)*3)*4 =>((factorial(1)*2)*3*)4=>((1*2)*3)*4=24
alert(factorial(3));
alert(factorial(4));

/*
    Напишіть функцію, яка виводить усі числа із заданого користувачем діапазону у прямому порядку. І
    4
    ((("1")+"2")+"3") +"4"
*/
let number=+prompt("Input Number");

function print(n){
    if (n==1) return "1";
    else return print(n-1)+" "+n;
}

alert(print(4));

function print2(n){
    if (n==1) return "1";
    else return n+" "+print(n-1);
}
alert(print2(4));

/*
Напишіть функцію, яка приймає число і виводить відповідну кількість
вкладених пар круглих дужок.
Наприклад: число 4 – (((()))).    1   "()"     2   "("+"()"+")"    3 "("+"("+"()"+")"+")"    4  (((())))
*/

function parnaD(n){
    if (n==1) return "()";
    else return "("+parnaD(n-1)+")"
}

console.log(parnaD(2));
console.log(parnaD(3));
console.log(parnaD(4));


/*
   Напишіть функцію, яка виводить передане їй 
   число паліндромом (число-перевертень).
   Наприклад: число 1234 вивести як 4321.  
   4  => "4"  + "3" +"2 "+"1"

   1234%10=>4
   Math.trunc(1234/10)=>123
   4

   123%10=>3
   Math.trunc(123/10)=>12

   12%10=>2
   Math.trunc(12/10)=>1

   1%10=>1
   Math.trunc(1/10)=>0
    

*/

function polindrom(n){
    if (n==0) return "";
    else return n%10+polindrom(Math.trunc(n/10));
}

console.log(polindrom(1234));

/*
1. Напишіть функцію зведення числа у степінь.
2. Напишіть функцію пошуку найбільшого спільного дільника.
3. Напишіть функцію для пошуку максимальної цифри у числі.
*/

/* 2**3 => ((2)*2)*2  ..   3 2 1   n**1= n */

function  pown(n,m){
      if (m==1) return n ;
      else return pown(n,m-1)*n;
}

console.log(pown(2,3));
console.log(pown(3,4));


function maxDigit(n,max){
    if (n==0) return max;
    if (n%10>max) max=n%10;
    return maxDigit(Math.trunc(n/10),max)
}

console.log(maxDigit(145784,0));
console.log(maxDigit(55589,0));




