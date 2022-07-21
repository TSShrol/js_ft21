/*
Принцип розділення інтерфейсу (Interface Segregation Principle)
Краще, коли є багато спеціалізованих інтерфейсів, ніж один загальний. 
Маючи один загальний інтерфейс, є ризик потрапити в ситуацію, коли
похідний клас логічно не зможе успадкувати якийсь метод.
*/

// class Animal{ //абстрактний клас 
//     constructor(name){
//         this.name=name;
//     }
//     walk(){
//         console.log(`${this.name} вміє ходити`)
//     }
//     swim(){
//         console.log(`${this.name} вміє плавати`)
//     }
//     fly(){
//         console.log(`${this.name} вміє літати`)
//     }
// }

// class Dog extends Animal{
//     fly(){
//         return;
//     }
// }
// class Eangle extends Animal{
    
// }
// class Shark  extends Animal{
    
// }


// const dog=new Dog('Бетховен');
// dog.walk();
// dog.swim();
// dog.fly();// це некоректний метод щодо собаки
// // тому потрібно модифікувати клас Dog
// // наприклад модифікувати (перевизначити) в цьому класі метод fly

// const shark=new Shark('Hangry');
// shark.walk();
// shark.swim();
// shark.fly();
//і тут надто багато методів, які потріно відмінити  для класів, що наслідуються
//тобто абстрактний клас Anaimal надто розширений  а це і память і лишній функціона класів, що наслідуються тощо

/**====================================Правильна реалізація ============= */
//В JS сожна зробити це використовуючи composition API

class Animal{
    constructor(name){
        this.name=name;
    }
}

//створимо обєкти, які будуит додавати
//плавання
const walker={
    walk(){
        console.log(`${this.name} вміє ходити`) ;       
    }
}

const flier={
    fly(){
        console.log(`${this.name} вміє літати`);
    }
}

const swimmer={
    swim(){
        console.log(`${this.name} вміє плавати`);      
    }
}



class Dog extends Animal{
    
};
class Eagle extends Animal{};
class Shark extends Animal{};


Object.assign(Dog.prototype,swimmer, walker);
Object.assign(Eagle.prototype,flier, walker);
Object.assign(Shark.prototype,swimmer);


const dog=new Dog('Бетховен');
console.log(dog);
dog.walk();
dog.swim();
// dog.fly();// це некоректний метод щодо собаки
// тому потрібно модифікувати клас Dog
// наприклад модифікувати (перевизначити) в цьому класі метод fly

const shark=new Shark('Blue Shark');
// shark.walk();
shark.swim();
// shark.fly();