//Рядки і їх властивості
const nameSt="Andriy";
console.log(nameSt[2]);
console.log(nameSt[6]);

let nameSt1 = new String("Igor\\");
//  \n, \t, \r, \\ 
console.log(nameSt1);
//Порахувати кількість div в рядку
let text="<div> <div> <span> info text </span></div></div>";
// "пилипилип"
let  word="div";
let counter=0;

let index=text.indexOf(word);
while(index!=-1){
    counter++;
    index=text.indexOf(word,index+1);
}
console.log(`Count "${word}" = ${counter}`);

let useWord=(text.includes("div")) ? "use":"not use";
console.log(useWord);
console.log(text.length);
useWord=(text.includes("span",40)) ? "use":"not use";
console.log(useWord);

//substring()  slice();

text="<div> <div> <span> info text about method sunstring and slice </span></div></div>";

word="span";

index=text.indexOf(word);
// copy from Console:

// word="JavaScript is lang".substring(4,10);
// 'Script'
// word="JavaScript is lang".substring(4,9);
// 'Scrip'
// word="JavaScript is lang".substring(4,10);

// 'Script'
// word1="JavaScript is lang".substring(4);

// 'Script is lang'
// word2="JavaScript is lang".slice(4,10);

// 'Script'
// word2="JavaScript is lang".slice(4,0);

// ''
// word2="JavaScript is lang".substring(0,4);

// 'Java'
// word2="JavaScript is lang".substring(4,0);

// 'Java'
// word2="JavaScript is lang".slice(-8,-4);

// ' is '
// word2="JavaScript is lang".substring(-8,-4);

// ''
// word3="Lang".repeat(4);
// 'LangLangLangLang'
// word3.charCodeAt(4);
// 76
// word3.charAt(4);
// 'L'
// "Катерина".charCodeAt(0);
// 1050
// word3="  lang  ";
// '  lang  '
// word3.trim();
// 'lang'
// word3=word3.concat(" Java Script");
// '  lang   Java Script'
// word3=word3.replace("Java","Python");
// '  lang   Python Script'
// word4="Lang ".repeat(4);
// 'Lang Lang Lang Lang '
// word4=word4.replace("Lang","lang");
// 'lang Lang Lang Lang '
// word4=word4.replaceAll("Lang","lang");
// 'lang lang lang lang '
// let arrWords=word4.split(" ");
// undefined
// console.log(arrWords);
// VM3039:1 (5) ['lang', 'lang', 'lang', 'lang', '']
// undefined
// console.log(word4.startsWith("lan"));
// VM3168:1 true
// undefined
// console.log(word4.startsWith("Lan"));
// VM3182:1 false
// undefined
// console.log(word4.endsWith("Lan"));
// VM3245:1 false
// undefined
// console.log(word4.endsWith("an"));
// VM3263:1 false
// undefined
// console.log(word4.endsWith("an "));
// VM3276:1 false
// undefined
// console.log(word4.endsWith("ang "));
// VM3292:1 true
// undefined
// word4.padStart(5)
// 'lang lang lang lang '
// word=word4.padStart(5);
// 'lang lang lang lang '
// word4.padStart(5,"Java");
// 'lang lang lang lang '
// let str1="text".padStart(10);
// undefined
// console.log(str1);
// VM3646:1       text
// undefined
// word4.padStart(word4.length+6,"Java");
// 'JavaJalang lang lang lang '
// word4.padEnd(word4.length+6,"Java");
// 'lang lang lang lang JavaJa'





