/* <div id="ball"></div> */
let igra = document.querySelector('#igra');
//create div ball
let divBall = document.createElement('div');
divBall.id = "ball";
// console.log(divBall);
igra.append(divBall);
/* <div id="stars"> 0 </div> */
let divStars = document.createElement('div');
divStars.id = "stars";
divStars.innerHTML = 0;
igra.append(divStars);
/* 
	<div id="lifes">
		<span></span>
		<span></span>
		<span></span>
	</div> 
*/
let divLifes = document.createElement('div');
divLifes.id = "lifes";
igra.append(divLifes);
let countLifes = 5;

// let span = document.createElement('span');
// for (let i = 0; i < countLifes; i++) {
// 	divLifes.append(span);
// 	span = span.cloneNode(true);
// 	// divLifes.append(span);
// }


for (let i = 0; i < countLifes; i++) {
	let span = document.createElement('span');
	divLifes.append(span);
}


//Виконання дій з ball
// console.dir(divBall);
let startBall=setTimeout(function(){
	divBall.style.display="block";
},100);

// console.dir(igra);
let step=5;
let timeBall;
let lifes=document.getElementById('lifes');

function moveBall(){
	console.dir(divBall.offsetTop);
	console.dir(lifes);
	if(divBall.offsetTop+divBall.offsetHeight>igra.offsetHeight){
		clearTimeout(timeBall);
		lifes.firstChild.remove();
		removeBall();
	}else{
		divBall.style.top=divBall.offsetTop+step+'px';
		timeBall=setTimeout(moveBall,1000);
		
	}

}
moveBall();

 lifes = document.querySelector("#lifes");
console.log(lifes);

 let stars = document.querySelector("#stars");
// stars.style.color="blue";
// lifes.innerHTML = "<span></span><span></span><span></span><span></span><span></span>";

//my_function 
let i = 0;
ball.onclick = function () {
	i = i + randNumber(5, 10);
	stars.innerText = i;
	removeBall();
}

stars.onclick = function () {
	i = 0;
	stars.innerText = i;
}
//2 14
function randNumber(min, max) {
	return Math.round(Math.random() * (max - min + 1)) + min;
}


function removeBall(){
	let ball=document.querySelector('#ball');
	console.dir(ball);
	ball.remove();	

}