
//引入express框架
var express = require("express");
//实例化express
var app = express();
//使用内置中间static共享public
app.use(express.static(__dirname+"/public"));

//express框架创建一个get程序
app.get("/express",function (request,response) {
    response.send("任超真浪");
});
app.listen(10000);