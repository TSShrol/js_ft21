/*
https://dou.ua/lenta/articles/solid-principles/ 
Принцип інверсії залежностей (Dependency Inversion Principle)
Він складається з двох тверджень:
- високорівневі модулі не повинні залежати від низькорівневих. 
І ті, і ті мають залежати від абстракцій;
- абстракції не мають залежати від деталей реалізації. 
Деталі реалізації повинні залежати від абстракцій.
*/

// class Fetch{
//     request(url){
//         return fetch(url).then(response=>response.json());
//     }
// }

// // // 2_етап тут зявляється потреб зберігати дані не дб, а в LocalStorage
// // // тоді починаємо його створювати.

// class LocalStorage{
//     constructor(key, value){
//         this.key=key;
//         this.value=value;
//         localStorage.setItem(this.key, this.value);
//     }
//     get(){
//         return localStorage.getItem('key');
//     }
// }

// class Database{
//     constructor(){
//         //інструмент для взаємлдії з БД
//         // this.fetch=new Fetch();
//         //2-й етап
//         this.localStorage=new LocalStorage('key','ls');
//     }
//     //отримуємо дані
//     getData(){
//     //    return  this.fetch.request('https://jsonplaceholder.typicode.com/users');
//            //2-й етап
//         return   this.localStorage.get('key')
//     }
// }

// const db= new Database();
// console.log(db.getData());

//тобто другий етап показує, зо клас Database знову потрыбно заново реалызувати, випралвяти

//Як переписати даний код щоб він відповідав даному принципу
// потрібно визначити клас, який би являвся інтерфейсом і забезпечував би взаємодію між цими 
//сутностями : чи зовнішнє сховище бд, чи локальне в браузері

//наприклад, стовримо клас FetchClient для обгортання класу Fetch
//та LocalStorageClient для взаємодії тільки з localStorage
class Fetch{
    request(url){
        return fetch(url).then(response=>response.json());
    }
}
class FetchClient{
    constructor(){
        this.fetch=new Fetch();
    }
    clientGet(url)
    {
        return this.fetch.request(url);
    }

}
class LocalStorage{
    constructor(key, value){
        this.key=key;
        this.value=value;
        localStorage.setItem(this.key, this.value);
    }
    get(key){
        return localStorage.getItem(key);
    }
}

class LocalStorageClient{
    constructor(key,value){
        this.localStorage=new LocalStorage(key,value);
    }
    clientGet(key)
    {
        return this.localStorage.get(key);
    }
}
//Описані клієнти інжектують в себе інші обєкти
//клас тепер ні від чого не залежить і від абстрацкцій нижчого рівня
//залежить тільки від значень, що передали в клас
class Database{
    constructor(client){ 
       this.client=client;
    }
    //отримуємо дані
    getData(key){
       return   this.client.clientGet(key);
    }

}


const db= new Database(new FetchClient());
console.log(db.getData('https://jsonplaceholder.typicode.com/users'));

const db1= new Database(new LocalStorageClient('db','ls'));
console.log(db1.getData('db'));
