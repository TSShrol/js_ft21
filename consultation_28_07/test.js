/*
специфікація має три основні блоки:

describe("title", function() { ... })
Яку функціональність ми описуємо. В нашому випадку, 
ми описуємо функцію pow. Використовується для групування блоків it, які “виконують роботу”.

it("додає дроби 2/5 + 1/5 = 3/5", function() { ... })
У першому аргументі (назві) it ми описуємо людською мовою 
конкретний спосіб використання функції, а у другому аргументі пишемо функцію, яка тестуватиме цей спосіб.

assert.deepEqual(value1, value2)
Код, всереді блоку it, якщо реалізація правильна, повинен виконуватись без помилок.

Функції assert.* (https://www.chaijs.com/api/assert/) використовуються для перевірки того, 
що функція raction.addition працює, як ми очікуємо. 
В нашому випадку, ми використовуємо одну з них – deepEqual, вона порівнює аргументи і сповіщає про помилку,
якщо вони відрізняються. Тут вона перевіряє, що результат Fraction.addition(new Fraction(2, 5), new Fraction(1, 5)) дорівнює  new Fraction(3, 5). 
Є також інші способи порівняння та перевірки.
*/
// let assert = chai.assert;
describe("addition", function () {

     it("додає дроби 2/5 + 1/5 = 3/5", function () {
          let rez = Fraction.addition(new Fraction(2, 5), new Fraction(1, 5));
          console.log(rez);

          assert(rez.numerator===3 && rez.denominator===5, 'new Fraction(2, 5)+new Fraction(1, 5)=new Fraction(3, 5)');
          //assert.deepEqual({ numerator: rez.numerator, denominator: rez.denominator }, new Fraction(3, 5));
          //assert.deepEqual(Fraction.addition(new Fraction(1, 10), new Fraction(4, 10)), new Fraction(1, 2));
          //    assert.deepEqual({numerator: rez.numerator, denominator: rez.denominator},new Fraction(3,5));
     });
     it("додає дроби 1/10 + 4/10 = 1/2", function () {

          assert.deepEqual(Fraction.addition(new Fraction(1, 10), new Fraction(4, 10)), new Fraction(1, 2));

     });

});

describe("reduction",()=>{
     let rez=new Fraction(5,10);
     rez.reduction();
     it("скорочення дробу 5/10=1/2", ()=>{
          assert.deepEqual(rez,new Fraction(1,2));
     })
});



describe('getCelcius',()=>{
     it('convert farengait to ceicius for all array',()=>{
          expect(getCelcius([23,41,140])).to.deep.equal([-5, 5, 60]);
     })
})



/*
бібліотеки JavaScript для тестів:

Mocha (https://mochajs.org/) – базовий фреймворк: він забезпечує нас загальними функціями для тестування, в тому числі describe та it, а також головною функцією, що виконує тести.
Chai (https://www.chaijs.com/api/) – бібліотека з багатьма припущеннями. Вона дозволяє використовувати безліч різних припущень, але поки що нам потрібне лише припущення assert.equal.
Sinon (https://sinonjs.org/) – бібліотека для “шпигування” за функціями, емуляції вбудованих функцій тощо, нам це знадобиться набагато пізніше.
*/