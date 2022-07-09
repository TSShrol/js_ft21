function viewListUser(users = []) {
    let listUsers = document.querySelector('#listUser>ul');
    // console.dir(listUser);
    let textListUser = "";
    for (let i = 0; i < users.length; i++) {
        // console.log(users[i]);
        textListUser += `<li data-id="${users[i].id}" onclick="selectedUser(this)">
                            <div class="avatar">
                                <img src="./${users[i].photo}">
                            </div>
                            <h3>${users[i].name}</h3>
                            <p>${users[i].message}</p>
                            <div class="time">21:00</div>
                        </li>`
    }
    listUsers.innerHTML = textListUser;
    // listUsers.firstElementChild.className="selectedUser";
    listUsers.firstElementChild.classList.toggle("selectedUser");
}

//отримання обєкта user за його ключем id
function getUser(id, users = []) {
    let i = 0;
    // console.log(users[0]);
    while (i < users.length) {
        if (users[i].id == id) {
            return users[i];
        }
        i++;
    }
}
console.log(getUser(1, users));
console.log(getUser(2, users));


// function viewListMessages1(list_messages) {
//     //ul
//     let listMessages = document.querySelector('#list-messages ul');
//     for (let i = 0; i < list_messages.length; i++) {
//         //id-> user from array =users
//         let user_to_from=getUser(list_messages[i].user_id_from,users);
//         // console.dir(user_to_from);
//         //li
//         let li = document.createElement('LI');
//         listMessages.append(li);

//         let div = document.createElement('DIV');
//         // div.className="avatar";
//         div.classList.add("avatar");
//         li.append(div);

//         let img = document.createElement('IMG');
//         img.src=`./${user_to_from.photo}`;
//         div.append(img);

//         let h3 = document.createElement('H3');
//         h3.innerText=user_to_from.name;
//         li.append(h3);

//         let p = document.createElement('p');
//         p.innerText=user_to_from.message;
//         li.append(p);

//     }

// }


function viewListMessages(user_seleted_id, list_messages) {
    //ul
    let listMessages = document.querySelector('#list-messages ul');
    for (let i = 0; i < list_messages.length; i++) {
        //id-> user from array =users
        let user_from = getUser(list_messages[i].user_id_from, users);
        let user_to = getUser(list_messages[i].user_id_to, users);
        // console.dir(user_to_from);
        console.log(user_seleted_id == user_from.id);
        if (user_seleted_id == user_from.id || user_seleted_id == user_to.id) {
            //li

            let li = document.createElement('LI');
            listMessages.append(li);

            let div = document.createElement('DIV');
            // div.className="avatar";
            div.classList.add("avatar");
            li.append(div);

            let img = document.createElement('IMG');
            img.src = `./${user_from.photo}`;
            div.append(img);

            let h3 = document.createElement('H3');
            h3.innerText = user_from.name;
            li.append(h3);

            let p = document.createElement('p');
            p.innerText = list_messages[i].message;
            li.append(p);
        }

    }

}
let userSelectedId = null;

function selectedUser(event) {
    let listUsers = document.querySelector('#listUser>ul');
    //     console.dir(event.dataset['id']);
    console.log(event.dataset.id);
    //    console.dir(listUsers.querySelector('.selectedUser'));
    listUsers.querySelector('.selectedUser').classList.toggle('selectedUser');
    event.classList.toggle('selectedUser');
    userSelectedId = event.dataset.id;
    deleteElements();
    viewListMessages(userSelectedId, list_messages);

}


function deleteElements(){
    let listMessages=document.querySelector('#list-messages>ul');
    let elemDel=document.querySelectorAll("#list-messages>ul li");
    for(let i=elemDel.length-1; i>=0;i--){
        elemDel[i].remove();
     }
}


//відкриття модального вікна 
let btnOpenSign = document.querySelector("#open-sign");
btnOpenSign.onclick = function () {
    document.querySelector("#sign-modal").style.display = "block";
}

//закритаття модального вікна
let btnSignModalClose = document.querySelector("#sign-modal .close");
btnSignModalClose.onclick = function () {
    document.querySelector("#sign-modal").style.display = "none";
}


/*===============================================================*/
//call function
viewListUser(users);
// viewListMessages1(list_messages);

