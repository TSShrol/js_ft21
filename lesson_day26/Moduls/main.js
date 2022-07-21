// let math = new Math();
// console.log(math.add(1,2));

// import {Math,PI} from "./math.js"
// let calc = new Math();
// console.log(calc.add(1,2));
// console.log(PI);


// import {Math as Calculator} from "./math.js"
// let calc = new Calculator();
// console.log(calc.minus(3,2));

import * as Calculator from "./math.js"
console.log(Calculator.PI);
let math = new Calculator.Math();
console.log(math.minus(3,2));
let math1 = new Calculator.Math1();
console.log(math1.multiply(3,2));

// try{
// 1/'0';
// }catch(error){
//     console.log(error)
// }
// try{
// try {
//     user = JSON.parse(json);
//   } catch (err) {
//     if (err instanceof SyntaxError) {
//       throw new ReadError("Синтаксична помилка", err);
//     } else {
//       throw err;
//     }
//   }
// }catch(err1){
//     console.log(err1);
// }