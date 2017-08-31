/**
 * Created by TYRANT on 2017/8/31.
 */
var http = require("http");

var fs = require("fs");

function read(req,res) {
    fs.readFile("E://node/nodeTest.txt","UTF-8",function (err,data) {
        if(err)
            throw Error("读取错误");
        res.write(data.toString());
        res.end();
    });
}
http.createServer(read).listen(10000);