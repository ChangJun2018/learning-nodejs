let http=require('http')
let fs = require('fs');
//搭建服务器
let server = http.createServer(function (req, res) {

    if (req.url==='/home' || req.url==='/'){
        res.writeHead(200, {"Content-type": "text/html"});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if (req.url==='/contact'){
        res.writeHead(200, {"Content-type": "text/html"});
        fs.createReadStream(__dirname + '/content.html').pipe(res);
    }else if(req.url==='/api/about'){
        let data=[{name:"ChangJun",age:'30'},{name:"Bucky",age:'28'}]
        res.writeHead(200, {"Content-type": "application/json"});
        res.end(JSON.stringify(data))
    }
})
server.listen(3000,'127.0.0.1');
console.log('server is running....')

// myReadStream.on('data',(chunk)=>{
//     console.log('=============正在接受一部分数据============');
//     //写入数据
//     myWriteStream.write(chunk);
// });