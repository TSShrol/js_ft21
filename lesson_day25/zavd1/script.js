// let form = document.querySelector('#formatter');
// form.onsubmit = function (event) {
//     event.preventDefault();
//     let text = document.querySelector('#enterJSON');

//     let valueJson;

//     let formatter = document.querySelector('#formatJSON');
//     try {
//         // console.dir(JSON.parse(text.value));
//         valueJson = JSON.parse(text.value);
//         console.log(valueJson.length);
//         console.log(valueJson);
//         formatter.value = JSON.stringify(valueJson, null, 4);
//     }
//     catch (error) {
//         alert(error);
//         text.focus();
//     }
// }


$(function() {
    $('#formatter').submit(function (e) {
        e.preventDefault();
        let text = $('#enterJSON');
        let valueJson;
        let formatter =$('#formatJSON');
        try {
            valueJson=JSON.parse(text.value);
            formatter.value = JSON.stringify(valueJson, null, 4);
        }
        catch (error) {
            alert(error);
            text.focus();
        }
    })
});