var express = require("express");
var app     = express();
var path    = require("path");
//
var PORT = 3000;


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(PORT);

console.log("Node is Running at port " + PORT);