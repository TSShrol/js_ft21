// let array1=new Array(2,3,7,9,3,7,9);
// console.log(array1);

// let array2=Array.from("JavaScript!");
// console.log(array2);

// let array3=Array.from(array1);
// console.log(array3);

// // Array.of  - metho init array

// let array4=Array.of("Apple","Ananas","Cherry");
// console.log(array4);

// let array5=array4;
// array5[2]="Plum";
// console.log(array4);
// console.log(array5);
// let array6=Array.from(array4);
// array6.length=2;
// console.log(array4);
// console.log(array6);

// //indexOf
// console.log(array6.indexOf("Ananas"));
// array6[2]="Ananas";
// array6[3]="Cherry";
// console.log(array6);
// console.log(array6.indexOf("Ananas",2));
// console.log(array6.indexOf("Banane"));

// /// Порахувати скільки разів деяке шукане значення зустрічається в масиві
// let arr1=[34, 45,-14,24,45,65,34,45];
// console.log(arr1);
// let count=0;
// let index=arr1.indexOf(45);//index=1
// while(index!=-1){
//     count++;
//     console.log(index);
//     index=arr1.indexOf(45,index+1);
// }

// console.log("count=",count);
// //lastIndexOf

// count=0;
// index=arr1.lastIndexOf(45);//index=7
// while(index!=-1){
//     count++;
//     console.log(index);
//     index=arr1.lastIndexOf(45,index-1);
// }
// console.log("count=",count);


// function findItem2(newArr, array) {
//     for (let i = newArr.length, j = 0; j < array.length; j++) {
//         count=0;
//         let index=newArr.indexOf(array[j]);
//         while(index!=-1){
//             count++;
//             index=newArr.indexOf(array[j],index+1);
//         }
//         if (count == 0) {
//             newArr[i] = array[j];
//             i++;
//         }
//     }
// }

// let resArr=[]
// findItem2(resArr,[2,3,5,5,7,8,8,5])
// console.log(resArr);

//arr.sort([compareFunc])

// let arr2 = [3, 76, 45, 89, 23];

// console.log(arr2);
// arr2.sort();
// console.log(arr2);

// let arr3 = ["Node", "Java", "React", "JavaScript"]
// console.log(arr3);
// arr3.sort();
// console.log(arr3);

// // в порядку зростання
// // n1>n2 => 1
// // n1<n2 => -1
// // n1==n2 => 0

// function compareFunc(n1, n2) {
//     if (n1 > n2) 
//         return 1;
//     else if (n1 < n2) 
//         return -1;
//     else 
//         return 0;
// }
// console.log(arr2);
// arr2.sort(compareFunc);
// console.log(arr2);

// //Нехай в нас є рядок. Конвертувати рядок в масив, 
// //розбивши на елементи масиву, на основі якогось роздільника.
// let str1="Нехай в нас є рядок. Конвертувати рядок в масив, розбивши на елементи масиву, на основі якогось роздільника.";
// let arr4=str1.split(" ");
// console.log(arr4);
// console.log("count word=",arr4.length);

// let newstr=arr3.join(";");
// console.log(newstr);

// arr1=["Andriy","Bogdan", "Marta"];
// let newArr1=arr1.slice();
// console.log("arr1:",arr1);
// console.log("newArr1:",newArr1);
// newArr1[3]="Volodimir";
// console.log("arr1:",arr1);
// console.log("newArr1:",newArr1);

// //spread-оператор
// // ...array
// let arr11=[...arr1]
// console.log(arr11);
// let arr12=new Array(...arr1);
// console.log(arr12);
// let arr13=[...arr11,"third arr",...arr12]
// console.log(arr13);

// let arr14=[arr11,"third arr",arr12];
// console.log(arr14)

// console.log("=====================");
// arr3=[3,4,6];
// console.log(arr3);
// arr3[3]=55; // [3,4,6,55]
// console.log(arr3);
// arr3.push(77); // [3,4,6,55,77]
// console.log(arr3);
// //delete last item
// arr3.length=arr3.length-1; // arr3.length=5-1=4
// console.log(arr3);
// console.log(arr3.pop())
// console.log(arr3);
// console.log(arr3.shift())
// console.log(arr3);
// arr3.unshift(33);
// console.log(arr3);
// let arr5=arr3.splice(-1);
// console.log(arr5);
// console.log(arr3);
// arr3=[3,4,6,55,77];
// console.log(arr3.splice(1,3));
// console.log(arr3); //[3,77]

// let arr6=arr3.concat([88,99]);
// console.log(arr6);
// arr6.reverse()
// console.log(arr6);

/*
Створіть масив фруктів та відсортуйте його за алфавітом.
Напишіть наступні функції.
1. Виведення на екран за допомогою document.write() у
вигляді списку (за допомогою тегів ul і li).
*/
let fruitsArr=["Кавун","Абракис","Черешні","Сливи"];
console.log(fruitsArr);
fruitsArr.sort();
console.log(fruitsArr);
document.write("<ul>");
for(let i=0; i<fruitsArr.length; i++){
    document.write("<li>"+fruitsArr[i]+"</li>");
}
document.write("</ul>");


/*
  student = {name: ???, age: ???, group:??}
  середній вік студенів, наймолодшмй, настарший
*/

let students=[
     {name: "Петро", age: 25, group: "FT11" },
     {name: "Олег", age: 35, group: "FT21" },
     {name: "Ганна", age: 32, group: "FT21" }
]

// students[0].age
function avargeAge(students){
    let sumaAge=0;
    for(let i=0; i<students.length; i++){
        sumaAge+=students[i].age;
    }
    return Math.round(sumaAge/students.length);
}
console.log("avargeAge=",avargeAge(students));

function maxAge(students){
    let maxAge=students[0].age;
    for(let i=1; i<students.length; i++){
        if(students[i].age>maxAge) maxAge=students[i].age;
    }
    return maxAge;
}

console.log("maxAge=",maxAge(students));

// function maxAge(students,group){
//     let maxAge=students[0].age;
//     for(let i=1; i<students.length; i++){
//         if(students[i].age>maxAge) maxAge=students[i].age;
//     }
//     return maxAge;
// }


// let shoppingList=[
//     {title: "Milk", count: 2, bought: true},
//     {title: "Juice", count: 1, bought: false},
//     {title: "Apple", count: 5, bought: true},
//     {title: "Chips", count: 1, bought: false},
// ]

// function printShoppingList(shopList){
//     shopList.sort(compareBought);
//     console.log(shopList);
// }
// function compareBought(value1, value2){
//     if (value1.bought>value2.bought) return -1;
//     else if(value1.bought<value2.bought) return 1;
//     else return 0;
// }

// printShoppingList(shoppingList);



