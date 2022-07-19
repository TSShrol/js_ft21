// let form=document.querySelector("#formatter");
// form.onsubmit=function(event){
//     event.preventDefault();
//     let text=document.querySelector('#enterJSON');
//     let textFormtJson=document.querySelector('#formatJSON');
//     let valueJson;
//     try{
//         valueJson=JSON.parse(text.value);
//         console.dir(valueJson);
//         // alert(JSON.stringify(valueJson,null,4));
//         textFormtJson.value=JSON.stringify(valueJson,null,4);
//     }
//     catch(error){
//         console.log(error);
//         alert(error.message);
//         // alert(error);

//     }
//     finally{
//         console.log("ALL OK!!");
//     }
// }

$(function(){
    $("#formatter").submit(function(event){
        event.preventDefault();
        let text=$('#enterJSON');
        let textFormtJson=$('#formatJSON');
        let valueJson;
        try{
            valueJson=JSON.parse(text.val());
            textFormtJson.val(JSON.stringify(valueJson,null,4));
        }
        catch(error){
            alert(error.message);
          }
        })

    });
    
