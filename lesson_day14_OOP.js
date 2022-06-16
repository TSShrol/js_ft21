let marta = {
    firstname: "Marta",
    lastname: "Jepik",
    birthday: "06/14/2000",
    showInfo: function () {
        console.log(`Student name: ${this.firstname} ${this.lastname}`)
    },
    showAge: function () {
        let minusTime = Date.now() - Date.parse(this.birthday);
        this.showInfo();
        console.log("Has " + Math.round(minusTime / (365 * 24 * 60 * 60 * 1000)) + " years old.");
    }
}

marta.showAge();


// let mihajlo={
//     firstname: "Mihajlo",
//     lastname: "Mihalchuk",
//     birthday: "08/25/2001",
//     showInfo: function(){
//         console.log(`Student name: ${this.firstname} ${this.lastname}`)
//     },
//     showAge:function(){
//         let minusTime=Date.now()-Date.parse(this.birthday);
//         this.showInfo();
//         console.log("Has "+Math.round(minusTime/(365*24*60*60*1000))+" years old.");
//     }
// }
// mihajlo.showAge();

// console.log(marta);
// console.log(mihajlo);

// let mas1=["Olga","Igor"];
// let mas2=["Irina","Vasyl"];
// console.log(mas1);
// console.log(mas2);
// let mas3=mas1.concat(mas2);
// console.log(mas3);

//Object 

function Student(firstname, lastname,birthday){
    this.firstname=firstname;
    this.lastname=lastname;
    this.birthday=birthday;
    this.showInfo=function(){
        console.log(`Student name: ${this.firstname} ${this.lastname}`);
    };
    this.showAge=function(){
        let minusTime=Date.now()-Date.parse(this.birthday);
        this.showInfo();
        console.log("Has "+Math.round(minusTime/(365*24*60*60*1000))+" years old.");
    };    
}

// let mihajlo=new Student("Mihajlo","Mihalchuk","08/22/2001");
// console.log(mihajlo);
// console.log(mihajlo.lastname);

// let andriy=new Student("Andriy","Polynivia","11/12/2000");
// console.log(andriy.lastname);
// andriy.showInfo();
// andriy.showInfo();
// let igor=new Object();
// console.log(igor);
// console.log(andriy instanceof Student);
// Student.prototype.maxAge=110;
// console.log(mihajlo.maxAge);
// console.log(andriy.maxAge);
// Student.prototype.hello=function(){
//     console.log(this.firstname+ ", hello! ");
// }
// mihajlo.hello();
// andriy.hello();
// mihajlo.maxAge=100;
// console.log(mihajlo.maxAge);
// console.log(andriy.maxAge);

//ОПП інкапсуляція, наслідування і поліморфізм


// //інкапсуляція
// function Student(firstname, lastname, birthday) {
//     this.firstname = firstname;
//     let _lastname = lastname;
//     this.birthday = birthday;
//     this.showInfo = function () {
//         console.log(`Student name: ${this.firstname} ${this.lastname}`);
//     };
//     this.showAge = function () {
//         let minusTime = Date.now() - Date.parse(this.birthday);
//         this.showInfo();
//         console.log("Has " + Math.round(minusTime / (365 * 24 * 60 * 60 * 1000)) + " years old.");
//     };
//     this.getLastname = function () {
//         return _lastname;
//     }
//     this.setLastname = function (lastname) {
//         _lastname = lastname;
//     }
// }


// let andriy = new Student("Andriy", "Polynivia", "11/12/2000");
// console.log(andriy.getLastname());
// // andriy._lastname="Sokil";
// andriy.setLastname("Sokil");
// console.log(andriy.getLastname());


