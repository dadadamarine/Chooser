var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // post 라우팅시 req.body를 사용하기 위한 모듈


app.get('/', (req, res)=>{
    res.send("hi");
});


app.listen(80, ()=>{
   console.log("Connected 80 port"); 
});