//1.引入文件系统模块
let fs=require('fs');
//2.使用模块对象调用方法
// fs.unlink('writeMe3.txt',function (err) {
//     if(err)
//         throw err;
//     console.log(1);
// });
//创建文件夹同步
// fs.mkdirSync('stuff');
//删除文件夹同步
// fs.rmdirSync('stuff');
//异步创建文件夹
// fs.mkdir('changjun',function () {
//     fs.readFile('readMe.txt','utf8',(err,data)=>{
//         if(err) throw err;
//         fs.writeFile('./changjun/riteMe.txt',data);
//     });
// });
//异步删除文件夹
fs.unlink('./changjun/riteMe.txt',function () {
    fs.rmdir('changjun',function (err) {
        if(err) throw err;
        console.log('文件夹删除成功');
    });
});

