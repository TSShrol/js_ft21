/*
1. Зверстати слайдер.
2. Зробити перемикання фотографій вліво-вправо
3. Зробити перемикання фотографій при клацанні на нижніх фото
4. При клацанні на картинку збільшувати картинку.

*/

var images=[
	"adaptive1.png",
	"adaptive2.png",
	"adaptive3.png",
	"adaptive4.png",
	"adaptive5.png",
	"adaptive6.png",
	"adaptive7.png",
	"adaptive8.png",
	"adaptive9.png",
	"adaptive10.png"
];

//шлях до зображень
var path="img/slider/"

var currentImage=0;
//перше зображення 
$("#main-slider img")
		.attr("src",path+images[0])

//клацання по правій кнопці
$("#main-slider .next").click(function(){
	currentImage++;
	if (currentImage>=images.length){
		currentImage=0;
	}
	$("#main-slider img")
			.attr("src",path+images[currentImage]);

	//забираємо клас active
	$('#slides ul li').removeClass('active');

	//додаємо клас active до елементу в слайдері, id якого 
	//співпадає із currentImage  зображення на головному слайдері
 	$("li[data-id='"+currentImage+"']").addClass('active');
   
});

//клацання по лівій кнопці
$("#main-slider .pref").click(function(){
	currentImage--;
	if (currentImage<0){
		currentImage=images.length-1;
	}

	$("#main-slider img")
			.attr("src",path+images[currentImage]);

	//забираємо клас active
	$('#slides ul li').removeClass('active');

	//додаємо клас active до елементу в слайдері, id якого 
	//співпадає із currentImage  зображення на головному слайдері
 	$("li[data-id='"+currentImage+"']").addClass('active');
   
});


//створення карточок фотографій

for(var i=0; i<images.length; i++){
	
	//додаємо елемент в блок з мінізображенням
	$('#slides ul').append("<li data-id='"+ i +"'>"+
				"<img src='"+
						path+images[i]+
				"'></li>");
	
	//якщо це перше зображення, то додаємо клас active
	if(i==0){
		$('#slides ul li').addClass('active');
	}
}


//клацання по слайдy
$('#slides ul li').click(function(even){
	// отримання вмісту події even натиснення по елементу 
	// console.dir(even);

	//забираємо клас active
	$('#slides ul li').removeClass('active');

	//аналогічний код видалення класу active на javascript:
	// for(var i=0; i<images.length; i++){
	// 	var li=document.querySelector("li[data-id='"+i+"']");
	// 	li.className="";
	// }

	//додаємо клас active до едементу, на якому клацнули мишкою
    $(this).addClass('active');
    
    //отримуємо id елемента, на якому клацнули мишкою
   	var id=this.dataset.id;
   	
   	//міняємо картику в слайді
   	$("#main-slider img")
			.attr("src",path+images[id]);
});


//збільшення зображення картинки на весь екран
$("#main-slider img").click(function(){
		$('#opacity').css({'display':'block'});
		$('#full-image')
				.css({'display':'block'})
				.append("<img src='"+$(this).attr('src')+"'>");
});

//при натисканні за межами зображення забираємо збільшену картинку
$("#opacity").click(function(){
		$('#opacity').css({'display':'none'});
		$('#full-image').css({'display':'none'}).empty();
});