let classDiv=document.getElementsByClassName('old_grandfather');
console.log(classDiv[0]);
console.dir(classDiv[0]);
let old_grandfather=document.querySelector(".very_old_grandfather");
console.dir(old_grandfather);
let currentColor=window.getComputedStyle(old_grandfather).backgroundColor;
console.log(currentColor);


/*Завдання на закріплення матеріалу:
Необхідно зробити події для кожного квадрата, при натисканні на квадрат відбуватиметься таке:
•	Колір елемента, за яким відбувся клік, змінюватиметься на колір батька
•	Колір батька змінюватиметься на колір елемента, за яким стався клік.
•	Якщо стався клік по верхньому елементу з класом «very_older_grandfather», його колір змінюється на колір елемента з класом «grandson»,
 а колір елемента з класом «grandson» стає як був у елемента з класом «very_older_grandfather»
o Додаткова не обов'язкова задача: реалізувати вище функціонал 2-ма різними способами.*/
let  very_old_grandfather=document.querySelector('.very_old_grandfather');
very_old_grandfather.onclick=function(event){
    let currentColor, parentColor, currentElem, changeElem;
    
    if(event.target.className=='very_old_grandfather' || event.target.className=='grandson' ){
        // console.dir(event.target.className);
        console.dir(event.target.attributes[1]);
        console.log(event.target.getAttribute("infotext"));
        console.log(event.target.id);
        console.dir(event.target);
        console.dir(event.target.dataset.infotext);
        //зчитуємо дані дуже старого  діда
        currentElem=document.querySelector('.very_old_grandfather');
        currentColor=window.getComputedStyle(currentElem).backgroundColor;
        //зчитуємо дані внука
        changeElem=document.querySelector('.grandson');
        parentColor=window.getComputedStyle(changeElem).backgroundColor;
        //міняємо колір фону
        currentElem.style.backgroundColor=parentColor;
        changeElem.style.backgroundColor=currentColor;
    }else{
        // console.dir(event.target.classList);
        // console.dir(event.target.classList.value);
        // console.dir(event.target.className);

        // let listClassSon=document.querySelector("grandfather").classList.value;
        // console.dir(listClassSon);
           //зчитуємо дані поточного елемента
           currentElem=document.querySelector('.'+event.target.classList.value);
           currentColor=window.getComputedStyle(currentElem).backgroundColor;
           //зчитуємо дані parrent
        //    console.dir(currentElem.parentElement.classList.value);
           changeElem=document.querySelector('.'+currentElem.parentElement.classList.value);
           parentColor=window.getComputedStyle(changeElem).backgroundColor;
           //міняємо колір фону
           currentElem.style.backgroundColor=parentColor;
           changeElem.style.backgroundColor=currentColor;

    }
   
}