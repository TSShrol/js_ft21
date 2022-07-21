/*
Принцип єдиного обов’язку (Single Responsibility Principle) => має бути однозначіність і одна мета визначеного класу 
Кожен клас повинен виконувати лише один обов’язок. Це не означає, що в нього має бути тільки один метод.
Це означає, що всі методи класу мають бути сфокусовані на виконання одного спільного завдання. Якщо є методи, 
які не відповідають меті існування класу, їх треба винести за його межі.
*/

'use strict'
class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true;
    }
    /* Наступны методи не выдповыдають першому принципу SOLID*/
//     toHTML() {
//         return `
//         <div class="news">
//            <h2>${this.title}</h2>
//            <p> ${this.text} </p>
//         </div>
//       `
//     }
//     toJSON(){
//         return JSON.stringify({
//             title: this.title,
//             text:this.text,
//             modified: this.modified
//         },null,4);
//     }
 };
// let news1 = new News("The best news", "Еhis news is the best news ever..");
// console.log(news1.toHTML());


class PrinterNews {
    constructor(news) {
        this.news = news;
    }

    html() {
        return `
        <div class="news">
            <h2>${this.news.title}</h2>
            <p> ${this.news.text} </p>
        </div>
      `
    }
    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 4);
    }
    xml() {
        return `
        <news>
            <title>${this.news.title}</title>
            <text>${this.news.text}</text>
        </news>
        `
    }
}

let news1 = new News("The best news", "Еhis news is the best news ever..");
const printer= new PrinterNews(news1);
console.log(printer.html());
console.log(printer.json());