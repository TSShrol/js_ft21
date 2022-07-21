/*
Принцип відкритості/закритості (Open/Close Principle)
Класи мають бути відкриті до розширення, але закриті для змін. 
Якщо є клас, функціонал якого передбачає чимало розгалужень або
багато послідовних кроків, і є великий потенціал, що їх кількість 
буде збільшуватись, то потрібно спроєктувати клас таким чином, 
щоб нові розгалуження або кроки не призводили до його модифікації.
*/
// class Square{
//     constructor(size){
//         this.size=size
//         this.type='square'
//     }
// }

// class Circle{
//     constructor(radius){
//         this.radius=radius;
//         this.type='circle';
//     }
// }
// class Rectangular{
//     constructor(wight, hight){
//         this.wight=wight;
//         this.hight=hight;
        
//         this.type='rectagular';
//     }
// }

// // /* Наприклад, є завдання підрахувати площу всіх фігур
// // */
// class AreaCalc{
//     constructor(shapes=[]){
//         this.shapes=shapes;
//     }
//     sum(){
//       return this.shapes.reduce((currentSum,shape)=>{
//                 if(shape.type=='square'){
//                     currentSum+=shape.size**2;
//                 }else if(shape.type=='circle'){
//                     currentSum+=(shape.radius**2)*Math.PI;
//                 }
//                 return currentSum;
//             },0);
//     }
// }

// let calculate=new AreaCalc([
//     new Square(4),
//     new Circle(3),
//     new Circle(6), new Rectangular(4,6)
// ]);
// console.log(calculate.sum());
/*
ПРоте, додавання нових фігур буде призводити до модифікації
класу AreaCalc, а це буде порушувати вказаний принцип.
Оскільки площа фігури тісно пов’язана із самою фігурою, 
можна змусити фігури самостійно рахувати свою площу, привести їх до одного 
інтерфейсу => базового класу, а тоді передавати їх у метод getArea.

*/
class Shape{
    area(){
        throw new Error('this method should be implemented!');
    }
};

class Square extends Shape{
    constructor(size){
        super();
        this.size=size
    }
    area(){
        return this.size**2;
    }
};

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    area(){
        return (this.radius**2)*Math.PI;
    }
};

class AreaCalc{ // закрили клас від змін
    constructor(shapes=[]){
        this.shapes=shapes;
    }
    sum(){
        return this.shapes.reduce((currentSum,shape)=>{
            currentSum+=shape.area();
            return currentSum;
        },0);
    }
};

let calculate=new AreaCalc([
    new Square(4),
    new Circle(3),
    new Circle(6)
]);
console.log(calculate);
console.log(calculate.sum());