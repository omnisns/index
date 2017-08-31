var express = require("express");

var fs = require("fs");

var path = require("path");

var app = express();
//将public设置为公开资源
app.use(express.static(path.join(__dirname,"../")+"/public"));

app.get("/read",function (request,response) {
    response.redirect("test.txt");
});

app.all("/index",function (request,response) {
    response.send("欢迎");
});

app.listen(10000,function (err) {
    if(err)
        console.log("启动错误");
    else
        console.log("启动成功");

});