console.log(clickDiv);

// clickDiv.onclick=function(){
//     alert("Clicked DIV!!");
//     console.dir(clickDiv);
// }
// clickDiv.addEventListener("click",
//                 function(){
//                     alert("Clicked DIV!!");
//                 })


// using object event
// clickDiv.onclick=function(event){
//     // alert("Clicked DIV!!");
//     console.log(event.target.id);
//     console.dir(clickDiv);
//     console.dir(this);
// }

clickDiv.style.backgroundColor = "red";
clickDiv.style["background-color"] = "yellow";

function changeBgColor() {
    if (clickDiv.style.backgroundColor == "red") {
        clickDiv.style.backgroundColor = "yellow";
    }
    else {
        clickDiv.style.backgroundColor = "red";
    }
}

clickDiv.onclick = changeBgColor;

function outText(text) {
    console.log(text);
    out.innerText += " " + text;
    // console.dir(this);
}
console.dir(out);
out.innerText = "<b>Boald Text</b>";

out.innerHTML = "<b>Boald Text</b>";

function readingClick(event) {
    // console.dir(event);
    console.dir(event.target)
}

function findCoords(e) {
    console.dir(e);
    d3.innerText = `Coords: ${e.clientX} ${e.clientY}`; //rgb(125,e.clientX,e.clientY)
    d3.style.backgroundColor = `rgb(125,${e.clientX},${e.clientY})`;
    // d3.style.backgroundColor="#aa2345";


}

console.dir(d3);

// Розташуйте на сторінці 4 блока, як показано на рисунку.
//  Напишіть інструкції, які змінюють колір нижнього блоку залежно від того, 
//  на якому з верхніх блоків знаходиться вказівник миші. Якщо вказівник не 
//  знаходиться над одним з верхніх блоків, нижній блок повинен бути сірого коль
let b1 = document.querySelector("#block1");
console.dir(b1.style.backgroundColor);
game.onmouseover = function (event) {
    console.dir(event.target.id);

    if (event.target.id == "block1") {
        block4.style.backgroundColor = "green";
        block4.style.backgroundColor=window.getComputedStyle(block1).backgroundColor;;
    } else if (event.target.id == "block2") {
        // block4.style.backgroundColor = "yellow";
        block4.style.backgroundColor = window.getComputedStyle(block2).backgroundColor;


    } else if (event.target.id == "block3") {
        block4.style.backgroundColor = window.getComputedStyle(block3).backgroundColor;
    } else {
        block4.style.backgroundColor = "gray";
    }

}

block5.onmousedown = function (e) {
    console.dir(e);
    
    let bgColor;
    switch (e.which) {
        case 1: bgColor = "yellow";
            break;
        case 2: bgColor = "red";
            break;
        case 3:
            bgColor = "green";
            break;
        default: bgColor = "blue";

    }
    block5.style.backgroundColor=bgColor;
}

window.block5.oncontextmenu=function(){
    return false;
}

document.body.onkeydown=function(e){
    console.dir(e);
}
block6.client=100+"px";
console.dir(block6);
