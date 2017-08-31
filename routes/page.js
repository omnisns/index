/**
 * Created by TYRANT on 2017/8/31.
 */
var http = require("http");

function page(req,res) {
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    res.write("<html><body>");
    res.write("<h1>这个页面</h1>");
    res.write("</body></html>");
    res.end();

}
http.createServer(page).listen(10000);