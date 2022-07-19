
$(function () {
    // $(window).load(function () {

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            dataType: "json",
        }).done(function (data) {
            // код, який спрацює у разі успішного
            // надсилання форми на сервер
            console.dir(data);
        }).fail(function () {
            // код, який виводитиметься у разі помилки
            console.log("Error from mail!!!" + data);
        });
    // });
});


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

    // let getJsonString;
    // let sectionUsres=document.querySelector('.users');




    // function getUsers() {
    //     let request;
    //     if (window.XMLHttpRequest) {
    //         request = new XMLHttpRequest();
    //     }
    //     else {
    //         request = new ActiveXObject("Microsoft.XMLHTTP");
    //     }
    //     request.open("GET", "https://jsonplaceholder.typicode.com/users");
    //     // onreadystatechange OR
    //     request.onload = function () {
    //         if (request.status === 200) {
    //             alert(request.response);
    //             getJsonString = JSON.parse(request.response);
    //             // if return onlu text or null
    //             // alert(request.response);
    //             // getJsonString = JSON.parse(request.response);
    //             console.dir(getJsonString);
    //             createDomInfo();
    //         }
    //     }
    //     request.send();

    // }


    // window.onload=getUsers;
    // // getUsers();

    // function createDomInfo() {
    //     let sectionUsres = document.querySelector('.users');
    //     for (const user of getJsonString) {
    //         let btnUser = document.createElement("input");
    //         btnUser.setAttribute("type", "button");
    //         btnUser.setAttribute("name", user.id);
    //         btnUser.setAttribute("value", user.name);
    //         btnUser.addEventListener("click", infoSelectUsers);
    //         sectionUsres.append(btnUser)

    //     }
    // }

    // // function infoSelectUsers(){
    // //     console.dir(this.name);
    // //     let request;
    // //     if (window.XMLHttpRequest) {
    // //         request = new XMLHttpRequest();
    // //     }
    // //     else {
    // //         request = new ActiveXObject("Microsoft.XMLHTTP");
    // //     }

    // //     // https://jsonplaceholder.typicode.com/users?id=2
    // //     // або у скороченому варіанті:
    // //     // https://jsonplaceholder.typicode.com/users/2
    // //     request.open("GET", "https://jsonplaceholder.typicode.com/users?id="+this.name,true);
    // //     request.onload = function () {
    // //         if (request.status === 200) {
    // //             alert(request.response);
    // //             getJsonString = JSON.parse(request.response);
    // //             console.dir(getJsonString);
    // //             // createDomInfo();
    // //         }
    // //     }
    // //     request.send();
    // // }
    // function infoSelectUsers() {
    //     console.dir(this.name);
    //     fetch('https://jsonplaceholder.typicode.com/users/' + this.name)
    //         .then(response => response.json())
    //         .then(json => infoCurrentUser(json));

    // }

    // function infoCurrentUser(json) {
    //     let blockInfoUser = document.querySelector(".infoUser");
    //     blockInfoUser.innerHTML = JSON.stringify(json);

    // }