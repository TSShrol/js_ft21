/*
Гра «Вгадай число». Запропонуйте користувачеві загадати
число від 0 до 100 і відгадати його наступним способом: в
кожній ітерації циклу поділяєте діапазон чисел навпіл,
записуєте результат в N і запитуєте у користувача «Ваше
число > N, < N або == N?». Залежно від відповіді користувача,
зменшуєте діапазон. Початковий діапазон від 0 до
100, поділяєте навпіл і отримуєте 50. Якщо користувач
вказав, що його число > 50, змінюєте діапазон числа від 51
до 100. І так доти, доки користувач не вибере == N
*/

// let number, randNumber;
// alert("Гра вгадай число від 0 до 100! Старт...");
// randNumber=Math.trunc(Math.random()*100);   
// console.log(randNumber);//90
// do{
//     number=+prompt(`Ваше число  ${startDiapazon} до ${endDiapazon} `);//45
//     if(number==randNumber){
//         alert(`Загадане число = ${number} `);
//     }else if(number>randNumber){
//         alert(`Загадане число < ${number} `);
//     }else if(number<randNumber){
//         alert(`Загадане число > ${number} `);
//     }
// }while(number!==randNumber);
// //false -> exit from cicle
// console.log("FINISH!");

let number, resultNumber, start=0, end=100, seredina=Math.round((end-start)/2);
let answerUser;
alert("Пограймо! Загадай число від 0 до 100! Старт?");
//70 

do{
   answerUser=prompt(`Ваше число > ${seredina}, < ${seredina} чи ==${seredina}`);
   switch(answerUser){
       case ">": 
          start=seredina+1;
          seredina=start+Math.round((end-start)/2)
        //   start=seredina;
          break;
       case "<":
          end=seredina;    
          seredina=start+Math.round((end-start)/2)
          break;
       default: 
          alert("Не зрозуміла відповідь!")
   }
   
}while(answerUser!=="==")

//
let row;
for(let j=2; j<=9;j++){
    row=""
    for(let i=1; i<=10; i++){
        row=row+j*i+" ";
        
    }
    console.log(row);
}
/*
j=1
  i=1   j*i=1
  i=2   j*i=2
  i=3   j*i=3
  ...
  i=10  j*i=10
j=2 
  i=1   j*i=4
  i=2   j*i=6
  i=3   j*i=8
  ...
  i=10  j*i=20
*/

/*
Зацикліть виведення днів тижня таким чином: «День
тижня. Бажаєте побачити назву наступного дня тижня?”,
і так доти, доки користувач натискатиме OK. */

// let answerUser;
// let day;
// let numberDay=1;
// do{
//     if (numberDay>7){
//         numberDay=1;
//     }
//     switch(numberDay){
//         case 1: day="Понеділок"; break;
//         case 2: day="Вівторок"; break;
//         case 3: day="Середа"; break;
//         case 4: day="Четвер"; break;
//         case 5: day="П'ятниця"; break;
//         case 6: day="Субота"; break;
//         case 7: day="Неділя"; break;
//     }
//     numberDay++;
// }while(confirm(`${day}. Бажаєте побачити назву наступного дня тижня?`));

// console.log("FINISH!!!");
    


let sumabal=0;
let q=+promt("Запиання. 1 . \n 1) foreach \n 2) for \n 3) while  ")
if(q==2){
   sumabal+=2;
}
q=+promt("Запиання. 2 . \n 1) foreach \n 2) for \n 3) while  ")
if(q2==2){
   sumabal+=2;
}
alert("bal!!!");

// for in for of
// for (variable of object) statment
//     

masiv=[5,4,6,7]
