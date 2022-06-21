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

/* Використання методыв доступу get, set до полів 
   /визначаємо приватне поле
   #field;
   set field(value){
    this.#fiels=value;
   }

   get field(){
        return this.#field;
   }
*/
class Human {
    // name="Unknown";
    // age=18; 
    #age = 18;
    #id;
    constructor(name, age, id) {
        this.#id = id;
        this.name = name; //public
        this.#age = age; //# private
        // console.log("Call constructor!");
    }
    set id(value) {
        this.#id = value;
    }

    set age(age) {
        console.log(`Задано значення: ${age}`);
        if (age > 0 && age < 100) this.#age = age;
        else console.log("Error!");
    }

    get age() {
        return this.#age;
    }
    move(place) {
        console.log(`${this.name} go to ${place}`);
    }
    print() {
        console.log("id: " + this.#id + " - " + this.name + " is " + this.#age + " years old");
    }

}

let human1 = new Human("Galina", 29, 1);
console.log(human1.age);
human1.age = 35;
console.log(human1.age);
console.log(human1.id);
human1.print();
human1.id = 2;
human1.print();

/*
Реалізуйте клас, що описує новину (заголовок, текст, масив тегів, дата публікації). 
У класі необхідно реалізувати один метод print, який виводить всю інформацію у такому вигляді, як на рисунку 1.
Зверніть увагу, як виводиться дата:
■ якщо з дати публікації пройшло менше дня, то виводиться «сьогодні»;
■ якщо з дати публікації пройшло менше тижня, то виводиться «N днів тому»;
■ в інших випадках – повна дата у форматі «день.місяць.рік».
*/

class HtmlPageNews {
    #titleNews;
    #textNews;
    #arrTag;
    #datePublic;
    constructor(titleNews = "", textNews = "", arrTag = [], datePublic = new Date()) {
        this.titleNews = titleNews;
        this.#textNews = textNews;
        this.#arrTag = arrTag;
        // this.#datePublic=datePublic;
        this.#datePublic = new Date(datePublic) == "Invalid Date" ? new Date() : new Date(datePublic);
    }

    get titleNews() {
        return this.#titleNews;
    }
    // можна використовувати для присвоєєня значення лише назву властивості (поля) буз #
    set titleNews(titleNews) {
        this.#titleNews = titleNews;
    }
    get textNews() {
        return this.#textNews;
    }
    get arrTag() {
        return this.#arrTag;
    }

    get datePublic() {
        return this.#datePublic;
    }
    print() {
        let textHTML = "";
        document.write(`<h3>${this.titleNews}</h3>`);
        let createDate = (Date.now() - Date.parse(this.datePublic)) / (24 * 60 * 60 * 1000)
        let textDate = "";
        // console.log(new Date(Date.now()-Date.parse(this.datePublic)).getHours());
        //create text for date
        if (createDate < 1) textDate = "today";
        else if (createDate <= 7) textDate = Math.round(createDate) + " days ago"
        else textDate = this.datePublic.toLocaleDateString();

        document.write(`<p>${textDate}</p>`);
        document.write(`<p>${this.textNews}</p>`);
        for (const htag of this.#arrTag) {
            textHTML += "#" + htag + " ";
        }
        document.write(textHTML);
    }

}
let title = "What is lorem ipsum";
let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ea voluptates reiciendis corrupti consequatur, obcaecati, maxime ratione eius ullam minus tempora recusandae ad quae harum accusantium numquam perferendis tenetur. Dolor?"
let arrTagNews = ["lorem", "ipsum", "text"];
let news1 = new HtmlPageNews(title, text, arrTagNews, "06/16/2022");
// news1.print();
console.log(news1);
let news2 = new HtmlPageNews(title, text, arrTagNews, "06/10/2022");
// news2.print();
let news3 = new HtmlPageNews(title, text, ["script", "js"], "05/25/2022");
// news3.print();

// console.log((Date.now()-Date.parse("06/16/2022"))/(24*60*60*1000));
// console.log((Date.now()-Date.parse("06/15/2022"))/(24*60*60*1000));




/*
Реалізуйте клас, що описує стрічку новин. Клас має містити:
■ масив новин;
■ get-властивість, яка повертає кількість новин;
■ метод виведення на екран усіх новин;
■ метод додавання новини;
■ метод видалення новини;
■ метод сортування новин за датою (від останніх новин до старих);
■ метод пошуку новин за тегом (повертає масив новин, в яких вказано переданий тег у метод).
Продемонструйте роботу написаних методів.
*/

class LineNews {
    #arrNews = [];
    constructor(arrNews) {
        this.#arrNews = arrNews
    }
    get arrNews() {
        return this.#arrNews
    }

    getLen() {
        return this.arrNews.length
    }

    // друк новин із масиву новин
    printNews() {
        // for (const news of this.arrNews) {
        //     news.print();
        // }
        for (let i = 0; i < this.getLen(); i++) {
            this.arrNews[i].print();
        }
    }

    // метод додавання новини;
    addNews(news = new HtmlPageNews()) {
        this.arrNews.push(news);
    }

    // метод видалення новини;
    deleteNews() {
        this.arrNews.shift();
    }
    //метод сортування новин за датою (від останніх новин до старих);
    sortDate() {
        function compareDate(news1, news2) {
            if (news1.datePublic > news2.datePublic) return -1;
            else if (news1.datePublic < news2.datePublic) return 1;
            else return 0;
        }
        this.arrNews.sort(compareDate);
    }
    //метод пошуку новин за тегом (повертає масив новин, в яких вказано переданий тег у метод).
    findNewsByTag(tag) {
        let newArrNews = [];
        for (const news of this.arrNews) {
            let isTag = false;
            for (const htag of news.arrTag) {
                if (htag == tag) { isTag = true; break; }
            }
            if (isTag) newArrNews.push(news);
        }
        return newArrNews;
    }
}

let arraysNews = [news2, news1, news3];
let news4 = new HtmlPageNews(title, text, ["script"], "05/30/2022");
let lorenNews = new LineNews(arraysNews);
// consolw.log(lorenNews.arrNews);
// lorenNews.printNews();
lorenNews.addNews(news4);
lorenNews.sortDate();
lorenNews.printNews();
// lorenNews.findNewsByTag("text");
console.log(lorenNews.findNewsByTag("script"));
// lorenNews.deleteNews();
// lorenNews.deleteNews();
// lorenNews.printNews();
