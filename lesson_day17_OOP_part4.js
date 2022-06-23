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

// class ExtentedArray extends Array{
//     constructor(arr=[]){
//         super(...arr);
//     }
//     getString(separator){ // [ilem1; item2; item3...]
//         let text="[";
//               // with for parametrs
//         // for(let i=0; i<this.length; i++){
//         //     // text+=String(this[i]).concat(separator).concat(" ");
//         //     text+=this[i]+separator+" ";
//         // }

//         //with foreach => for of
//         // this.forEach((item)=>{
//         //     text+=item+separator+" ";
//         // });

//         this.forEach(function(item){
//             text+=item+separator+" ";
//         });
//         return text+"]";
//     }

//     getHtml(tagName=""){
//         let textHTML="";
//         this.forEach(item=>{
//             textHTML+=`<${tagName}>${item}</${tagName}>`;
//           }); 

//         if(tagName==="li") {
//             textHTML=`<ul>${textHTML}</ul>`;
//         }
//         return textHTML;
//      }
// }


// let arr1=new ExtentedArray([4,5,8,6]);
// console.log(arr1.getString(";"));
// console.log(arr1.getHtml("li"));
// document.write(arr1.getHtml("li"));
// console.log(arr1.fill(25,1,5));

// class ExtentedArrayNew extends Array{
//     static countInstanse=0;
//     constructor(value){
//         super(value);
//         ExtentedArrayNew.countInstanse++;
//     }
//     getString(separator){ // [ilem1; item2; item3...]
//         let text="[";

//        // with foreach => for of
//         this.forEach((item)=>{
//             text+=item+separator+" ";
//         });

//            return text+"]";
//     }

//     getHtml(tagName=""){
//         let textHTML="";
//         this.forEach(item=>{
//             textHTML+=`<${tagName}>${item}</${tagName}>`;
//           }); 

//         if(tagName==="li") {
//             textHTML=`<ul>${textHTML}</ul>`;
//         }
//         return textHTML;
//      }

//      static printCountInstances(){
//         console.log("Count arr instance equal "+ ExtentedArrayNew.countInstanse);
//      }
// }


// let arr2=new ExtentedArrayNew(10);
// console.log(arr2.getString(";"));
// console.log(arr2.getHtml("p"));
// document.write(arr2.getHtml("p"));
// console.log(arr2.fill(Math.round(Math.random()*100)));
// let arr3=new ExtentedArrayNew(...arr2);
// console.log(arr3.getString(":"));
// console.log(arr3.countInstanse);
// console.log(ExtentedArrayNew.countInstanse);
// ExtentedArrayNew.printCountInstances();
// // let arr4=new Array();

/*
Реалізуйте клас, що описує геометричну фігуру з властивостями та методами:
■ get-властивість для отримання назви фігури;
■ метод для виведення інформації про фігуру (сторони та їх довжина);
■ метод для обчислення площі фігури;
■ метод для обчислення периметра фігури.
Реалізуйте класи-спадкоємці: квадрат, прямокутник, трикутник. Перевизначте методи виведення та обчислень у класах-спадкоємцях.
Створіть масив з різними фігурами та виведіть інформацію про кожну з них, включаючи площу та периметр.
*/

class Figure{
    static countFigure=0;
    #name;
    constructor(name="Figure"){
        this.#name=name;
        Figure.countFigure++;
    }
    get name(){
        return this.#name;
    }

    getInfoFigure(){
        console.log("Nothing");
    }

    getSquare(){
        return 0;
    }
    getPerimetr(){
        return 0
    }

}

class Tringle extends Figure{
    #side1;
    #side2;
    #side3;
    constructor(side1,side2,side3){
        super("Tringle");   
        this.side1=side1;     
        this.side2=side2;
        this.side3=side3;
    }

    get side1(){
        return this.#side1;
    }
    set side1(value){
        this.#side1=value>=0 ? value : 0;
    }
    get side2(){
        return this.#side2;
    }
    set side2(value){
        this.#side2=value>=0 ? value : 0;
    }
    get side3(){
        return this.#side3;
    }
    set side3(value){
        this.#side3=value>=0 ? value : 0;
    }

    getInfoFigure(){
        console.log(`Name figure "${this.name}" : \n a=${this.side1} \n b=${this.side2} \n c=${this.side3}`);
    }
    getPerimetr(){
        return this.side1+this.side2+this.side3;
    }
    getSquare(){
        let p=this.getPerimetr();
        return Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3));
    }
}

const figure1=new Tringle(4,5,6);
figure1.getInfoFigure();
console.log(figure1.getSquare());

//Прямокутник
class Rictangle extends Figure{
    #side1;
    #side2;
    constructor(side1,side2){
        super("Rictangle");   
        this.side1=side1;     
        this.side2=side2;
    }

    get side1(){
        return this.#side1;
    }
    set side1(value){
        this.#side1=value>=0 ? value : 0;
    }
    get side2(){
        return this.#side2;
    }
    set side2(value){
        this.#side2=value>=0 ? value : 0;
    }
    
    getInfoFigure(){
        console.log(`Name figure "${this.name}" : \n a=${this.side1} \n b=${this.side2}`);
    }
    getPerimetr(){
        return (this.side1+this.side2)*2;
    }

    getSquare(){
        return this.side1*this.side2;
    }
}

const figure2=new Rictangle(4,7);
figure2.getInfoFigure();
console.log(Figure.countFigure);

let arrFigures=[figure1, figure2, new Rictangle(2,5), new Tringle(5,6,8)];
console.log(arrFigures);
console.log(Figure.countFigure);
arrFigures.forEach(function(itemFigure){  //[item1, item2, ...]
    itemFigure.getInfoFigure();
    console.log(`Perimetr=${itemFigure.getPerimetr()}; square=${itemFigure.getSquare()}`);
});




