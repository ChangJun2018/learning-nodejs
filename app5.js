//通过HTTP模块，创建本地服务器
let http=require('http');
//创建本地服务器方法
let server=http.createServer(function (req,res) {
    console.log('客户端向服务器端发送请求'+req.url);
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("Server is working!");
});
//服务对象监听服务器地址以及端口号
server.listen(3002,"127.0.0.1");

console.log("server is running....");