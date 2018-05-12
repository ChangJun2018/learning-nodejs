//事件模块

//1.引入事件模块
let events=require('events');

//2.创建EventEmitter对象
let myEmitter=new events.EventEmitter();

//3.注册事件
myEmitter.on('someEvent',function (msg) {
    setImmediate(()=>{
        console.log(msg);
    })
});
myEmitter.emit('someEvent','实现事件并传递参数到注册时间的回调函数中');
console.log(1);

