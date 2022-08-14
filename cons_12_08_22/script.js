// let a = 'global';
// function outer() {
//     let b = 'outer';
//     function inner() {
//         let c = 'inner'
//         console.log(c);   //  'inner'
//         console.log(b);   //  'outer'
//         console.log(a);   //  'global'
//     }
//     console.log(a);     //  'global'
//     console.log(b);     //  'outer'
//     inner();
// }
// outer();
// console.log(a);         //  'global'
/*
  Global{
    outer{
        inner
    }
  }
*/

//example 1
function person() {
    let name = 'Peter';
    
    return function displayName() {
      console.log(name);
    };
  }
 let peter = person();
 peter(); // виведе 'Peter'

/*
personLexicalEnvironment = {
  environmentRecord: {
    name : 'Peter',
    displayName: <displayName function reference>
  }
  outer: <globalLexicalEnvironment>
}

*/


/*
displayNameLexicalEnvironment = {
  environmentRecord: {
    
  }
  outer: <personLexicalEnvironment>
}
*/


 //example 2

 function getCounter() {
    let counter = 0;
    return function() {
      return counter++;
    }
 }
 let count = getCounter();
 console.log(count());  // 0
 console.log(count());  // 1
 console.log(count());  // 2



/*
getCounterLexicalEnvironment = {
  environmentRecord: {
    counter: 0,
    <anonymous function> : <reference to function>
  }
  outer: <globalLexicalEnvironment>
}
*/

/*
countLexicalEnvironment = {
  environmentRecord: {
  
  }
  outer: <getCountLexicalEnvironment>
}
*/

//після першого виклику getcounter матиме таке лексичне оточення

/*
getCounterLexicalEnvironment = {
  environmentRecord: {
    counter: 1,
    <anonymous function> : < reference to function>
  }
  outer: <globalLexicalEnvironment>
}
*/


//LIFO
// Лексичне середовище виглядає так:
/*
lexicalEnvironment = {
  environmentRecord: {
    <identifier> : <value>,
    <identifier> : <value>
  }
  outer: <Reference to the parent lexical environment>
}
*/

let a = 'Hello World!';
function first() {
  let b = 25;  
  console.log('Inside first function');
}
first();
console.log('Inside global execution context');

/*
globalLexicalEnvironment = {
  environmentRecord: {
      a     : 'Hello World!',
      first : <reference to function object>
  }
  outer: null
}

*/

/*
functionLexicalEnvironment = {
  environmentRecord: {
      b    : 25,
  }
  outer: <globalLexicalEnvironment>
}
*/





//example 3
function sum(a) {

    return function(b) {
      return a + b; // Бере "a" із зовнішнього лексичного середовища
    };
  
  }
  
  alert( sum(1)(2) ); // 3
  alert( sum(5)(-1) ); // 4

//   hoisting
//   var let
//   namef();
//   function namef(){

//   }