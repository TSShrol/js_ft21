class User {
    constructor(id, name, username, email, address = {}, phone, website, company = {}) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }

}
let arrUsers = [];

let sectionUsers = document.querySelector(".users");

// function getUsers() {
//     let request;
//     if (window.XMLHttpRequest) {
//         request = new XMLHttpRequest();
//     }
//     else {
//         request = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     request.open("GET", "https://jsonplaceholder.typicode.com/users");
//     request.onload = function () {
//         if (request.status === 200) {
//             alert(request.response);
//             let userJSON = JSON.parse(request.response);
//             userJSON.forEach(user => {
//                 arrUsers.push(new User(user.id, user.name,
//                     user.username, user.email,
//                     user.address, user.phone,
//                     user.website, user.company));

//             });
//             // console.dir(userJSON);
//             console.log(arrUsers);
//             addUsers(arrUsers);
//         }
//     }
//     request.send();
// }

// window.onload = getUsers;
$(function () {
    //  $(document).ready(function (event) {
        // event.preventDefault();
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            dataType: "json",
            success: function (data) {
                // код, який спрацює у разі успішного
                // надсилання форми на сервер
                console.dir(data);
             
            },
            error: function () {
                // код, який виводитиметься у разі помилки
                console.log("Error from mail!!!" + data);
            }
        });
    // });
});;

function addUsers(json) {
    // let sectionUsers = document.querySelector(".users");
    // for (const user of json) {
    //     let btnUser = document.createElement("input");
    //     btnUser.setAttribute("type", "button");
    //     btnUser.setAttribute("name", user.id);
    //     btnUser.setAttribute("value", user.name);
    //     btnUser.addEventListener("click", infoSelectUsers);
    //     sectionUsers.append(btnUser);
    // }
    let sectionUsers = $(".users");
    for (const user of json) {
        let btnUser = $("<input/>");
        btnUser.attr({
            "type":"button",
            "name":user.id,
            "value":user.name
        });

        btnUser.bind("click", infoSelectUsers);
        sectionUsers.append(btnUser);
    }
    
}

function infoSelectUsers() {
    fetch('https://jsonplaceholder.typicode.com/users?id=' + this.name)
        .then(response => response.json())
        .then(user => {
            console.log(user);
            addInfoUser(user);
        })
}
//table info
function addInfoUser(user){
    let sectionInfoUser=document.querySelector(".infoUser");
    sectionInfoUser.innerHTML="<h2> INFO USER </h2>"+JSON.stringify(user);

}

$(function(){
    let h2=$("<h2/>").html("Text");
    $(".usersPost").append(h2);
    console.dir();
    // $(".userPost").append($("<h2/>")).html("TEXT");
});