$(document).ready(function(){
    console.log("Document ready");

    //This is posting a message from the board
    $("#btnMessage").click(function(){
        let comment = $("#messageBox").val()
        let data={
            comment
        }
        $.get("/comment", data,function(){

        })
    });

    //This block handles the retreival of messages and adds them to the board

    //get messages
    setInterval(()=>{
        $.get("/comments", function(comments){
            $("#comments").empty();
               comments.forEach((comment)=>{
                 $("#comments").append(`<div class='row'>${comment.message}</div>`);
            });
        });
    },1000);
   


})