// //наслідування
// //constructor user
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     User.prototype.displayInfo = function () {
//         document.write("Імя " + this.name + ", вік  " + this.age + "<br>");
//     };
//     User.prototype.secretInfo = function () {
//         console.log("It is sicret");
//     }
// }
// User.prototype.maxAge = 110;

// //constructor Employee

// function Employee(name, age, company) {
//     User.call(this, name, age);
//     this.company = company;
//     Employee.prototype.displayInfo = function () {
//         // User.displayInfo();
//         document.write("Імя " + this.name + ", вік  " + this.age + " компанія;  " + this.company + "</br");

//     }
// }

// Employee.prototype = Object.create(User.prototype); // наслідування прототипу User

// let user1 = new User("Petro", 29);
// let user2 = new Employee("Ivan", 33, "Google");

// user1.displayInfo();
// user2.displayInfo();
// user1.secretInfo();
// user2.secretInfo();

// console.log(user1.maxAge);
// console.log(user2.maxAge);

// console.log(user1);
// console.log(user2);

// let animal={
//     jumps:true
// };

// let kenguru=Object.create(animal);
// console.log(kenguru.hasOwnProperty("jumps"));
// console.log(Object.getPrototypeOf(kenguru)===animal);

// for(let key in user1){
//     console.log(key+"="+user1[key]);
// }

// 

// class Person{
//     name="Unknown";
//     age=18; 
//     move(place){
//         console.log(`Go to ${place}`);
//     }

// // }

// class Person{
//     name="Unknown";
//     age=18; 
//     constructor(){
//         console.log("Call constructor!");
//     }
//     move(place){
//         console.log(`${this.name} go to ${place}`);
//     }

// }


// // const Person=class{

// // }
// // const User=class Person{};
// let person1=new Person(); //call constructor
// console.log(person1);
// console.log(person1.age);
// person1.name="Andrey";
// person1.age=26;
// console.log(person1.age);
// person1.move("Kiev");

// let person2=new Person(); //call constructor
// person2.name="Ольга";
// person2.age=32;
// console.log(person2.age);
// person2.move("Львів");


/******************************** */
// class Person{
//     // name="Unknown";
//     // age=18; 
//     constructor(name,age){
//         this.name=name;
//         this.age=age; //#
//         // console.log("Call constructor!");
//     }
//     move(place){
//         console.log(`${this.name} go to ${place}`);
//     }
//     print(){
//         console.log(this.name+" is "+this.age+" years old");
//     }

// }

// let person3=new Person("Igor",42);
// person3.print();
/********************Інкапсуляція************************************* */
class Person {
    // name="Unknown";
    // age=18; 
    #age = 18;
    constructor(name, age) {
        this.name = name; //public
        this.#age = age; //# private
        // console.log("Call constructor!");
    }

    setAge(age) {
        if (age > 0 && age < 100) this.#age = age;
        else console.log("Error!");
    }

    getAge() {
        return this.#age;
    }
    move(place) {
        console.log(`${this.name} go to ${place}`);
    }
    print() {
        console.log(this.name + " is " + this.#age + " years old");
    }

}

let person4 = new Person("Igor", 42);
person4.print();
person4.name = "Olga";
// person4.age=32;
person4.setAge(32);
person4.print();
console.log(person4.getAge());
/*
Завдання 1
Реалізуйте клас PrintMaсhine, який складається з:
■ розміру шрифту;
■ кольори шрифту;
■ сімейства шрифту;
■ методу print(), який приймає текст і друкує його відповідним шрифтом за допомогою document.write().
Створіть об’єкт такого класу та продемонструйте роботу методу
*/

class PrintMaсhine {
    constructor(fontSize, color, fontFamily) {
        this.fontSize = fontSize;
        this.color = color;
        this.fontFamily = fontFamily;
    };
    print(text) {
        document.write(`<p style="color:${this.color}; "> ${text} </p>`);
    }
    toString(){
        return `Object of PrintMachine: ${this.fontSize}, ${this.fontFamily} `;
    }



}

let exemplaPrintMaсhine = new PrintMaсhine(28, "green", "Arial");
exemplaPrintMaсhine.print("We are learning OOP in JavaScript!");
console.log(exemplaPrintMaсhine);
console.log(exemplaPrintMaсhine.toString());

