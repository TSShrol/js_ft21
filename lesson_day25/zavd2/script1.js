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
                console.log(typeof data);
                addUsers(data);
             
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
    console.dir(json);
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
    fetch('https://jsonplaceholder.typicode.com/user?id=' + this.name)
        .then(response => response.json())
        .then(user => {
            console.log(user);
            addInfoUser(user);
        }).catch(errer=>console.error("erorr!!!"))
}
//table info
function addInfoUser(user){
    let sectionInfoUser=document.querySelector(".infoUser");
    console.dir(sectionInfoUser);
    sectionInfoUser.innerHTML="<h2> INFO USER </h2>"+JSON.stringify(user);
    let btnShowPosts=$("<input/>");
    btnShowPosts.attr("type","button");
    btnShowPosts.attr("data-id","id");
    btnShowPosts.attr("value","Show posts");
    console.dir(btnShowPosts);
    btnShowPosts.bind("click", infoUsersPosts);
    // sectionUsers.append(btnUser);
    // sectionInfoUser.append(btnShowPosts);
    $(".infoUser").append(btnShowPosts);

}

$(function(){
    let h2=$("<h2/>").html("Text");
    $(".usersPost").append(h2);
    console.dir();
    // $(".userPost").append($("<h2/>")).html("TEXT");
});

function infoUsersPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            console.log(posts.userId);
            addInfoUserPosts(posts);
        })
    }

function addInfoUserPosts(posts) {
    let usersPosts=new WeakSet(); //user and his posts
    posts.forEach(post => {
        usersPosts.set(this,posts);
    });

   
    console.dir(usersPosts);
    $(".usersPost").append($('<p><p/>').text(JSON.stringify(posts)));
}

