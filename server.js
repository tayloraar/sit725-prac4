var express = require('express');
var moment = require('moment');
const MongoClient = require('mongodb').MongoClient;

var app=express()

app.use(express.static(__dirname + '/public'));

var log = function(message){
    var time=moment().format()
    console.log( `[Server] @ ${time} ${message}`);
}

var port = 3000;
app.listen(port);
log(`server listening on: ${port}`);

app.get("/comment",function(req,res){
    let comment=req.query.comment
    insertComment(comment);
    res.send("added")
})

//DataBase Management - I was lazy and set it up for the assignment so it can just be recycled then.

const uri = "mongodb+srv://sit725:sit725@sit725-assignment1-task.la1a9.mongodb.net/insta?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

let collectionMessages;

client.connect(err => {
    collectionMessages = client.db("insta").collection("messages");
  });
  

const insertComment=(abc)=>{
   collectionMessages.insertOne({message:abc});
};

// setTimeout(function(){
//     insertComment('Test 2');
// },1000)


