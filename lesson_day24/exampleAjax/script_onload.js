// let request;
// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// }
// else {
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// }
// request.open("GET", "example.txt");
// //onerror  onprogress
// request.onload = function () {
//     if (request.status === 200) {
//         alert(request.response);
//     }
// }
// request.send();
/*================================================================*/
let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}
else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Рівне&lang=uk&appid=3272b286b78e1921a75d84a10dce5e5d");

// request.onloaded = function (event) {
//     alert('Завантажено ${event.loaded}');
// }
// request.onerror = function () {
//     alert("Помилка");
// }

// onreadystatechange OR
request.onload = function () {
    if (request.status === 200) {
        alert(request.response);
    }
}

request.send();