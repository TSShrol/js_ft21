// let ft21=new Array(); //створення порожнього масиву
// ft21[0]="Marta";
// ft21[1]="Boris";
// ft21[2]="Volodimir";// length => 2+1=3
// let markFT21=new Array(3);
// markFT21[0]=11;
// markFT21[1]=12;
// markFT21[2]=10;

// console.log(ft21);
// console.log(markFT21);

// let ageFT21=new Array(26,28,27);
// console.log(ageFT21);

// console.log(ageFT21.length);
// alert(markFT21);
// ageFT21[30]=36;
// console.log(ageFT21.length);
// console.log(ageFT21[29]);
// console.log(ageFT21[30]); //36
// ageFT21.length=2; //зменшення розміру
// console.log(ageFT21[1]);
// console.log(ageFT21[2]);
// console.log(ageFT21[30]);


// let secondNameFT21=[]; //Array[0] порожній
// secondNameFT21[0]="Єпік";
// secondNameFT21[1]="Бузян";
// secondNameFT21[2]="Михайльчук";

// let markHW10=[10,11,12];
// console.log(markHW10[0]);
// console.log(markHW10[1]);
// console.log(markHW10[2]);



// console.log(secondNameFT21[0], " отримала(-в) ", markHW10[0]);

// //Обчислити середню оцінку за домашнє завдання 10 в групі FT11

// let serednje=0;
// let suma=0;
// for(let i=0; i<markHW10.length; i++){
//     suma=suma+markHW10[i];
// }
// console.log("suma="+suma);
// serednje=suma/markHW10.length;
// console.log("serdnje="+serednje);

// console.log("==============================");
// let myarray=[45,"JavaScript",45.8,{name:"Oleg"}];
// for(let i=0; i<myarray.length; i++){
//     console.log(myarray[i]);
// }

//
// let arr1=new Array(5);
// /*
// arr1[0]=+prompt("Input element:");
// arr1[1]=+prompt("Input element:");
// ...
// arr1[4]=+prompt("Input element:");
// */
// alert("Inputs 5 elements!")
// for(let i=0; i<arr1.length; i++){
//     console.log(i);
//     arr1[i]=+prompt(`Input ${i+1}-j element:`);
// }

// console.log(arr1);


// function inputArr(arr){
//     console.log(arr.length);  
//     for(let i=0; i<arr.length; i++){
//         arr[i]=+prompt(`Input ${i+1}-j element:`);
//     }
// }

// let arr2=new Array(6);

// inputArr(arr2);
// console.log(arr2);



// let arr3=[];
// function inputArr1(arr,len){
//     for(let i=0; i<len; i++){
//         arr[i]=+prompt(`Input ${i+1}-j element:`);
//     }
// }

// inputArr1(arr3,4);
// console.log(arr3);

/*Створіть масив із 10 випадкових чисел і напишіть кілька
функцій для роботи з ним.*/


//  let arrRandom=new Array();
// let arrRandom=[];
// let len=10;
// for(let i=0; i<len; i++){
//     arrRandom[i]=Math.trunc(Math.random()*10);
// }
// console.log(arrRandom);


let arrRandom = [];
let len = 10;

function inputRandom(arrRandom, len) {
    for (let i = 0; i < len; i++) {
        arrRandom[i] = Math.trunc(Math.random() * 10);
    }
}

inputRandom(arrRandom, 6);
console.log(arrRandom);

inputRandom(arrRandom, 12);
console.log(arrRandom);

let arrRandom2 = [];
inputRandom(arrRandom2, 10);
console.log(arrRandom2)

//1. Функція приймає масив і виводить його на екран.

function print(arr) {
    let str = "[";
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            str = str + arr[i];
        } else {
            str = str + arr[i] + ", ";
        }
    }
    str = str + "]";
    console.log(str);
}


print(arrRandom);
print(arrRandom2);

/*
    2. Функція приймає масив і виводить лише парні елементи.
*/
function findEvenElement(arr) {
    console.log("Even number of array:");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] != 0) console.log(arr[i]);
    }
}
/*
findEvenElement(arrRandom);
findEvenElement(arrRandom2);
*/
/*
    3. Функція приймає масив і повертає суму всіх елементів масиву.
*/

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // sum=sum+arr[i];
    }
    return sum;
}

console.log("suma item arrRandom=" + sumArr(arrRandom));
let rezSum;
rezSum = sumArr(arrRandom2);

