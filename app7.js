//引入express模块
let express=require('express');
//实例化expres对象
let app=express();

//配置视图引擎
app.set('view engine','ejs');

//让服务器识别外部样式表
app.use('/assets',express.static('assets'));

//通过对象调用对应的方法

//根据用户请求的地址，返回对应的数据信息
app.get('/',function (req,res) {
    res.render('index');
});
app.get('/contact',function (req,res) {
    res.render('contact')
});

//路由参数
app.get('/profie/:id',function (req,res) {
    let data=[{age:21,name:['ChangJun','WuXiaoHong']},{age:21,name:['ChangJun2','NiXiaoLei',]}];
    res.render('profile',{websiteName:req.params.id,data:data});
});

//监听服务器的端口号
app.listen(8888);