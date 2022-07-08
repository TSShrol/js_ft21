function printNodeHtml(){
    let arrNode=document.body.childNodes;
    for (const node of arrNode) {
        console.log(node.nodeName);
        console.log(node.nodeType);
        if(node.nodeType===1){
            console.log("TAG - Element");
        }else if (node.nodeType==2){
            console.log("Attribut ");

        }else if (node.nodeType==3){
            console.log('Text');
        }

        if(node.nodeName=='UL'){
            console.log("UL - ITEM:");
            console.log(node.parentNode);
            console.log(node.parentElement);
            console.log(node.firstChild);// first li
            console.log(node.lastChild);// first li
        }
    }

    
}
printNodeHtml();
let listItems=document.getElementById('list');
console.dir(listItems.firstChild); // ul>li..
console.dir(list);

let listTagLi=document.getElementsByTagName('LI');
console.log(listTagLi);
for(let i=0; i<listTagLi.length;i++){
    console.dir(listTagLi[i]);
    console.log(listTagLi[i].innerText);
};

//create element
let liItem=document.createElement('li');
liItem.setAttribute('class','liClass');

liItem.innerText="item6";
console.dir(liItem);
// document.getElementById('list').appendChild(liItem);
document.getElementById('list').prepend(liItem);

//add 4 item in ul
let ulList=document.getElementById('list');
for(let i=1; i<=4;i++){
    liItem=document.createElement('li'); 
    liItem.classList.add('liClass');
    liItem.innerText="item"+(i+6);
    ulList.append(liItem);
}
