/**
 *
 */
var  http = require("http");

var fs = require("fs");

function copy(req,res) {

    var readStream = fs.createReadStream("E://node/nodeTest.txt");

    var writeStream = fs.createWriteStream("E://node/nodeTestCopy.txt");

    readStream.on("data",function (data) {
        writeStream.write(data);
    });

    readStream.on("end",function () {
        writeStream.end();
    });

}
http.createServer(copy).listen(10000);



