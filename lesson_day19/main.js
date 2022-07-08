// let stepBullet=30;
// let isMove=false; // не рухається bullet -  рух зупинено


// document.body.onkeydown=function(event){

//     if (event.code=='Space' && !isMove){
//        console.log("play");
//        isMove=true;
//        moveBullet();
//     }
// }

// function moveBullet(){
//     // console.dir(bullet);
//     // console.log(isMove);
//     if(isMove===true){
//         // console.log(isMove);
//         bullet.style.left=(bullet.offsetLeft)+stepBullet+"px";
//         // console.dir(bullet);
//         if(bullet.offsetLeft>game1.clientWidth-bullet.clientWidth-50){
//             // console.dir(bullet);
//             bullet.style.left=0+"px";
//             isMove=false;
//         }
//         else{
//             setTimeout(moveBullet,10);
//         }
//     }



/*
Розташуйте 3 блока на сторінці. Напишіть інструкції, які забезпечать переміщення в точку, в якій
знаходиться вказівник (onmousemove): першого блоку — при натисканні лівої клавіші миші, другого блоку — при
натисканні середньої клавіші (або колеса), третього блоку — при натисканні правої клавіші миші => onmousedown . 
Контекстне меню не повинно з'являтися при натисканні правої кнопки миші.
*/

// document.body.onmousemove
// document.body.onmousedown
let xMove, yMove;
//body =>  pageX, pageY
//element div => offsetX, offsetY

function moveResultMouse(event) {
    // console.dir(event);
    xMove = event.offsetX;
    yMove = event.offsetY;
    // console.log(xMove);
}

function readingMouseDown(event) {
    // console.dir(event);
    // console.log(xMove);
    // console.log(yMove);
    switch (event.which) {
        case 1: //left button
            block1.style.left = xMove + "px";
            block1.style.top = yMove + "px";
            break;
        case 2: //left button
            block2.style.left = xMove + "px";
            block2.style.top = yMove + "px";
            break;
        case 3: //left button
            block3.style.left = xMove + "px";
            block3.style.top = yMove + "px";
            break;

    }
    event.preventDefault();

}
// game2.oncontextmenu = function () {
//     return false;
// }
// window.oncontextmenu=function(){
//     return false;
// }


// game2.onmousemove = moveResultMouse;
// game2.onmousedown = readingMouseDown;






// function moveBullet(){
//     console.dir(game1);
//     if (bullet.offsetLeft<=game1.clientWidth-bullet.clientWidth-50){
//         bullet.style.left=(bullet.offsetLeft)+stepBullet+"px";
//     }
//     else{
//         bullet.style.left=0;
//     }
// }

//event browser
// document.body.addEventListener("load",
//     function () { alert("Loaded resourses=>body"); }
// );

// document.addEventListener("DOMContentLoaded",
//     function () {
//         alert("DomContent loaded!");
//     }
// );

function printMsg(msg){
    console.dir(this);
    text.innerHTML+=msg+" <br>";
}



/*
Створіть HTML-сторінку для генерації випадкових чисел. На
сторінці має бути кнопка, при натисканні на яку випадкове ціле
число від 0 до 100 виводиться в div.

*/

buttonClick.onmousedown=function(){
    console.dir(this);
    let n=Math.round(Math.random()*100); // 0.3*100
    textInfo.innerHTML=n;
}

// Створіть HTML-сторінку, на якій буде кнопка і текст. Якщо
// натиснути кнопку, текст має бути прихованим. При повторному
// натисканні – текст знову з’являється.

//1. =>done
//2. =>done

let flagHidden=false; // show element

buttonHidden.onmousedown=function(){
    console.dir(textInfo);
    if(flagHidden){
        textInfo.style.display="block";
        // textInfo.hidden=false;
        flagHidden=false; //show element
    }else{
        textInfo.style.display="none";
        // textInfo.hidden=true;
        flagHidden=true; //hidden element
    }
}