console.log("suma item arrRandom2=" + rezSum);
/*
    4. Функція приймає масив і повертає його максимальний елемент.
*/

function maxArr(arr) {
    let maxItem = arr[0];// 1-j item of array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxItem) maxItem = arr[i];
    }
    return maxItem;
}

console.log("maxItem=", maxArr(arrRandom));
let maxElem = maxArr(arrRandom2);
console.log("maxElem=", maxElem);
/*
    5. Функція додавання нового елемента в масив за вказаним індексом.
*/

function addItem(arr, index, value) {
    arr[index] = value;
}

addItem(arrRandom, 13, 555);
addItem(arrRandom2, 10, 444);

print(arrRandom);
print(arrRandom2);

/*
Функція видалення елемента з масиву за вказаним індексом.
*/

function removeItem(arr, index) {
    if (index == arr.length - 1) {
        arr.length = arr.length - 1;
    } else {
        arr[index] = undefined;
    }
}

removeItem(arrRandom, 11);
removeItem(arrRandom2, 10);
console.log("Remove Item of arrays:");
print(arrRandom);
print(arrRandom2);

function removeItem(arr, index) {
    let newarr = [];
    for (let i = 0, j = 0; i < arr.length; i++) {
        if (i == index) continue;
        newarr[j] = arr[i];
        j++;
    }
    return newarr;
}

// arr=[2,5,4,6]  index=2
// i=0<4  i==2 false  newarr[0]=arr[0] j=1
// i=1<4  i==2 false  newarr[1]=arr[1]  j=2
// i=2<4  i==2 true  =========
// i=3<4  i==2 false  newarr[2]=arr[3]  j++
//i=4<4 =======================
let arr1 = [2, 5, 4, 6]
print(arr1);
arr1 = removeItem(arr1, 2);
console.log("After remove:");
print(arr1);

/*
Завдання 2. Створіть ще один масив із 5 випадкових чисел і написати наступні функції.
1. Функція приймає 2 масиви і повертає новий масив, в якому 
зібрані всі елементи двох масивів без повторень.
*/

// let array1=[];
// let array2=[];

// inputRandom(array1,10);
// inputRandom(array2,5);
// // [2,3,7,8,8]   [4,3,9]

// function unionArrays(array1,array2){
//     let newArr=[];
//     for(let i=0,j=0; j<array1.length; j++){
//         let count=0;
//         for(let k=0; k<newArr.length; k++){
//             if (newArr[k]==array1[j]) count++;
//         }
//         if (count==0) {
//             newArr[i]=array1[j];
//             i++;
//         }
//     }
//     let i=newArr.length;

//     for(let j=0; j<array2.length; j++){
//         let count=0;
//         for(let k=0; k<newArr.length; k++){
//             if (array2[j]==newArr[k]) count++;
//         }
//         if (count==0) {
//             newArr[i]=array2[j];
//             i++;
//         }
//     }
//     return newArr;
// }

// print(array1);
// print(array2);

// console.log(unionArrays(array1,array2))


let array1 = [];
let array2 = [];

inputRandom(array1, 10);
inputRandom(array2, 5);
// [2,3,7,8,8]   [4,3,9]

function findItem(newArr, array, index) {
    for (let i = index, j = 0; j < array.length; j++) {
        let count = 0;
        for (let k = 0; k < newArr.length; k++) {
            if (newArr[k] == array[j]) count++;
        }
        if (count == 0) {
            newArr[i] = array[j];
            i++;
        }
    }
}


function unionArrays(array1, array2) {
    let newArr = [];
    let i=0;
    findItem(newArr,array1,i);
    i = newArr.length;
    findItem(newArr,array2,i);
    return newArr;
}

print(array1);
print(array2);

console.log(unionArrays(array1, array2))

function findItem2(newArr, array) {
    for (let i = newArr.length, j = 0; j < array.length; j++) {
        let count = 0;
        for (let k = 0; k < newArr.length; k++) {
            if (newArr[k] == array[j]) count++;
        }
        if (count == 0) {
            newArr[i] = array[j];
            i++;
        }
    }
}

function unionArrays2(array1, array2) {
    let newArr = [];
    findItem2(newArr,array1);
    findItem2(newArr,array2);
    return newArr;
}

print(array1);
print(array2);

console.log(unionArrays2([array1], array2));