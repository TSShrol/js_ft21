/*Реалізуйте клас Button, який містить ширину, висоту, текст
кнопки, і метод showBtn(), який виводить кнопку на екран за допомогою тегу button і
функції document.write().
Реалізуйте клас BootstrapButton, успадкувавши його від
класу Button. Додайте поле color і перевизначте метод showBtn()
так, щоб кнопка виводилася зі стилями і вказаним кольором.*/
// "use strict"
// class Button{
//     constructor(width,height,text){
//         this.width=width || 200;
//         this.height=height || 60;
//         this.text= text || "Button";
//     }
//     showBtn(){
//         document.write(`<button style="width: ${this.width}px; height: ${this.height}px"> ${this.text}</button>`);
//     }
// }
// let buttonPlay=new Button(300,50,"Play");
// console.log(buttonPlay);
// console.log(typeof Button);
// console.log(buttonPlay instanceof Button);
// buttonPlay.showBtn();

// class BootstrapButton extends Button{
//     constructor(width,height,text,color){
//         super(width,height,text);
//         this.color=color;
//     }
//     showBtn(){
//         document.write(`<button style="width: ${this.width}px; height: ${this.height}px; color: ${this.color}"> ${this.text}</button>`);
//     }

// }

// const buttonBootstrapStop=new BootstrapButton(200,25,"Stop","#FF45AA");
// buttonBootstrapStop.showBtn();

"use strict"
class Button {
    #width;
    #height;
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text || "Button";
    }
    //set  and get
    get width() {
        return this.#width;
    }

    set width(widht) {
        this.#width = widht > 0 ? widht : 100;
    }

    get height() {
        return this.#height;
    }
    set height(height) {
        this.#height = height > 0 ? height : 50;
    }

    showBtn() {
        console.log(this.height);
        document.write(`<button style="width: ${this.width}px; height: ${this.height}px"> ${this.text}</button>`);
    }
}
let buttonPlay = new Button(-2, -2, "Play");
console.log(buttonPlay);
console.log(typeof Button);
console.log(buttonPlay instanceof Button);
buttonPlay.showBtn();

class BootstrapButton extends Button {
    #color;
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }
    get color() {
        return this.#color;
    }
    set color(color) {
        this.#color = color || "red"; // #564AC3
    }
    showBtn() {
        document.write(`<button style="width: ${this.width}px; height: ${this.height}px; color: ${this.color}"> ${this.text}</button>`);
    }

}

const buttonBootstrapStop = new BootstrapButton(200, 25, "Stop", "#FF45AA");
buttonBootstrapStop.color = "green";
buttonBootstrapStop.showBtn();


/*
Реалізуйте клас ExtentedArray, успадкувавши його від стандартного класу Array і додавши такі методи:
■ метод getString(separator) для отримання рядка з усіма
елементами масиву, переліченими через зазначений роздільник: кома, тире, пробіл тощо;
■ метод getHtml(tagName) для отримання рядка з HTMLкодом, де кожен елемент масиву буде поміщений у вказаний тег
(врахуйте, якщо вказується тег li, тоді всі елементи додатково необхідно буде помістити в ul).
Створіть об’єкт класу ExtentedArray, заповніть його даними та виведіть на екран результати роботи методів getString() і
getHtml().
*/
// let arr=new Array(4); not create [4]
// let arr1=new Array(4,5,6,7)   

class ExtentedArray extends Array{
    constructor(arr=[]){
        super(...arr);
    }
    getString(separator){ // [ilem1; item2; item3...]
        let text="[";
              // with for parametrs
        // for(let i=0; i<this.length; i++){
        //     // text+=String(this[i]).concat(separator).concat(" ");
        //     text+=this[i]+separator+" ";
        // }

        //with foreach => for of
        // this.forEach((item)=>{
        //     text+=item+separator+" ";
        // });

        this.forEach(function(item){
            text+=item+separator+" ";
        });
        return text+"]";
    }

    getHtml(tagName=""){
        let textHTML="";
        this.forEach(item=>{
            textHTML+=`<${tagName}>${item}</${tagName}>`;
          }); 

        if(tagName==="li") {
            textHTML=`<ul>${textHTML}</ul>`;
        }
        return textHTML;
     }
}


let arr1=new ExtentedArray([4,5,8]);
console.log(arr1.getString(";"));
console.log(arr1.getHtml("li"));
document.write(arr1.getHtml("li"));