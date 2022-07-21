
/*

https://www.youtube.com/watch?v=xq13wiqvcTc&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
https://dou.ua/lenta/articles/solid-principles/
Принцип підстановки Лісков (Liskov Substitution Principle)
Якщо об’єкт базового класу замінити об’єктом його похідного класу, 
то програма має продовжувати працювати коректно.
Якщо ми перевизначаємо похідні методи від батьківського класу, 
то нова поведінка не має суперечити поведінці базового класу.
*/
/*
class Person{
    access(){
        console.log('You have access');
    }
}

class Frontend extends Person{
    canCreateFrontend(){

    }
}

class Backend extends Person{
    canCreateBackend(){

    }
}

class FullstackOtherCompany extends Person{ //нема доступу до секрених дврей - інфи секрентої форми
    access(){
        throw new Error("You have not access!! Get Away!");
    }
}

function openSecretDoor(person){
    person.access();
}
openSecretDoor(new Frontend());
openSecretDoor(new Backend());


//Але нехай у нас є клас і йоо використання не відповідає уже даному принципу,
// адже дана функція має коректно працювати із всіма класами, а вона видає помилку,
//тобто некореткно працює з базовим класом Person , який розширяється FullstackOtherCompany
openSecretDoor(new FullstackOtherCompany());
*/

//виникла помилка і потрібно, що коректноппрацювала функція прописати різні кетічі тощо
//Вихід => потрібно перевірити рівень абстрактності базового класу, 
//наслідуватись від базового класу person не зовсім коректно
// тобто просто наслідуватись від Person людини не коректно.
// Frontend, Backend... але в них різний рівень логіки());
//краще додати ще один рівень абстрації
// наприклад  класс Member extends Person


class Person{
    
}

class Member extends Person{ //учасник даної компінії
    access(){
        console.log('You have access');
     }
}
class Guest extends Person{ //гість даної компінії тобто додаэмо новий рывень абстрацкыъ
   isGuest=true;
}

class Frontend extends Member{
    canCreateFrontend(){

    }
}

class Backend extends Member{
    canCreateBackend(){

    }
}

class FullstackOtherCompany extends Guest{ //нема доступу до секрених дврей - інфи секрентої форми
    access(){
        // throw new Error("You have not access!! Get Away!");
    }
}

function openSecretDoor(member){
    member.access();
}
openSecretDoor(new Frontend());
openSecretDoor(new Backend());
openSecretDoor(new FullstackOtherCompany()); //повинен бути member

// //ідеологічний принцип =Ю правильно обирати рівні абстракції