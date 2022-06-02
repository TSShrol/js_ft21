// let rectagular = {
//     x1: 0,
//     y1: 5,
//     x2: 6,
//     y2: 0
// }

// let rectagular1 = {
//     topLeft: {
//         x: 0,
//         y: 5
//     },
//     bottomRight: {
//         x: 6,
//         y: 0
//     }
// }

// console.log(`TopLeft point (${rectagular.x1},${rectagular.y1})`)
// console.log(`BottomRight point (${rectagular.x2},${rectagular.y2})`);
// console.log(`TopLeft point (${rectagular["x1"]},${rectagular["y1"]})`)
// console.log(`BottomRight point (${rectagular["x2"]},${rectagular["y2"]})`);

// console.log(rectagular1.topLeft.x);
// console.log(rectagular1.topLeft.y);

// console.log(rectagular1.bottomRight.x);
// console.log(rectagular1.bottomRight.y);

// function change(x) {
//     x = x * 2;
//     console.log("x in change:", x);
// }

// let number = 10;
// console.log("n befor change: ", number);
// change(number);
// console.log("n after change: ", number);

// function changeUserInfo(user) {
//     // user["name"]="Andrey";
//     user.name = "Andrey";
// }

// let student = {
//     name: "Igor",
//     age: 34
// }

// console.log("student befor change: ", student.name, " ", student.age);
// changeUserInfo(student);
// console.log("student after change: ", student.name, " ", student.age);


// function rectagularInfo(rectagular) {
//     console.log(`TopLeft point (${rectagular.x1},${rectagular.y1})`)
//     console.log(`BottomRight point (${rectagular.x2},${rectagular.y2})`);
// }

// rectagularInfo(rectagular);


// function rectagularInfo1(obj) {
//     console.log("TopLeft point: (",obj.topLeft.x, ";", obj.topLeft.y,")"); // obj["topLeft"]["x"]  obj["topLeft"]["y"]

//     console.log("BottomRight point: (",obj.bottomRight.x,"; ",obj.bottomRight.y,")"); //obj["bottomRight"]["x"] obj["bottomRight"]["y"]
// }

// rectagularInfo1(rectagular1);

// function changeUser(user){
//     user={
//         name:"Ivanko"
//     };
// }

// console.log("student befor change: ", student.name, " ", student.age);
// changeUser(student);
// console.log("student after change: ", student.name, " ", student.age);

// /*
// Функція приймає об’єкт-прямокутник і повертає його ширину.
// let rectagular1 = {
//     topLeft: {
//         x: 0,
//         y: 5
//     },
//     bottomRight: {
//         x: 6,
//         y: 0
//     }
// }
// */

// function rectWidth(rectagular){
//     return Math.abs(rectagular.topLeft.x-rectagular.bottomRight.x);
// }

// alert("width = "+rectWidth(rectagular1));

// /*
// Функція приймає об’єкт-прямокутник і повертає його площу.
// let rectagular = {
//     x1: 0,
//     y1: 5,
//     x2: 6,
//     y2: 0
// }

// */

// function squareRect(rectagular){
//     return Math.abs(rectagular.x2-rectagular.x1)*Math.abs(rectagular.y2-rectagular.y1);
// }

// console.log(squareRect(rectagular))

// /*
// Функція приймає об’єкт-прямокутник і повертає його периметр.
// */

// /*
//  Функція зміни ширини прямокутника. Вона приймає об’єкт-прямокутник і
//   на скільки одиниць змінити ширину.
//   let rectagular1 = {
//     topLeft: {
//         x: 0,
//         y: 5
//     },
//     bottomRight: {
//         x: 6,
//         y: 0
//     }
// }
// */

// function changeWRect1(rectagular1, width){
//     rectagular1.bottomRight.x=rectagular1.bottomRight.x+width;
//     return rectWidth(rectagular1);
// }
// console.log(changeWRect1(rectagular1,4));
// rectagularInfo1(rectagular1);

// /*
// Функція зміщення прямокутника по осі X. Вона приймає
// об’єкт-прямокутник і на скільки одиниць його зрушити.
// */

// function movingX(rectagular1, step){
//     rectagular1.topLeft.x+=step;
//     rectagular1.bottomRight.x+=step;
// }

// movingX(rectagular1, -7);
// rectagularInfo1(rectagular1);

/*Завдання 2
Створіть об’єкт, що зберігає окремий чисельник і знаменник
дробу, і наступні функції для роботи з цим об’єктом.
1. Функція додавання 2 об’єктів-дробів.
2. Функція віднімання 2 об’єктів-дробів.
3. Функція множення 2 об’єктів-дробів.
4. Функція ділення 2 об’єктів-дробів.
5. Функція скорочення об’єкта-дробу.
*/

let frac1={
    numenator: 1,
    denominator: 3,

}

let frac2={
    numenator: 1,
    denominator: 2
}

// Функція виведення об’єктів-дробів в консоль.
function displayFrac(fraction){
    console.log(`${fraction.numenator}/${fraction.denominator}`);
}
// Функція, що повретає форматовний рядок виведення об’єктів-дробів.
function displayFracReturn(fraction){
   return `${fraction.numenator}/${fraction.denominator}`;
}
//1. Функція додавання 2 об’єктів-дробів.
function addFrac(fraction1, fraction2){
    let rezult={
        numenator: fraction1.numenator*fraction2.denominator+fraction2.numenator*fraction1.denominator,
        denominator: fraction1.denominator*fraction2.denominator
    };
    return rezult;
}

displayFrac(frac1);
displayFrac(frac2);

let addFraction=addFrac(frac1,frac2);
displayFrac(addFraction);

console.log(displayFracReturn(frac1),"+",displayFracReturn(frac2),"=", displayFracReturn(addFraction));


//3. Функція множення 2 об’єктів-дробів.
function multiplyFrac(farc1, frac2){
    let rezult={
        numenator: frac1.numenator*frac2.numenator,
        denominator: frac1.denominator*frac2.denominator
    };
    return rezult;
}

console.log(displayFracReturn(frac1),"*",displayFracReturn(frac2),"=", displayFracReturn(multiplyFrac(frac1,frac2)));

// 5. Функція скорочення об’єкта-дробу.

//знаходження найбільшого спільного дільника
function nsd(a, b){
    if(a === b) {
        return a;
    } else if(a > b) {
        return nsd(a - b, b);
    } else {
        return nsd(a, b - a);
    }
}

function custFrac(fraction){
   let nsdFrac=nsd(fraction["numenator"],fraction["denominator"]);
   console.log(nsdFrac);
   fraction["numenator"]=fraction["numenator"]/nsdFrac;
   fraction["denominator"]=fraction["denominator"]/nsdFrac;
//    return fraction;
}



// displayFrac(custFrac({numenator: 6, denominator:8}));
let frac3={numenator: 6, denominator:8};
custFrac(frac3);
displayFrac(frac3);

