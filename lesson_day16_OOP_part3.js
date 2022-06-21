/*
Реалізувати клас, який описує CSS-клас.
Клас CssClass має містити в собі:
■ назву CSS-класу;
■ масив стилів; //  =>  [{"color": "blue"},{}]  
■ метод встановлення стилю;
■ метод видалення стилю;
■ метод getCss(), який повертає CSS-код у вигляді рядка.
*/

let style1 = {
    "color": "green",
    "font-size": "24px"
}
console.log(style1.hasOwnProperty("backgound-color"));

// console.log(style1["color"]);


class CssClass {
    constructor(name, styles) {
        this.name = name;
        // this.styles=styles;
        this.styles = {};
        for (const property in styles) {
            this.styles[property] = styles[property];
        }
    }
    setStyle(property, value) {
        // if(this.styles.hasOwnProperty(property)){
        //     return ;
        // }
        this.styles[property] = value;
    }

    getStyle(property) {
        return this.styles[property];
    }

    delStyle(property) {
        delete this.styles[property];
    }
    getCss() {
        let textCss = "";
        for (const property in this.styles) {
            if (Object.hasOwnProperty.call(this.styles, property)) {
                textCss += `${property} : ${this.styles[property]};\n`;

            }
        }
        // console.log(textCss);
        return `.${this.name}{\n ${textCss}}`;
    }
}

/*
    .textNews{
        "color": "green";
        "font-size": "24px";
    }
 
*/

const textNews = new CssClass("textNews", style1);
console.log(textNews);
textNews.setStyle("background-color", "yellow");
console.log(textNews);
textNews.setStyle("background-color", "red");
console.log(textNews);
textNews.delStyle("color");
console.log(textNews);
console.log(textNews.getCss());
const textNews1 = new CssClass("textNews1", style1);
textNews1.setStyle("font-size", "16px");

document.write(`<style>\n${textNews1.getCss()}\n ${textNews.getStyle()}</style>`);


/*
    Person -> Employee
*/

class Person {
    constructor(name, age) {
        // this.id=id
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(this.name + " " + this.age);
    }
}


class Employee extends Person{
    constructor(name, age, company){
        super(name,age);
        this.company=company;
    }
    // printInfo() {
    //     console.log(this.name + " " + this.age+" "+ this.company);
    // }
    printInfo() {
        super.printInfo();
        console.log("In work this company "+this.company);
    }
    work(){
        console.log(this.name+" work in "+this.company);
    }         
}

const andriy=new Person("Andriy",33);
andriy.printInfo();
let employee1=new Employee("Igor",35,"Google");
employee1.printInfo();
employee1.work();