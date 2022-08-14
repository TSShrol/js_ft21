/*
Автоматизоване тестування означає, що тести пишуться окремо від основного коду, доповнюючи його. 
Вони запускають наші функції різними способами і порівнюють результати з очікуваними.

Процес розробки:
1) Пишуть первинну специфікацію з тестами основного функціонала.
2) Створюється початкова реалізація.
3) Для того, щоб перевірити, чи вона працює, використовуємо тестовий фреймворк Mocha,
який виконує специфікацію. Якщо функціонал не завершено – виводяться повідомлення про помилки. 
Виконується виправлення до тих пір, поки не буде повністю робочий код.
4) На даному етапі  маємо початкову реалізацію з тестами.
5) Далі додається більше способів використання до специфікації, навіть таких, 
що поки що не підтримуються реалізацією. Виконання тестів знову завершиться невдачою.
6) Переходимо на 3-й пункт, змінюємо реалізацію, щоб вона відповідала тестам і вони не повертали повідомлення про помилку.
7) Повторюємо процес, описаний у пунктах з 3-го по 6-ий, поки функціонал не буде повністю готовий.
*/
/*
Клас Fraction описує дріб.
Поля класу:
■ чисельник (ціле число);
■ знаменник (ціле число).
Методи класу:
■ constructor(numerator, denominator) – приймає чисельник і знаменник, та зберігає їх;
■ reduction()  – змінює об’єкт, від якого була викликана
функція таким чином, щоб ні у чисельника та ні у знаменника не залишилося спільних дільників;
■ isInteger() – повертає true, якщо при розподілі чисельника на знаменник буде отримано ціле число, інакше повертає false;
■ static addition(fraction1, fraction2)  – приймає два
дроби, складає їх та повертає результат у вигляді об’єкта
типу Fraction;
*/

class Fraction{
    constructor(numerator, denominator){
        this.numerator=numerator|| 1;
        this.denominator=denominator||1;

    }
    reduction(){ // 6/12 =>1/2
        function nsd(a, b){
            if(a === b) {
                return a;
            } else if(a > b) {
                return nsd(a - b, b);
            } else {
                return nsd(a, b - a);
            }
        }
        let reznsd=nsd(this.numerator,this.denominator);
        this.numerator/=reznsd; 
        this.denominator/=reznsd;
    }
    static addition(fraction1, fraction2){
        let rez=new Fraction();
        rez.numerator= (fraction1.numerator*fraction2.denominator+fraction2.numerator*fraction1.denominator);
        rez.denominator=(fraction1.denominator*fraction2.denominator);
        rez.reduction();
        console.log(rez);
        return rez;
        // return {
        //     numerator: rez.numerator, 
        //     denominator: rez.denominator
        // }
    }
    

    

}
//2/5 + 1/5 = 3/5
let d1=new Fraction(2,5);
let d2=new Fraction(1,5);

console.log(Fraction.addition(d1,d2));

// f-32/1.8 => f-32/1.8  ()
// [23,41,140] => [-5, 5, 60]
function getCelcius(farengait){
    return farengait.map(temperature=>(temperature-32)/1.8);
}

console.log(getCelcius([23,41,140]));