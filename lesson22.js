//Скласти список завдань на день. Властивості: title, time(minutes), done  (true false)
//1) Написати функцію виведення справ на екран: спочатку ті, що зроблені, а потім, які аотрібно виконати.
//2) Написати функцію додавання справи у список справ.
//3) Написати функцію, що виводить інформацію про завдання, на яке витрачено найменше часу

let listTasks=[
    {title: "task1", time: 15, done: true },
    {title: "task2", time: 10, done: false },
    {title: "task3", time: 30, done: false },
    {title: "task4", time: 45, done: true },
]

function compareDone(value1, value2){
    if(value1.done>value2.done) return -1;
    else if(value1.done<value2.done) return 1;
    else return 0;
}

function  compareTime(value1, value2){
    if(value1.time>value2.time) return 1;
    else if(value1.time<value2.time) return -1;
    else return 0;

}

// listTasks.sort(compareDone);
// console.log(listTasks);
// let listTaskSort=new Array(...listTasks); // =[...listTasks]
// listTaskSort.sort(compareTime);
// console.log(listTaskSort);

function printListTasks(listTasks=[]){
    listTasks.sort(compareDone);
    // 1. task1 10 true
    // for(let i = 0; i < listTasks.length; i++) {
    //     console.log(`${i+1}. ${listTasks[i].title} ${listTasks[i].time} ${listTasks[i].done}`);
    // }
    for(let item of listTasks){
        console.log(`${item.title} ${item.time} ${item.done}`);
    }
       
}


printListTasks(listTasks);

function addEntry(listTasks,title,time,done=false){
     let isFlag=false;
     for(let item of listTasks){
         if (item.title==title){
             item.time+=time; 
             isFlag=true;
             break;
         }
     }
     if(!isFlag){
        //  listTasks.push({title:title,time:time,done:done});
         listTasks.push({title,time,done});
     }
}

addEntry(listTasks,"task5",60);
// console.log(listTasks);
printListTasks(listTasks);
console.log("=================task1===================");
addEntry(listTasks,"task5",10);
printListTasks(listTasks);

/*
Створіть масив CSS-стилів (колір, розмір шрифту, вирівнювання, підкреслення тощо). 
Кожен елемент масиву – це об’єкт, що складається із двох властивостей: назва та значення стилю.
Напишіть функцію, яка приймає масив стилів та текст, і виводить цей 
текст за допомогою document.write() у тегах <p style=textStyle></p>,
додавши у відкритий тег атрибут style з усіма стилями, переліченими у масиві. 
*/

let arrStyle=[
    {property: "color" , value: "green"},
    {property: "background-color", value: "blue"}
]

function printHtml(arrStyle,text=""){
    let textStyle="";
    for (let item of arrStyle) {
        textStyle+=item.property+":"+item.value+"; ";
    }
    console.log(textStyle);
    document.write(`<p style="${textStyle}">${text}</p>`) ;
}

printHtml(arrStyle,"We are learning JavaScript!");




