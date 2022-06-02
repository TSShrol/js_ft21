//break - exit cicle
//continue - break itaration
//Сгенерувати не більше десяти випадкових чисел із діапазону 1-10. 
//Якщо випаде 5, то генерування зупинити

let randomN;   // 1 to 10

for (let i = 1; i <= 10; i++) {
    randomN = Math.round(Math.random() * 9) + 1;
    if (randomN == 5) break;
    console.log(randomN);
}

console.log("After cicle for= " + randomN);

for (let i = 1; i <= 10; i++) {
    randomN = Math.round(Math.random() * 9) + 1;
    if (randomN == 5 || randomN == 6 || randomN == 4) continue;
    console.log(randomN);
}

console.log("After cicle= " + randomN);
let i = 0, countI = 0;
while (i < 10) {
    randomN = Math.round(Math.random() * 9) + 1;
    if (randomN == 5 || randomN == 6 || randomN == 4) {
        countI++
        continue;
    }
    console.log(randomN);
    i++;
    countI++;
}

console.log("Iteration = "+countI);